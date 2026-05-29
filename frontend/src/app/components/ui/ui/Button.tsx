interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-gradient-to-r from-green-700 to-green-600 text-white shadow-md shadow-green-900/20 hover:shadow-lg hover:shadow-green-900/30 hover:from-green-600 hover:to-green-500",

    secondary:
      "border-2 border-white/70 text-white backdrop-blur-sm hover:bg-white hover:text-green-800",
  };

  return (
    <button
      className={`px-7 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}