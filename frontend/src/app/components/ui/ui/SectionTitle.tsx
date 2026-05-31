interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold uppercase tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
        {label}
      </span>

      <h2 className="mt-5 font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-500 text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}