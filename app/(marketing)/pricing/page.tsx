import Link from "next/link";

export const metadata = {
  title: "Pricing - Auto Docs",
  description: "Simple, transparent pricing for teams of all sizes.",
};

export default function Pricing() {
  const checkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-secondary)] shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
  );

  return (
    <div className="flex-1 py-24 sm:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[var(--color-primary)]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] tracking-tight mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-[var(--color-muted)]">
            No hidden fees. No surprise charges. Choose the plan that fits your team's workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          
          {/* Hobby Tier */}
          <div className="bg-[var(--color-surface)]/50 backdrop-blur-sm border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-muted)] transition-colors">
            <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">Hobby</h3>
            <p className="text-[var(--color-muted)] text-sm mb-6">Perfect for side projects and individual developers.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[var(--color-foreground)]">$0</span>
              <span className="text-[var(--color-muted)]">/month</span>
            </div>
            <Link href="/signup" className="block w-full py-3 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-foreground)] rounded-xl text-center font-medium hover:bg-[var(--color-border)]/50 transition-colors mb-8">
              Get Started
            </Link>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[var(--color-muted)]">{checkIcon} Up to 3 Public Repos</li>
              <li className="flex gap-3 text-[var(--color-muted)]">{checkIcon} Standard AI Analysis</li>
              <li className="flex gap-3 text-[var(--color-muted)]">{checkIcon} Community Support</li>
              <li className="flex gap-3 text-[var(--color-muted)]">{checkIcon} AutoDocs Subdomain</li>
            </ul>
          </div>

          {/* Pro Tier */}
          <div className="bg-[var(--color-surface)] border-2 border-[var(--color-primary)] rounded-2xl p-8 relative shadow-[0_0_40px_rgba(34,211,238,0.15)] transform md:-translate-y-4 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-[var(--color-background)] px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">Pro</h3>
            <p className="text-[var(--color-muted)] text-sm mb-6">For professional teams shipping commercial software.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[var(--color-foreground)]">$29</span>
              <span className="text-[var(--color-muted)]">/month</span>
            </div>
            <Link href="/signup" className="block w-full py-3 px-4 bg-[var(--color-primary)] text-[var(--color-background)] rounded-xl text-center font-bold hover:bg-[var(--color-accent)] transition-all shadow-md mb-8">
              Start 14-Day Free Trial
            </Link>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[var(--color-foreground)]">{checkIcon} Unlimited Repos (Private)</li>
              <li className="flex gap-3 text-[var(--color-foreground)]">{checkIcon} Deep AI Context Parsing</li>
              <li className="flex gap-3 text-[var(--color-foreground)]">{checkIcon} Priority Email Support</li>
              <li className="flex gap-3 text-[var(--color-foreground)]">{checkIcon} Custom Domain Support</li>
              <li className="flex gap-3 text-[var(--color-foreground)]">{checkIcon} CI/CD Integration</li>
            </ul>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-[var(--color-surface)]/50 backdrop-blur-sm border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-muted)] transition-colors">
            <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">Enterprise</h3>
            <p className="text-[var(--color-muted)] text-sm mb-6">For large organizations with advanced security needs.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[var(--color-foreground)]">Custom</span>
            </div>
            <Link href="mailto:sales@autodocs.com" className="block w-full py-3 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-foreground)] rounded-xl text-center font-medium hover:bg-[var(--color-border)]/50 transition-colors mb-8">
              Contact Sales
            </Link>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[var(--color-muted)]">{checkIcon} SSO / SAML Login</li>
              <li className="flex gap-3 text-[var(--color-muted)]">{checkIcon} On-Premise Deployment</li>
              <li className="flex gap-3 text-[var(--color-muted)]">{checkIcon} Dedicated Success Manager</li>
              <li className="flex gap-3 text-[var(--color-muted)]">{checkIcon} 99.99% Uptime SLA</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
