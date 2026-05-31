import Container from "@/app/components/ui/ui/Container";
import SectionTitle from "@/app/components/ui/ui/SectionTitle";

const amenities = [
  {
    icon: "🌄",
    title: "Panoramic Mountain Views",
    desc: "Every room faces the majestic Himalayan foothills with floor-to-ceiling windows to soak in the scenery.",
    color: "from-emerald-50 to-green-50",
    iconBg: "bg-emerald-100",
  },
  {
    icon: "☕",
    title: "Farm-Fresh Breakfast",
    desc: "Start your day with locally sourced organic breakfasts — fresh fruits, local breads, and masala chai.",
    color: "from-amber-50 to-orange-50",
    iconBg: "bg-amber-100",
  },
  {
    icon: "🛜",
    title: "High-Speed Wi-Fi",
    desc: "Stay connected with blazing-fast fiber internet throughout the property, perfect for remote workers.",
    color: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100",
  },
  {
    icon: "🧘",
    title: "Wellness & Yoga Space",
    desc: "Begin your mornings with guided yoga sessions on our open-air deck overlooking the valley.",
    color: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-100",
  },
  {
    icon: "🍃",
    title: "Nature Trails",
    desc: "Guided nature walks through tea gardens and forest trails, discovering the region's rich biodiversity.",
    color: "from-teal-50 to-cyan-50",
    iconBg: "bg-teal-100",
  },
  {
    icon: "🚗",
    title: "Free Pickup & Drop",
    desc: "Complimentary airport and railway station pickup from NJP/Siliguri for all our guests.",
    color: "from-rose-50 to-pink-50",
    iconBg: "bg-rose-100",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-28 bg-white">
      <Container>
        <SectionTitle
          label="Amenities"
          title="Everything You Need"
          subtitle="We've thought of every detail so you can simply relax and enjoy your highland escape."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map(({ icon, title, desc, color, iconBg }, i) => (
            <div
              key={title}
              className={`group bg-gradient-to-br ${color} rounded-2xl p-6 border border-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div
                className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg font-serif">{title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
