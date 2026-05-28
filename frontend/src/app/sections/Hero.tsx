import Container from "@/app/components/ui/ui/Container";
import Button from "@/app/components/ui/ui/Button";

export default function Hero() {
  return (
    <section id="home" className="py-24 bg-gradient-to-b from-green-50 to-white">
      <Container>
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.2em] text-green-700 font-semibold">
            HillNest Homestay
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold leading-tight">
            A Calm Mountain Stay Near Siliguri
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Enjoy peaceful rooms, fresh air, and warm hospitality designed for relaxing getaways.
          </p>

          <div className="mt-8">
            <Button>Check Availability</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
