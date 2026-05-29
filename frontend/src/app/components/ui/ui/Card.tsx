interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md shadow-gray-200/80 hover:-translate-y-3 hover:shadow-xl hover:shadow-gray-200 transition-all duration-300 overflow-hidden group">
      {children}
    </div>
  );
}