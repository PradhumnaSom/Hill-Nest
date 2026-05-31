"use client";

import { useState, useEffect } from "react";
import Container from "@/app/components/ui/ui/Container";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100/80"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-700 to-emerald-500 flex items-center justify-center shadow-md shadow-green-900/20 group-hover:scale-110 transition-transform duration-300">
              <span className="text-lg">🌿</span>
            </div>
            <h1
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Hill<span className="text-green-400">Nest</span>
            </h1>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-7 font-medium text-sm">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`relative group transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-600 hover:text-green-700"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-green-500 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <span
              className={`w-5 h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 animate-fade-in">
          <div className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-green-700 transition-colors py-1 border-b border-gray-50"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
