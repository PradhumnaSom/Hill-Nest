"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/app/components/ui/ui/Container";
import { getStoredUser, logoutUser } from "@/services/authService";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  const isHome = pathname === "/";

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-4 gap-3">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                  Hill<span className="text-green-700">Nest</span>
                </h1>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-gray-500">Home stay booking</p>
              </div>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8 font-medium text-gray-600">
            {[
              { label: "Home", href: "#home" },
              { label: "Rooms", href: "#rooms" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="relative group transition-colors duration-200 hover:text-green-700"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-green-600 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/user"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-green-700 hover:text-green-700"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-700">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <span>{user.name}</span>
                </Link>
                {!isHome && (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-red-500 hover:text-red-600"
                  >
                    Logout
                  </button>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden text-sm font-semibold text-gray-600 transition-colors hover:text-green-700 sm:inline"
                >
                  Login
                </Link>
                <Link href="/register">
                  <span className="inline-flex rounded-xl bg-gradient-to-r from-green-700 to-green-600 px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-md shadow-green-900/20 transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-500 hover:shadow-lg hover:shadow-green-900/30 active:scale-95">
                    Register
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}
