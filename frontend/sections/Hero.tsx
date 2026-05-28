import Button from "@/app/components/ui/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        <p className="uppercase tracking-[0.3em] text-green-200 mb-4">
          Welcome To HillNest
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Experience Peace In The Hills
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Luxury mountain homestay with breathtaking views and
          authentic hospitality.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button>
            Book Your Stay
          </Button>

          <Button variant="secondary">
            Explore Rooms
          </Button>
        </div>
      </div>
    </section>
  );
}
