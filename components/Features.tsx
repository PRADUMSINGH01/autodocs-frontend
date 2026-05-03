import Link from "next/link";

export default function Features() {
  const features = [
    {
      title: "1. Connect Your Repo",
      description: "Link your GitHub, GitLab, or Bitbucket repository in seconds. We secure your code with enterprise-grade encryption.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[var(--color-primary)]"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>,
      color: "var(--color-primary)"
    },
    {
      title: "2. Automatic Analysis",
      description: "Our AI engine parses your codebase, reads your JSDoc/docstrings, and understands your architecture perfectly.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[var(--color-secondary)]"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
      color: "var(--color-secondary)"
    },
    {
      title: "3. Instant Deployment",
      description: "Beautiful, searchable, and SEO-optimized documentation is generated and hosted on a custom domain instantly.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[var(--color-accent)]"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
      color: "var(--color-accent)"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[var(--color-background)]">
      {/* Background accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-primary)]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[var(--color-secondary)]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[var(--color-primary)] font-semibold tracking-wide uppercase text-sm mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            From Code to Docs in Seconds
          </h3>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed">
            Stop writing documentation manually. Auto Docs plugs into your existing workflow and keeps your docs perfectly in sync with your codebase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-[var(--color-surface)]/50 backdrop-blur-sm border border-[var(--color-border)] rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:border-[var(--color-border)] transition-all duration-300 overflow-hidden"
              style={{ '--hover-color': feature.color } as React.CSSProperties}
            >
              {/* Subtle gradient hover effect on top edge */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--hover-color)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="mb-6 inline-flex p-4 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-3">
                {feature.title}
              </h4>
              
              <p className="text-[var(--color-muted)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 pointer-events-none" />
          
          <div className="text-left z-10">
            <h4 className="text-2xl font-bold text-[var(--color-foreground)] mb-2">Ready to automate your docs?</h4>
            <p className="text-[var(--color-muted)]">Join 10,000+ developers saving hours every week.</p>
          </div>
          
          <Link
            href="/signup"
            className="z-10 shrink-0 px-8 py-3 bg-[var(--color-primary)] text-[var(--color-background)] rounded-xl font-bold text-lg hover:bg-[var(--color-accent)] transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center gap-2 hover:-translate-y-1"
          >
            Start For Free
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
