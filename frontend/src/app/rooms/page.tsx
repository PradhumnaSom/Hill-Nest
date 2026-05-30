"use client";

import { useEffect, useState } from "react";
import RoomCard from "@/app/components/ui/room/RoomCard";

type Room = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

export default function RoomsPage() {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
      .then(res => res.json())
      .then(data => setRooms(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {rooms.map((room) => (
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
