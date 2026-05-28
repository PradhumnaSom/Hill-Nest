import Navbar from "@/app/components/ui/layout/Navbar";
import Footer from "@/app/components/ui/layout/Footer";

import Hero from "@/app/sections/Hero";
import Rooms from "@/app/sections/Rooms";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Rooms />
      <Footer />
    </main>
  );
}
