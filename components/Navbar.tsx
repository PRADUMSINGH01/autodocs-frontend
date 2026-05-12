"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Showcase", href: "/showcase" },
    { name: "Features", href: "/#features" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-emerald-900/5 py-3"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 shadow-lg ${
               scrolled ? "bg-[#2D6A4F] text-white shadow-emerald-900/10" : "bg-white text-[#2D6A4F] shadow-black/5"
            }`}>
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            </div>
            <span
              className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-500 ${
                scrolled ? "text-[#1B3022]" : "text-white"
              }`}
            >
              ShipQuill
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-bold tracking-tight transition-all duration-300 ${
                  scrolled
                    ? "text-[#1B3022]/70 hover:text-[#2D6A4F] hover:bg-emerald-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className={`text-sm font-bold transition-colors duration-300 ${
                scrolled ? "text-[#1B3022]/70 hover:text-[#1B3022]" : "text-white/70 hover:text-white"
              }`}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className={`group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold shadow-lg transition-all duration-300 active:scale-95 ${
                scrolled
                  ? "bg-[#2D6A4F] text-white hover:bg-[#1B3022] hover:shadow-emerald-900/20"
                  : "bg-white text-[#2D6A4F] hover:bg-emerald-50 shadow-black/10"
              }`}
            >
              Start Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-[#1B3022] hover:bg-emerald-50" : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-[-1] bg-white pt-24 px-6 pb-12 flex flex-col">
            <div className="flex-1 space-y-2 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl text-2xl font-serif font-bold text-[#1B3022] hover:bg-emerald-50 active:bg-emerald-100 transition-colors"
                >
                  {link.name}
                  <ChevronRight className="w-6 h-6 text-emerald-200" />
                </Link>
              ))}
            </div>
            
            <div className="space-y-4 pt-8 border-t border-emerald-50">
              <Link
                href="/login"
                className="flex items-center justify-center w-full p-4 rounded-2xl text-lg font-bold text-[#1B3022] border-2 border-emerald-50 hover:bg-emerald-50"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="flex items-center justify-center w-full p-5 rounded-2xl text-lg font-bold bg-[#2D6A4F] text-white shadow-xl shadow-emerald-900/20"
                onClick={() => setIsOpen(false)}
              >
                Start for Free
              </Link>
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
