# 🏨 Hotel Booking Web App (Full Stack)

A full-stack hotel booking web application built using **Next.js (Frontend)**, **Node.js + Express (Backend)**, and **MongoDB (Database)**.

---

## 🚀 Features

### 🟢 Frontend
- Responsive UI with modern design
- Room listing with dynamic data
- Reusable components (Card, Button, Navbar, etc.)
- Fetch data from backend APIs
- Dynamic rendering using React hooks

### 🟢 Backend
- REST API using Express.js
- MongoDB integration using Mongoose
- Room management APIs
- JSON-based data handling

### 🟢 Database
- MongoDB Atlas (cloud database)
- Stores room data
- Automatically creates collections

---

## 🧱 Project Structure
Project-F/
│
├── frontend/ # Next.js frontend
│ ├── public/ # Static assets (images)
│ ├── src/
│ │ ├── app/
│ │ ├── components/
│ │ ├── sections/
│ │ └── services/
│ └── package.json
│
├── backend/ # Express backend
│ ├── config/
│ │ └── db.js # MongoDB connection
│ ├── models/
│ │ └── Room.js
│ ├── routes/
│ │ └── roomRoutes.js
│ ├── server.js
│ ├── .env
│ └── package.json
│
└── .gitignore


---

## ⚙️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **API Testing:** Postman

---

## 🔌 API Endpoints

### 📌 Rooms

| Method | Endpoint            | Description        |
|--------|--------------------|--------------------|
| GET    | /api/rooms         | Get all rooms      |
| POST   | /api/rooms         | Add new room       |

---

## 🧩 How It Works (Flow)
Frontend → API Request → Backend → MongoDB
Frontend ← API Response ← Backend

---

## 🛠️ Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone <your-repo-url>
cd Project-F

 2. Setup Backend
cd backend
npm install
Create .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000
Run backend:

npx nodemon server.js
🔹 3. Setup Frontend
cd frontend
npm install
npm run dev
Open:

http://localhost:3000

🖼️ Image Handling
Images are stored in:

frontend/public/
Example:

"image": "img.jpg"
Accessed in frontend as:

<img src={`/${image}`} />

🧪 Testing APIs
Use Postman:

GET Rooms
GET http://localhost:5000/api/rooms
POST Room
{
  "name": "Deluxe Room",
  "price": 3000,
  "description": "Nice room",
  "image": "img.jpg",
  "available": true
}

🔐 Environment Variables
Do NOT upload .env file to GitHub.

Add in .gitignore:

node_modules/
.env

🚀 Future Improvements
User authentication (JWT)

Booking system

Payment integration

Admin dashboard

Image upload (Cloudinary)

📌 Notes
Ensure backend is running before frontend

MongoDB database is created automatically when data is inserted

Use correct image paths for proper rendering

⭐ Conclusion
This project demonstrates a complete full-stack workflow:

Frontend UI → Backend API → Database → Dynamic Rendering

---

# 🔥 What you should do now

1. Copy this  
2. Create file:
Project F/README.md


3. Paste it  
4. Commit:

```bash
git add README.md
git commit -m "Added README"
git push origin sahil