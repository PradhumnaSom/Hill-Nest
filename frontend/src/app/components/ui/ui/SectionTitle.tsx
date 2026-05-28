interface SectionTitleProps {
  label: string;
  title: string;
}

export default function SectionTitle({
  label,
  title,
}: SectionTitleProps) {
  return (
    <div className="text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold uppercase tracking-widest">
        {label}
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
    </div>
  );
}