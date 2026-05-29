# Project-F: Hotel Booking Web App (Full Stack)

A full-stack hotel booking web application built with Next.js (frontend), Node.js + Express (backend), and MongoDB (database).

## Features

### Frontend
- Responsive UI
- Room listing with dynamic data
- Reusable UI components (Card, Button, Navbar, etc.)
- API integration with backend

### Backend
- REST API with Express.js
- MongoDB integration with Mongoose
- Room management endpoints

### Database
- MongoDB Atlas
- Stores room data

## Project Structure

```text
Project-F/
|- frontend/
|  |- public/
|  `- src/
|     |- app/
|     |- components/
|     |- sections/
|     `- services/
`- backend/
   |- config/
   |- models/
   |- routes/
   `- server.js
```

## Tech Stack
- Frontend: Next.js, React, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB Atlas

## API Endpoints

### Rooms
- `GET /api/rooms` - Get all rooms
- `POST /api/rooms` - Add a new room

## Setup

### 1. Clone repository

```bash
git clone <your-repo-url>
cd Project-F
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create `.env`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npx nodemon server.js
```

### 3. Frontend setup

```bash
cd ../frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes
- Ensure backend is running before frontend requests.
- Keep `.env` out of version control.
- Place room images in `frontend/public/` and reference by filename.
