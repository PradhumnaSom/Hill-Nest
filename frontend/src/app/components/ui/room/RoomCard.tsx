import Card from "@/app/components/ui/ui/Card";
import Button from "@/app/components/ui/ui/Button";

interface RoomProps {
  title: string;
  price: string;
  image: string;
}

export default function RoomCard({
  title,
  price,
  image,
}: RoomProps) {
  return (
    <Card>
      {/* Image with zoom on hover */}
      <div className="overflow-hidden h-64 relative">
        <img
          src={'/${image}'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Rating badge */}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
          ⭐ 4.9
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          Cozy interiors with premium comfort and scenic views.
        </p>

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">from</p>
            <span className="text-lg font-bold text-green-700">
              {price}
            </span>
          </div>

          <Button>
            Book
          </Button>
        </div>
      </div>
    </Card>
  );
}
