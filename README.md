# Project-F: Hotel Booking Web App (Full Stack)

A full-stack hotel booking web app built with Next.js (frontend), Node.js + Express (backend), and MongoDB (database).

## Features

### Frontend
- Responsive UI with Tailwind CSS
- Dynamic room listing from backend API
- Reusable UI components (Card, Button, Navbar, Footer)
- Rooms page at `/rooms`

### Backend
- REST API with Express.js
- MongoDB integration using Mongoose
- Room APIs (`/api/rooms`)
- Booking APIs (`/api/bookings`)
- Request validation for booking creation

### Database
- MongoDB Atlas (or local MongoDB)
- Collections for `rooms` and `bookings`

## Project Structure

```text
Project-F/
|- frontend/
|  |- public/
|  `- src/
|     `- app/
|        |- components/
|        |- rooms/
|        `- sections/
`- backend/
   |- config/
   |- controllers/
   |- models/
   |- routes/
   `- server.js
```

## Tech Stack
- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB + Mongoose

## API Endpoints

### Rooms
- `GET /api/rooms` - Get all rooms
- `POST /api/rooms` - Create a room
- `GET /api/rooms/:id` - Get room by ID

### Bookings
- `POST /api/bookings` - Create a booking
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get booking by ID

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

Create `.env` file in `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm start
```

Backend runs on `http://localhost:5000`.

### 3. Frontend setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`.

## Booking Request Example

`POST /api/bookings`

```json
{
  "room": "ROOM_OBJECT_ID",
  "name": "John Doe",
  "email": "john@example.com",
  "checkIn": "2026-06-05",
  "checkOut": "2026-06-08",
  "guests": 2
}
```

## Notes
- Start backend before opening `/rooms` in frontend.
- Keep `.env` out of version control.
- Place room images in `frontend/public/` and store filename (or full URL) in room `image` field.
