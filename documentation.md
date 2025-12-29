# Playful Computer Slide Deck - Project Documentation

## 1. Overview
This project is a "Playful Computer Slide Deck" built using **React** and **Vite**. It features interactive slides and a modern UI. This documentation guides you through setting up the environment, running the project locally, and deploying it, with specific instructions for both **Windows** and **Linux** users.

---

## 2. Prerequisites
Before running the project, you must have **Node.js** and **npm** installed.

### Windows Users
1.  **Download Node.js**:
    *   Visit the official website: [https://nodejs.org/](https://nodejs.org/)
    *   Download the **LTS (Long Term Support)** version installer (e.g., v18.x or v20.x).
2.  **Install**:
    *   Run the downloaded `.msi` installer.
    *   Follow the installation wizard prompts (accepting defaults is usually fine).
    *   **Important**: Ensure the checkbox "Add to PATH" is selected during installation.
3.  **Verify Installation**:
    *   Press `Win + R`, type `cmd`, and press Enter.
    *   Type `node -v` and press Enter (should show a version like v18.17.0).
    *   Type `npm -v` and press Enter (should show a version like 9.6.7).

### Linux Users (Ubuntu/Debian)
1.  **Update Package Index**:
    ```bash
    sudo apt update
    ```
2.  **Install Node.js & npm**:
    *   It is often best to use a version manager (like `nvm`) or add the NodeSource repository for the latest versions, but for simplicity, you can use the default repository if it's recent enough, or follow these commands for a modern version:
    ```bash
    # Install curl if not present
    sudo apt install curl
    # Add NodeSource repo (for Node.js 18.x)
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    # Install Node.js
    sudo apt install -y nodejs
    ```
3.  **Verify Installation**:
    ```bash
    node -v
    npm -v
    ```

---

## 3. Installation & Setup

### Step 1: Unzip the Project
Extract the provided project archive (`playful_computer_slide_deck.zip`) to a folder on your computer.

### Step 2: Open a Terminal in the Project Folder

**Windows:**
1.  Open the extracted folder in File Explorer.
2.  Click on the address bar at the top, type `cmd`, and press Enter. This opens the Command Prompt directly in that folder.

**Linux:**
1.  Open your terminal.
2.  Navigate to the folder using `cd`:
    ```bash
    cd /path/to/extracted/folder/
    ```

### Step 3: Install Dependencies
Run the following command to download all required libraries:

```bash
npm install
```
*This may take a few minutes.*

---

## 4. Running the Project Locally

To see the presentation on your computer:

1.  In the same terminal, run:
    ```bash
    npm run dev
    ```
2.  The terminal will show a local URL, usually:
    ```
    http://localhost:3000
    ```
3.  Open this link in your web browser (Chrome, Edge, Firefox, etc.). The presentation should load.

---

## 5. Building for Production
When you are ready to deploy or share the final version, you need to create a "build". This optimizes the code.

1.  Run the build command:
    ```bash
    npm run build
    ```
2.  This creates a new folder named `build` (or `dist`) inside your project directory. This folder contains the static files that can be uploaded to any server.

---

## 6. Deployment Guide

### Option A: GitHub Pages (Recommended)
This requires a GitHub account.

1.  **Initialize Git** (if not done):
    *   **Windows**: You need Git installed ([git-scm.com](https://git-scm.com/)). Run these in your terminal:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        ```
    *   **Linux**:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        ```
2.  **Create a Repo**: Go to GitHub.com, create a new repository (empty).
3.  **Link Repo**:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    ```
    *(Replace the URL with your actual repository URL)*
4.  **Edit Configuration (One time)**:
    *   Open `package.json` file in a text editor.
    *   Find the `"homepage"` line. Change it to: `"https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"`.
5.  **Deploy**:
    ```bash
    npm run deploy
    ```
    *This runs a script that builds the project and pushes it to a special `gh-pages` branch on GitHub.*

### Option B: Drag-and-Drop Hosting (Netlify)
Building manually is easier if you don't want to use Git.

1.  Run `npm run build`.
2.  Locate the `build` folder in your project directory.
3.  Go to [Netlify Drop](https://app.netlify.com/drop).
4.  Drag the `build` folder onto the page.
5.  It will be online instantly.
