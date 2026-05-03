import Link from "next/link";

export const metadata = {
  title: "Features - Auto Docs",
  description: "Explore the powerful features of Auto Docs.",
};

export default function FeaturesPage() {
  return (
    <div className="flex-1 pt-24 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-foreground)] tracking-tight mb-6">
            Everything you need to scale documentation.
          </h1>
          <p className="text-xl text-[var(--color-muted)]">
            Auto Docs combines intelligent AI parsing with a seamless Git workflow to build documentation that maintains itself.
          </p>
        </div>

        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Smart AI Engine
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Understands your code like a senior engineer.</h2>
            <p className="text-[var(--color-muted)] text-lg leading-relaxed">
              Our proprietary AI models don't just extract comments—they understand the relationship between your functions, classes, and modules. Auto Docs generates clear, context-aware explanations even if your code is barely commented.
            </p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-[var(--color-foreground)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-secondary)]"><polyline points="20 6 9 17 4 12"/></svg>
                Type inference and signature extraction
              </li>
              <li className="flex items-center gap-3 text-[var(--color-foreground)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-secondary)]"><polyline points="20 6 9 17 4 12"/></svg>
                Automatic code example generation
              </li>
              <li className="flex items-center gap-3 text-[var(--color-foreground)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-secondary)]"><polyline points="20 6 9 17 4 12"/></svg>
                Dependency graphing
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-square md:aspect-video bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/10 to-transparent" />
              <div className="font-mono text-sm text-[var(--color-muted)]">
                <span className="text-purple-400">function</span> <span className="text-blue-400">calculateTotal</span>(items: CartItem[]) {'{'} <br/>
                &nbsp;&nbsp;<span className="text-gray-500">// AI generates docs for this</span><br/>
                &nbsp;&nbsp;<span className="text-purple-400">return</span> items.reduce((sum, item) =&gt; sum + item.price, 0);<br/>
                {'}'}
              </div>
              <div className="mt-8 p-4 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl relative z-10">
                <div className="text-[var(--color-foreground)] font-semibold mb-2 border-b border-[var(--color-border)] pb-2">Generated Documentation</div>
                <div className="text-sm text-[var(--color-muted)]">
                  Calculates the total price of all items currently in the user's shopping cart. <br/><br/>
                  <span className="font-mono bg-[var(--color-surface)] px-1 rounded text-xs text-[var(--color-primary)]">@param items</span> — Array of CartItem objects.<br/>
                  <span className="font-mono bg-[var(--color-surface)] px-1 rounded text-xs text-[var(--color-secondary)]">@returns</span> — Total numeric price.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 mb-32">
          <div className="flex-1 w-full">
            <div className="aspect-square md:aspect-video bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-2xl relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-[var(--color-secondary)]/10 to-transparent" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 bg-[#181717] rounded-full flex items-center justify-center shadow-lg border border-[#30363d]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </div>
                <div className="w-16 h-1 bg-[var(--color-border)] relative">
                  <div className="absolute inset-y-0 left-0 bg-[var(--color-secondary)] w-full animate-[ping_2s_ease-in-out_infinite]" />
                </div>
                <div className="w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              Seamless Integration
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Zero configuration. Triggered by your git workflow.</h2>
            <p className="text-[var(--color-muted)] text-lg leading-relaxed">
              Install the Auto Docs GitHub App and we'll take it from there. Every time you push to your main branch, we automatically rebuild and deploy your documentation. No clunky YAML files to maintain.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[var(--color-primary)]/5" />
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 relative z-10">Stop writing docs. Start shipping features.</h2>
          <Link
            href="/signup"
            className="inline-flex relative z-10 px-8 py-4 bg-[var(--color-primary)] text-[var(--color-background)] rounded-xl font-bold text-lg hover:bg-[var(--color-accent)] transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:-translate-y-1"
          >
            Create Your Free Account
          </Link>
        </div>

      </div>
    </div>
  );
}
