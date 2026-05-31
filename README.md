# Project-F: Hotel Booking Web App (Full Stack)

A full-stack hotel booking web app built with Next.js (frontend), Node.js + Express (backend), and MongoDB (database).

## Features

### Frontend
- Responsive UI with Tailwind CSS
- Dynamic room listing from backend API
- Reusable UI components (Card, Button, Navbar, Footer)
- Rooms page at `/rooms`
- Login and register pages using React hooks
- Authentication service layer with JWT localStorage handling

### Backend
- REST API with Express.js
- MongoDB integration with Mongoose
- Room management and booking endpoints
- Authentication endpoints for user registration and login
- JWT protected profile route
- Password hashing with bcryptjs
- Reusable authentication and role-ready middleware

### Database
- MongoDB Atlas (or local MongoDB)
- Stores room data, bookings, and user accounts with hashed passwords and roles

## Recent Contributor Update: Authentication System

This project now includes a complete authentication MVP while preserving the original folder structure and architecture.

### What was added
- Added `backend/controllers/` to keep request logic separate from route definitions.
- Added `backend/middleware/` for reusable JWT protection and role-based authorization helpers.
- Added a `User` model with `name`, `email`, `password`, `role`, and timestamps.
- Added secure registration and login using `bcryptjs` and `jsonwebtoken`.
- Added protected profile access through `GET /api/profile`.
- Added frontend login and registration pages under the existing Next.js App Router.
- Added `frontend/src/services/authService.ts` to centralize auth API calls and token storage.
- Updated the navbar with login/register navigation.

### Implementation approach
- The existing architecture was preserved.
- No global state library was introduced.
- No TypeScript conversion was performed on the backend.
- Authentication logic is modular, beginner-friendly, and ready for future expansion.
- Environment examples were added for both frontend and backend setup.


## Project Structure

```text
Project-F/
|- frontend/
|  |- public/
|  `- src/
|     |- app/
|     |  |- components/
|     |  |- login/
|     |  |- register/
|     |  `- sections/
|     `- services/
`- backend/
   |- config/
   |- controllers/
   |- middleware/
   |- models/
   |- routes/
   `- server.js
```

## Tech Stack
- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB + Mongoose

## API Endpoints

### Auth
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login an existing user and receive a JWT

### Profile
- `GET /api/profile` - Get the authenticated user's profile

### Rooms
- `GET /api/rooms` - Get all rooms
- `POST /api/rooms` - Create a room
- `GET /api/rooms/:id` - Get room by ID

### Bookings
- `POST /api/bookings` - Create a booking
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get booking by ID

## Authentication Flow

1. A user registers through `/register`.
2. The frontend sends `name`, `email`, and `password` to `POST /api/auth/register`.
3. The backend validates the request, hashes the password, creates the user, and returns a JWT.
4. The frontend stores the JWT and user details in `localStorage`.
5. A returning user logs in through `/login`.
6. The backend verifies the password and returns a fresh JWT.
7. Protected requests send the token in the `Authorization` header as `Bearer <token>`.
8. The auth middleware verifies the token and attaches the current user to `req.user`.

## Security Notes

- Passwords are hashed before being saved to MongoDB.
- Password fields are excluded from normal user queries.
- JWT secrets are stored in environment variables.
- The MongoDB connection string is not logged by the server.
- CORS is configured through `CLIENT_URL`.
- Protected routes use reusable middleware instead of repeating token logic.

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
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:3000
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

Create `.env.local` if the backend URL is different from the default:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

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


## API Testing Examples

Register a user:

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

Access protected profile:

```bash
curl http://localhost:5000/api/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Future Scalability Suggestions

- Add refresh tokens or HTTP-only cookie auth for stronger production security.
- Add email verification and password reset flows.
- Add admin-only routes using the existing `authorizeRoles` middleware.
- Add validation middleware for cleaner request validation.
- Add automated tests for auth controllers and protected routes.

## Notes
- Start backend before opening `/rooms` in frontend.
- Keep `.env` out of version control.
- Place room images in `frontend/public/` and store filename (or full URL) in room `image` field.
