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
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-3 text-gray-600">
          Cozy interiors with premium comfort and scenic views.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xl font-semibold text-green-700">
            {price}
          </span>

          <Button>
            Book
          </Button>
        </div>
      </div>
    </Card>
  );
}
