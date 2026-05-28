interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 overflow-hidden">
      {children}
    </div>
  );
}