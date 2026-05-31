# Project-F: Hotel Booking Web App (Full Stack)

Project-F is a full-stack hotel booking application with a Next.js frontend and an Express + MongoDB backend.

## Features

- Browse all room listings in one view on the frontend (`/rooms`)
- Create bookings from room cards via booking form (`/booking?roomId=...`)
- View user-specific bookings on `/bookings`
- Register and login users with JWT-based authentication
- Protected profile and booking APIs

## Tech Stack

- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS
- Backend: Node.js, Express 5, Mongoose
- Database: MongoDB Atlas (or local MongoDB)
- Auth: bcryptjs + jsonwebtoken

## Project Structure

```text
Project-F/
|- frontend/
|  |- public/
|  `- src/
|     |- app/
|     |  |- booking/
|     |  |- bookings/
|     |  |- login/
|     |  |- register/
|     |  |- rooms/
|     |  `- user/
|     |- components/
|     `- services/
`- backend/
   |- config/
   |- controllers/
   |- middleware/
   |- models/
   |- routes/
   `- server.js
```

## API Endpoints

### Health
- `GET /` - Backend status check

### Rooms
- `GET /api/rooms` - Get all rooms (supports filters)
- `POST /api/rooms` - Create a room
- `GET /api/rooms/:id` - Get room by ID

### Bookings (JWT Protected)
- `POST /api/bookings` - Create booking for logged-in user
- `GET /api/bookings` - Get logged-in user bookings
- `GET /api/bookings/:id` - Get one booking (owner only)

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user and get JWT

### Profile
- `GET /api/profile` - Get current user profile (requires `Authorization: Bearer <token>`)

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

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
MONGO_DB=your_database_name
JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:3000
```

Run backend:

```bash
npm start
```

Backend default URL: `http://localhost:5000`

### 3. Frontend setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend default URL: `http://localhost:3000`

Optional frontend env (`frontend/.env.local`) if backend URL differs:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Quick API Examples

Register:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"secret123"}'
```

Login:

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"secret123"}'
```

Get bookings (JWT required):

```bash
curl http://localhost:5000/api/bookings \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Notes

- Start backend before testing frontend data pages.
- Keep `.env` files out of git.
- Store room images in `frontend/public/` and reference by filename or URL.
