import Container from "@/app/components/ui/ui/Container";
import Button from "@/app/components/ui/ui/Button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Hill<span className="text-green-700">Nest</span>
            </h1>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8 font-medium text-gray-600">
            {[
              { label: "Home", href: "#home" },
              { label: "Rooms", href: "#rooms" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="relative group transition-colors duration-200 hover:text-green-700"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-green-600 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <Button>Book Now</Button>
        </div>
      </Container>
    </nav>
  );
}
