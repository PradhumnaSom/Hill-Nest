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
      "bg-green-700 text-white hover:bg-green-800",

    secondary:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      className={`px-8 py-4 rounded-2xl font-semibold transition duration-300 hover:scale-105 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}