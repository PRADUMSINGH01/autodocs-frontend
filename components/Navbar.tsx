"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-surface)]/80 backdrop-blur-lg border-b border-[var(--color-border)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="bg-[var(--color-surface)] p-2 rounded-xl border border-[var(--color-border)] group-hover:border-[var(--color-primary)]/50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[var(--color-primary)]"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            </div>
            <span className="font-bold text-xl text-[var(--color-foreground)] tracking-tight">
              Auto<span className="text-[var(--color-primary)]">Docs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm rounded-full px-4 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm font-medium rounded-full hover:bg-[var(--color-border)]/50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm font-medium">
              Log in
            </Link>
            <Link
              href="/signup"
              className="relative group overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] text-[var(--color-foreground)] transition-all px-5 py-2.5 rounded-xl text-sm font-semibold shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-2 transition-colors"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Popup */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-surface)] border-b border-[var(--color-border)]">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-border)]/30 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-[var(--color-border)] flex flex-col gap-3">
              <Link
                href="/login"
                className="block px-4 py-3 text-base font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:bg-[var(--color-border)]/30 rounded-xl transition-colors text-center border border-[var(--color-border)]"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center bg-[var(--color-primary)] text-[var(--color-background)] transition-colors px-4 py-3 rounded-xl text-base font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                onClick={() => setIsOpen(false)}
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
