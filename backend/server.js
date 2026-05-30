require("dotenv").config();

const express = require("express");
const cors = require("cors");

//db connection
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// routes
const roomRoutes = require("./routes/roomRoutes");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use("/api/rooms", roomRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();
