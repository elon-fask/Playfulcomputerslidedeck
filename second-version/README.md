# Interactive Computer Components Presentation Dashboard

A modern, interactive web application for managing and presenting technical presentations about computer components and connectors. Built with React, Express, and SQLite with a beautiful glass-morphism UI theme.

## 🎯 Features

- **Dashboard**: View all presentations in a beautiful card-based layout
- **Theater Mode**: Full-screen presentation mode for distraction-free viewing
- **Two Presentations**:
  - **First Presentation**: Playful Computers (original presentation)
  - **Second Presentation**: Computer Components & Connectors (new technical deep-dive)
- **Glass Theme UI**: Modern glassmorphism design with blue-to-red gradient
- **Backend API**: RESTful API with SQLite database for presentation history
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 📂 Project Structure

```
second-version/
├── backend/                 # Express backend
│   ├── index.js            # Main server file
│   ├── package.json        # Backend dependencies
│   └── data/               # SQLite database storage
└── frontend/               # React frontend
    ├── src/
    │   ├── components/
    │   │   ├── PresentationDashboard.tsx
    │   │   ├── FirstPresentation.tsx
    │   │   ├── SecondPresentation.tsx
    │   │   └── SecondPresentationSlides.tsx
    │   ├── App.tsx         # Main app with routing
    │   ├── index.css       # Global styles with glass theme
    │   └── main.tsx        # Entry point
    ├── package.json        # Frontend dependencies
    └── vite.config.ts      # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Backend Setup**

```bash
cd backend
npm install
```

2. **Frontend Setup**

```bash
cd frontend
npm install
```

### Running the Application

You need to run both backend and frontend servers:

#### Terminal 1 - Backend Server

```bash
cd backend
npm run dev
```

The backend will run on `http://localhost:4000`

#### Terminal 2 - Frontend Server

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173`

### Access the Application

1. Open your browser to `http://localhost:5173`
2. You'll see the **Dashboard** with both presentations
3. Click on any presentation card to open it in a new window
4. Use the **Theater Mode** button for fullscreen viewing

## 📊 Second Presentation Content

The second presentation covers comprehensive technical topics:

### Cartes d'Extension (Expansion Cards)
- Carte Son (Sound Card)
- Carte Réseau (Network Card)
- Carte Capture Vidéo (Video Capture Card)
- Carte Contrôleur RAID
- Carte USB Additionnelle

### Composants Internes Principaux
- **CPU**: Architecture, models, socket types
- **RAM**: DDR3/4/5, capacity, frequency
- **Motherboard**: Chipset, format, socket
- **Storage**: HDD vs SSD, SATA vs NVMe
- **GPU**: VRAM, models, specifications
- **PSU**: Power ratings, certifications
- **Cooling**: Fans, heatsinks, watercooling

### Ports & Connectors
- **Internal**: PCI Express, SATA, M.2, Headers
- **External**: USB, HDMI, DisplayPort, Audio, Ethernet

## 🎨 Design Features

- **Glass Morphism**: Translucent cards with backdrop blur
- **Animated Gradient**: Dynamic blue-to-red background
- **Smooth Transitions**: Modern micro-animations
- **Premium Typography**: Inter font family
- **Responsive Layout**: Mobile-first design
- **Icon System**: Lucide React icons

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development
- **CSS3** with custom glass theme
- **Lucide React** for icons

### Backend
- **Express.js** - Web server
- **Better-SQLite3** - Database
- **CORS** - Cross-origin support

## 📝 API Endpoints

### GET `/api/presentations`
Returns all presentations from the database

**Response:**
```json
[
  {
    "id": 1,
    "title": "First Presentation - Playful Computers",
    "url": "http://localhost:5173/first-presentation",
    "created_at": "2025-12-29T10:00:00.000Z"
  }
]
```

### POST `/api/presentations`
Create a new presentation

**Request Body:**
```json
{
  "title": "New Presentation",
  "url": "http://example.com/presentation"
}
```

## 🎯 Usage Tips

1. **Navigation**: Use arrow keys or navigation controls to move between slides
2. **Theater Mode**: Click the Theater Mode button for fullscreen experience
3. **Dashboard**: Access from any presentation using the home button
4. **New Window**: Presentations open in new tabs/windows for multi-monitor setups

## 📦 Building for Production

### Frontend Build

```bash
cd frontend
npm run build
```

The production build will be in `frontend/dist/`

### Backend Production

```bash
cd backend
npm start
```

## 🔧 Configuration

### Backend Port
Edit `backend/index.js` line 57 to change the port:
```javascript
const PORT = process.env.PORT || 4000;
```

### Frontend API URL
Edit `frontend/src/components/PresentationDashboard.tsx` line 17 to change the API endpoint:
```typescript
fetch('http://localhost:4000/api/presentations')
```

## 📄 License

This project is created for educational purposes at OFPPT.

## 👨‍💻 Author

Created for OFPPT Technical Presentation

---

**Enjoy your presentations! 🎓✨**
