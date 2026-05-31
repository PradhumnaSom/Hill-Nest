"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RoomCard from "@/app/components/ui/room/RoomCard";
import Navbar from "@/app/components/ui/layout/Navbar";
import Footer from "@/app/components/ui/layout/Footer";
import SectionTitle from "@/app/components/ui/ui/SectionTitle";
import Container from "@/app/components/ui/ui/Container";

type Room = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

function RoomCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
      <div className="h-60 w-full bg-gray-100 animate-pulse" />
      <div className="p-6 space-y-3">
        <div className="h-6 w-3/4 rounded-lg bg-gray-100 animate-pulse" />
        <div className="h-4 w-full rounded-lg bg-gray-100 animate-pulse" />
        <div className="h-4 w-5/6 rounded-lg bg-gray-100 animate-pulse" />
      </div>
    </div>
  );
}

export default function RoomsPage() {
  const router = useRouter();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/rooms`)
      .then((res) => res.json())
      .then((data: Room[]) => {
        setRooms(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [apiBaseUrl]);

  const goToBookingPage = (roomId?: string) => {
    if (!roomId) return;
    router.push(`/booking?roomId=${roomId}`);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-green-50/30 to-white pt-24">
        <Container>
          <div className="py-16">
            <SectionTitle
              label="Browse Rooms"
              title="Find Your Perfect Room"
              subtitle="Live room data from backend. Click Book Room to continue to booking form."
            />

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {loading
                ? Array.from({ length: 3 }).map((_, i) => <RoomCardSkeleton key={i} />)
                : rooms.length === 0
                ? (
                  <div className="col-span-3 py-20 text-center">
                    <p className="text-gray-500 text-lg">No rooms available right now.</p>
                  </div>
                )
                : rooms.map((room) => (
                  <RoomCard
                    key={room._id}
                    roomId={room._id}
                    title={room.name}
                    price={`${"\u20B9"}${room.price}`}
                    image={room.image}
                    onBook={goToBookingPage}
                  />
                ))}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
