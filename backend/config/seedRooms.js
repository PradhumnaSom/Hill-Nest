const Room = require("../models/Room");

const sampleRooms = [
  {
    name: "Deluxe Valley Room",
    price: 2999,
    description: "Wake up to peaceful valley views, warm wooden interiors, Wi-Fi, and breakfast included.",
    image: "/room-deluxe.png",
    roomType: "Deluxe",
    available: true,
  },
  {
    name: "Premium Family Suite",
    price: 4499,
    description: "A spacious family suite with a private lounge, mountain-facing balcony, and extra comfort.",
    image: "/room-suite.png",
    roomType: "Suite",
    available: true,
  },
  {
    name: "Garden View Room",
    price: 2499,
    description: "A cozy garden-facing room for couples and solo travelers looking for a calm retreat.",
    image: "/room-garden.png",
    roomType: "Standard",
    available: true,
  },
];

async function seedRoomsIfEmpty() {
  const count = await Room.countDocuments();

  if (count > 0) {
    return false;
  }

  await Room.insertMany(sampleRooms);
  console.log("Sample rooms seeded ✅");
  return true;
}

module.exports = {
  seedRoomsIfEmpty,
};
