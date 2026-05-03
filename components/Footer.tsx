"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-background)] border-t border-[var(--color-border)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-[var(--color-surface)] p-2 rounded-xl border border-[var(--color-border)] group-hover:border-[var(--color-primary)]/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--color-primary)]"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
              </div>
              <span className="font-bold text-xl text-[var(--color-foreground)] tracking-tight">
                Auto<span className="text-[var(--color-primary)]">Docs</span>
              </span>
            </Link>
            <p className="text-[var(--color-muted)] mb-6 max-w-sm leading-relaxed">
              The seamless documentation tool for modern codebases. Push your code, and we'll handle the rest.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-[var(--color-foreground)] mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">Features</Link></li>
              <li><Link href="/#how-it-works" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">How it Works</Link></li>
              <li><Link href="/pricing" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">Pricing</Link></li>
              <li><Link href="#changelog" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--color-foreground)] mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/docs" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">Documentation</Link></li>
              <li><Link href="/blog" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">Blog</Link></li>
              <li><Link href="/community" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">Community</Link></li>
              <li><Link href="/help" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--color-foreground)] mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/careers" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">Careers</Link></li>
              <li><Link href="/policy" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/policy" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-muted)] text-sm">
            &copy; {currentYear} Auto Docs Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
            <span>Made with</span>
            <span className="text-[var(--color-secondary)]">♥</span>
            <span>for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
