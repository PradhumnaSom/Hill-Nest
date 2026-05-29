require("dotenv").config();

const express = require("express");
const cors = require("cors");
require("dotenv").config();

//db connection
const connectDB = require("./config/db");

const app = express();

// connect DB
connectDB();
console.log(process.env.MONGO_URI);

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// routes
const roomRoutes = require("./routes/roomRoutes");
app.use("/api/rooms", roomRoutes);

// start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});