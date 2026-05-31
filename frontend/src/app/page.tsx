import Navbar from "@/app/components/ui/layout/Navbar";
import Footer from "@/app/components/ui/layout/Footer";
import Hero from "@/app/sections/Hero";
import Rooms from "@/app/sections/Rooms";
import Amenities from "@/app/sections/Amenities";
import GalleryAndTestimonials from "@/app/sections/GalleryAndTestimonials";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Rooms />
      <Amenities />
      <GalleryAndTestimonials />
      <Footer />
    </main>
  );
}
