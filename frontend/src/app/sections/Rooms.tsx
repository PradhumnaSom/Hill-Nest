import Container from "@/app/components/ui/ui/Container";
import SectionTitle from "@/app/components/ui/ui/SectionTitle";
import RoomCard from "@/app/components/ui/room/RoomCard";

const rooms = [
  {
    title: "Deluxe Valley Room",
    price: "INR 2,999 / night",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Premium Family Suite",
    price: "INR 4,499 / night",
    image: "https://images.unsplash.com/photo-1616594039964-3af0e8ec9f1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Garden View Room",
    price: "INR 2,499 / night",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-gray-50">
      <Container>
        <SectionTitle label="Our Rooms" title="Choose Your Perfect Stay" />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard
              key={room.title}
              title={room.title}
              price={room.price}
              image={room.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
