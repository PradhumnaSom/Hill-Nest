import Container from "@/app/components/ui/ui/Container";
import Button from "@/app/components/ui/ui/Button";
import HomeUserBanner from "@/app/components/user/HomeUserBanner";

export default function Hero() {
  return (
    <section id="home" className="py-28 bg-gradient-to-b from-green-50 via-emerald-50/40 to-white">
      <Container>
        <div className="max-w-3xl">
          {/* Label badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-800 text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
            HillNest Homestay
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            A Calm Mountain Stay{" "}
            <span className="text-green-700">Near Siliguri</span>
          </h2>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
            Enjoy peaceful rooms, fresh air, and warm hospitality designed for relaxing getaways.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button>Check Availability</Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="text-green-600">✓</span> Free Cancellation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-600">✓</span> Breakfast Included
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-600">✓</span> Mountain Views
            </span>
          </div>

          <HomeUserBanner />
        </div>
      </Container>
    </section>
  );
}
