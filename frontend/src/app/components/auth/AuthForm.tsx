"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { loginUser, registerUser } from "@/services/authService";

type AuthFormProps = {
  mode: "login" | "register";
};

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const isRegister = mode === "register";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      if (isRegister) {
        await registerUser({ name, email, password });
        router.push("/");
      } else {
        await loginUser({ email, password });
        router.push("/user");
      }

      router.refresh();
    } catch (currentError) {
      setError(
        currentError instanceof Error
          ? currentError.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafaf8] px-6 py-12 text-gray-900">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md flex-col justify-center">
        <Link
          href="/"
          className="mb-8 text-sm font-semibold text-green-700 transition-colors hover:text-green-800"
        >
          Back to HillNest
        </Link>

        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              {isRegister ? "Create account" : "Welcome back"}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              {isRegister ? "Register for Project-F" : "Login to Project-F"}
            </h1>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {isRegister
                ? "Create an account to manage bookings and future profile features."
                : "Use your email and password to continue securely."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isRegister && (
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  placeholder="Your full name"
                />
              </label>
            )}

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={6}
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                placeholder="At least 6 characters"
              />
            </label>

            {error && (
              <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {isSubmitting
                ? "Please wait..."
                : isRegister
                  ? "Create account"
                  : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            {isRegister ? "Already have an account?" : "New to Project-F?"}{" "}
            <Link
              href={isRegister ? "/login" : "/register"}
              className="font-semibold text-green-700 hover:text-green-800"
            >
              {isRegister ? "Login" : "Create an account"}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
