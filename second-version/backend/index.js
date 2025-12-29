// backend/index.js
// Simple Express server with SQLite for presentation history

import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Initialize SQLite DB (file stored in data folder)
const db = new Database(path.join(__dirname, 'data', 'presentations.db'));

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS presentations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);

// Seed with sample data if empty
const count = db.prepare('SELECT COUNT(*) as cnt FROM presentations').get().cnt;
if (count === 0) {
    const insert = db.prepare('INSERT INTO presentations (title, url) VALUES (?, ?)');
    insert.run('First Presentation - Playful Computers', 'http://localhost:5173/first-presentation');
    insert.run('Second Presentation - Computer Components & Connectors', 'http://localhost:5173/second-presentation');
}

// GET all presentations
app.get('/api/presentations', (req, res) => {
    const rows = db.prepare('SELECT * FROM presentations ORDER BY created_at DESC').all();
    res.json(rows);
});

// POST new presentation
app.post('/api/presentations', (req, res) => {
    const { title, url } = req.body;
    if (!title || !url) {
        return res.status(400).json({ error: 'title and url required' });
    }
    const stmt = db.prepare('INSERT INTO presentations (title, url) VALUES (?, ?)');
    const info = stmt.run(title, url);
    const newPres = db.prepare('SELECT * FROM presentations WHERE id = ?').get(info.lastInsertRowid);
    res.status(201).json(newPres);
});

// Serve static frontend build (if any)
app.use('/static', express.static(path.join(__dirname, '..', 'frontend', 'dist')));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend server listening on http://localhost:${PORT}`);
});
