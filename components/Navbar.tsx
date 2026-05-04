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
    { name: "Features", href: "/#features" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/10 shadow-sm py-4" : "bg-white/60 backdrop-blur-md py-6 rounded-b-xl"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <span className="font-serif text-[22px] font-bold text-[#1a231f] tracking-tight flex items-baseline">
              ShipQuill
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 ml-0.5 mb-1" />
            </span>
          </Link>

          {/* Desktop Navigation - Absolutely Centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#1a231f] hover:opacity-70 transition-opacity text-[15px] font-medium tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-[#1a231f] hover:opacity-70 transition-opacity text-[15px] font-medium"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-[#1f2d25] text-white hover:bg-black transition-colors px-6 py-2.5 rounded-full text-[15px] font-semibold tracking-wide shadow-md"
            >
              Start for Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1a231f] p-2"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Popup */}
      {isOpen && (
        <div className="md:hidden bg-[#f8f9f7] absolute top-full left-0 w-full shadow-lg border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg text-[#1a231f] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-200 flex flex-col gap-3">
              <Link
                href="/login"
                className="block w-full text-center text-[#1a231f] px-6 py-3 rounded-full text-lg font-medium border border-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center bg-[#1f2d25] text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Start for Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
