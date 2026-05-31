"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-green-800 to-emerald-600 text-white shadow-lg shadow-green-900/25 hover:shadow-xl hover:shadow-green-900/35 hover:from-green-700 hover:to-emerald-500",
    secondary:
      "border-2 border-white/70 text-white backdrop-blur-sm hover:bg-white hover:text-green-800",
    ghost:
      "bg-transparent text-green-700 hover:bg-green-50",
    outline:
      "border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white",
  };

  const sizes = {
    sm:  "px-5 py-2 text-sm rounded-lg",
    md:  "px-7 py-3 text-sm rounded-xl",
    lg:  "px-9 py-4 text-base rounded-xl",
  };

  return (
    <button
      className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 inline-flex items-center justify-center gap-2 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
