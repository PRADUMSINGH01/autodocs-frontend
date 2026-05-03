"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ToastProvider";

export default function Signup() {
  const { success, error } = useToast();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    // Simulate an API call
    if (email === "error@company.com") {
      error("This email is already registered.");
    } else {
      success("Account created successfully!");
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 bg-[var(--color-background)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-secondary)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 group mb-6">
            <div className="bg-[var(--color-surface)] p-2 rounded-xl border border-[var(--color-border)] group-hover:border-[var(--color-primary)]/50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[var(--color-primary)]"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            </div>
            <span className="font-bold text-2xl text-[var(--color-foreground)] tracking-tight">
              Auto<span className="text-[var(--color-primary)]">Docs</span>
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-[var(--color-foreground)] tracking-tight">Create an account</h1>
          <p className="mt-2 text-[var(--color-muted)]">Start automating your documentation today</p>
        </div>

        <div className="bg-[var(--color-surface)]/80 backdrop-blur-xl border border-[var(--color-border)] py-8 px-6 sm:px-10 rounded-2xl shadow-2xl">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--color-foreground)] mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full appearance-none rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-foreground)] placeholder-[var(--color-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] sm:text-sm transition-colors"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-foreground)] mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-foreground)] placeholder-[var(--color-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] sm:text-sm transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--color-foreground)] mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full appearance-none rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-foreground)] placeholder-[var(--color-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] sm:text-sm transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-xl bg-[var(--color-primary)] px-4 py-3 text-sm font-bold text-[var(--color-background)] hover:bg-[var(--color-accent)] transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] mt-2"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--color-border)]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-[var(--color-surface)] px-4 text-[var(--color-muted)]">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="http://localhost:5000/api/auth/github/login"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm font-medium text-[var(--color-foreground)] hover:bg-[var(--color-border)]/50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                GitHub
              </a>
            </div>
          </div>
          
          <p className="mt-6 text-xs text-center text-[var(--color-muted)]">
            By creating an account, you agree to our{" "}
            <Link href="/policy" className="underline hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link>
            {" "}and{" "}
            <Link href="/policy" className="underline hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link>.
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-[var(--color-muted)]">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
