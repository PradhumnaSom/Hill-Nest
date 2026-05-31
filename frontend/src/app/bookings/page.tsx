"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/ui/layout/Navbar";
import Footer from "@/app/components/ui/layout/Footer";
import Container from "@/app/components/ui/ui/Container";

type Room = {
  _id: string;
  name: string;
  price: number;
};

type Booking = {
  _id: string;
  room: Room | null;
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  createdAt: string;
};

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export default function BookingsPage() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/bookings`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }
        return res.json();
      })
      .then((data: Booking[]) => setBookings(data))
      .catch(() => setError("Could not load bookings. Please ensure backend is running."))
      .finally(() => setLoading(false));
  }, [apiBaseUrl]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-green-50/30 to-white pt-24">
        <Container>
          <section className="py-14">
            <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
            <p className="text-sm text-gray-500 mt-2">All bookings created from your booking form.</p>

            {loading ? <p className="mt-8 text-gray-500">Loading bookings...</p> : null}
            {error ? <p className="mt-8 text-red-600">{error}</p> : null}

            {!loading && !error && bookings.length === 0 ? (
              <p className="mt-8 text-gray-500">No bookings yet.</p>
            ) : null}

            {!loading && !error && bookings.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                {bookings.map((booking) => (
                  <article key={booking._id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900">{booking.room?.name || "Room unavailable"}</h2>
                    <p className="text-sm text-gray-500 mt-1">Booked by {booking.name} ({booking.email})</p>

                    <div className="mt-4 text-sm text-gray-700 space-y-1">
                      <p>Check-in: {formatDate(booking.checkIn)}</p>
                      <p>Check-out: {formatDate(booking.checkOut)}</p>
                      <p>Guests: {booking.guests}</p>
                      <p>Total per night: {booking.room ? `${"\u20B9"}${booking.room.price}` : "N/A"}</p>
                    </div>

                    <p className="mt-4 text-xs text-gray-400">Created on {formatDate(booking.createdAt)}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
