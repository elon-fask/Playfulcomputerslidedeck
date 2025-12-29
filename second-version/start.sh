#!/bin/bash

# Quick Start Script for Presentation Dashboard
# This script starts both backend and frontend servers

echo "🚀 Starting Interactive Computer Components Presentation Dashboard..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo -e "${BLUE}📂 Project Directory: $SCRIPT_DIR${NC}"
echo ""

# Check if dependencies are installed
echo "📦 Checking dependencies..."

if [ ! -d "$SCRIPT_DIR/backend/node_modules" ]; then
    echo "Installing backend dependencies..."
    cd "$SCRIPT_DIR/backend" && npm install
fi

if [ ! -d "$SCRIPT_DIR/frontend/node_modules" ]; then
    echo "Installing frontend dependencies..."
    cd "$SCRIPT_DIR/frontend" && npm install
fi

echo -e "${GREEN}✅ Dependencies ready${NC}"
echo ""

# Create data directory if it doesn't exist
mkdir -p "$SCRIPT_DIR/backend/data"

echo "🎯 Starting servers..."
echo ""
echo -e "${BLUE}Backend:${NC}  http://localhost:4000"
echo -e "${BLUE}Frontend:${NC} http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Start backend in background
cd "$SCRIPT_DIR/backend"
npm run dev &
BACKEND_PID=$!

# Wait a bit for backend to start
sleep 2

# Start frontend in background
cd "$SCRIPT_DIR/frontend"
npm run dev &
FRONTEND_PID=$!

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    echo "✅ Servers stopped"
    exit 0
}

# Set trap to cleanup on Ctrl+C
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait
