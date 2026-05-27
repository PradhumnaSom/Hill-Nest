import Container from "@/app/components/ui/ui/Container";
import SectionTitle from "@/app/components/ui/ui/SectionTitle";
import RoomCard from "@/app/components/ui/room/RoomCard";

const rooms = [
  {
    title: "Mountain View Room",
    price: "INR 3,500/night",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Luxury Family Suite",
    price: "INR 5,200/night",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Wooden Cottage",
    price: "INR 4,000/night",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-28 bg-gray-50">
      <Container>
        <SectionTitle
          label="Our Rooms"
          title="Comfortable Stays For Every Traveler"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
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
