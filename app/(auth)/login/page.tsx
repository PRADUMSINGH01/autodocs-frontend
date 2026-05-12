"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ToastProvider";

export default function Login() {
  const { success, error } = useToast();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    if (email === "error@company.com") {
      error("Invalid email or password.");
    } else {
      success("Successfully signed in!");
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex-1 flex min-h-screen h-screen overflow-hidden">
      {/* Left — Background Panel */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden bg-[#0d1411]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B3022]/90 via-[#1B3022]/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-16 z-10">
          <Link href="/" className="flex items-baseline gap-1 mb-12">
            <span className="font-serif text-3xl font-bold text-white tracking-tight">ShipQuill</span>
            <span className="w-2 h-2 rounded-full bg-green-400 ml-0.5 mb-1 animate-pulse" />
          </Link>
          <blockquote className="space-y-4">
            <p className="text-2xl font-bold text-white leading-tight max-w-sm">
              "Our agents write the docs. <span className="text-green-400">You focus on the code.</span>"
            </p>
            <p className="text-white/50 text-sm font-medium">
              — Join 10,000+ developers shipping faster with ShipQuill
            </p>
          </blockquote>
          <div className="mt-10 flex gap-4">
            {["AST Analysis", "Auto Deploy", "MDX Output"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-bold border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right — Auth Form Panel */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-10 lg:px-16 py-8 bg-[#FDFCF9] relative overflow-hidden">
        {/* Mobile logo */}
        <div className="lg:hidden absolute top-8 left-6">
          <Link href="/" className="flex items-baseline gap-1">
            <span className="font-serif text-2xl font-bold text-[#1B3022] tracking-tight">ShipQuill</span>
            <span className="w-2 h-2 rounded-full bg-green-400 ml-0.5 mb-0.5 animate-pulse" />
          </Link>
        </div>

        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-green-400/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-sm z-10">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#1B3022] tracking-tight">Welcome back</h1>
            <p className="mt-1 text-[#1B3022]/60 font-medium text-sm">Sign in to your ShipQuill account</p>
          </div>

          <div className="bg-white rounded-3xl border border-green-900/10 shadow-xl shadow-green-900/5 p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#1B3022] mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-xl border border-green-900/15 bg-[#FDFCF9] px-4 py-3 text-[#1B3022] placeholder-[#1B3022]/30 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm transition-all"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-bold text-[#1B3022]">
                    Password
                  </label>
                  <Link href="#" className="text-xs font-semibold text-green-700 hover:text-green-900 transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-xl border border-green-900/15 bg-[#FDFCF9] px-4 py-3 text-[#1B3022] placeholder-[#1B3022]/30 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm transition-all"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#2D6A4F] text-white font-bold text-sm hover:bg-[#1B3022] transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 mt-1"
              >
                Sign In →
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 flex items-center gap-3">
              <div className="flex-1 h-px bg-green-900/10" />
              <span className="text-[#1B3022]/40 text-[10px] font-bold">OR CONTINUE WITH</span>
              <div className="flex-1 h-px bg-green-900/10" />
            </div>

            <a
              href={`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/auth/github/login`}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-green-900/15 bg-[#FDFCF9] px-4 py-3 text-sm font-bold text-[#1B3022] hover:bg-green-50 hover:border-green-200 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-[#1B3022]/50 font-medium">
            Don't have an account?{" "}
            <Link href="/signup" className="font-bold text-green-700 hover:text-green-900 transition-colors">
              Sign up free →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
