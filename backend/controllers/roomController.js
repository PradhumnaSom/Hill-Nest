// Import the Room model so we can interact with MongoDB
const Room = require("../models/Room");

/**
 * @desc    Get all rooms
 * @route   GET /api/rooms
 * @access  Public
 */
const getRooms = async (req, res) => {
  try {
    // Fetch all room documents from MongoDB
    const rooms = await Room.find();

    // Send rooms back to the frontend as JSON
    res.json(rooms);
  } catch (error) {
    // Handle unexpected server/database errors
    res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @desc    Create a new room
 * @route   POST /api/rooms
 * @access  Public (Admin later)
 */
const createRoom = async (req, res) => {
  try {
    // Create a new Room object using request body data
    const room = new Room(req.body);

    // Save room into MongoDB
    const savedRoom = await room.save();

    // Return newly created room
    res.status(201).json(savedRoom);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @desc    Get a single room by ID
 * @route   GET /api/rooms/:id
 * @access  Public
 */
const getRoomById = async (req, res) => {
  try {
    // req.params.id comes from URL
    // Example: /api/rooms/683f4f123456
    const room = await Room.findById(req.params.id);

    // If room doesn't exist
    if (!room) {
      return res.status(404).json({
        message: "Room not found",
      });
    }

    // Return room data
    res.json(room);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Export functions so routes can use them
module.exports = {
  getRooms,
  createRoom,
  getRoomById,
};