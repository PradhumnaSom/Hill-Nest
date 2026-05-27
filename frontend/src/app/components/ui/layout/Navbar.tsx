import Container from "@/app/components/ui/ui/Container";
import Button from "@/app/components/ui/ui/Button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <Container>
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">
            HillNest
          </h1>

          <div className="hidden md:flex gap-8 font-medium">
            <a href="#home">Home</a>
            <a href="#rooms">Rooms</a>
            <a href="#contact">Contact</a>
          </div>

          <Button>
            Book Now
          </Button>
        </div>
      </Container>
    </nav>
  );
}
