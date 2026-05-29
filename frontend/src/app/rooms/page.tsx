"use client";

import { useEffect, useState } from "react";
import RoomCard from "@/app/components/ui/room/RoomCard";

export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
      .then(res => res.json())
      .then(data => setRooms(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {rooms.map((room: any) => (
        <RoomCard
          key={room._id}
          title={room.name}
          price={`₹${room.price}`}
          image={room.image}
        />
      ))}
    </div>
  );
}