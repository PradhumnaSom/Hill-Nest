const express = require("express");

const {
  createBooking,
  getBookings,
  getBookingById,
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings);
router.get("/:id", getBookingById);

module.exports = router;
