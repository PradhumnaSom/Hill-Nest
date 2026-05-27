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
      <p className="uppercase tracking-[0.2em] text-green-700 font-semibold">
        {label}
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}