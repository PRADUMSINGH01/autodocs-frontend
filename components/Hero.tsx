import Link from "next/link";
export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Premium Tech Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden">
        {/* Subtle CSS Grid with Radial Mask */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        </div>
        
        {/* Rotating Mesh Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] animate-spin-slow opacity-40">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--color-secondary)] rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] animate-spin-slow-reverse opacity-30">
          <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[100px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-accent)] text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-secondary)] animate-pulse"></span>
            Auto Docs 2.0 is now live
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-8 leading-tight">
            Merge Your Repo. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
              Automatic Docs Ready.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[var(--color-muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
            The seamless documentation tool for modern teams. Push your code, and we'll instantly generate, host, and maintain beautiful documentation—zero configuration required.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-[var(--color-primary)] text-[var(--color-background)] rounded-xl font-bold text-lg hover:bg-[var(--color-accent)] transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Get Started Free
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 bg-[var(--color-surface)] text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-muted)] rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* Visual Graphic: Mock IDE / Terminal */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto text-xs text-[var(--color-muted)] font-mono">user@autodocs: ~/project</div>
            </div>
            
            {/* Window Body */}
            <div className="p-6 sm:p-8 font-mono text-sm sm:text-base flex flex-col md:flex-row gap-8">
              {/* Terminal Side */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2 text-[var(--color-muted)]">
                  <span className="text-[var(--color-secondary)]">➜</span>
                  <span>git push origin main</span>
                </div>
                <div className="text-[var(--color-muted)] animate-pulse">
                  Compressing objects: 100% (5/5), done.
                  <br />
                  Writing objects: 100% (5/5), 452 bytes | 452.00 KiB/s, done.
                  <br />
                  Total 5 (delta 3), reused 0 (delta 0)
                  <br />
                  To github.com:user/project.git
                  <br />
                  &nbsp;&nbsp;&nbsp;d34db33..1a2b3c4&nbsp;&nbsp;main -&gt; main
                </div>
                <div className="mt-4 p-4 rounded-lg bg-[#0F1117] border border-[var(--color-border)] flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
                  <div>
                    <div className="text-[var(--color-foreground)] font-semibold">Webhook triggered successfully</div>
                    <div className="text-[var(--color-muted)] text-sm mt-1">Auto Docs is analyzing changes...</div>
                  </div>
                </div>
              </div>

              {/* Status/Result Side */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="relative">
                  <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-[var(--color-border)]"></div>
                  
                  <div className="relative flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-secondary)] flex items-center justify-center z-10 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[var(--color-secondary)]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div>
                      <div className="text-[var(--color-foreground)] font-medium">Repository Cloned</div>
                      <div className="text-[var(--color-muted)] text-sm">Fetched latest commits</div>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-secondary)] flex items-center justify-center z-10 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[var(--color-secondary)]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div>
                      <div className="text-[var(--color-foreground)] font-medium">Code Analyzed</div>
                      <div className="text-[var(--color-muted)] text-sm">Parsed JSDoc and Markdown files</div>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-primary)] shadow-[0_0_10px_rgba(34,211,238,0.5)] flex items-center justify-center z-10 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[var(--color-primary)]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    </div>
                    <div>
                      <div className="text-[var(--color-primary)] font-bold">Docs Deployed!</div>
                      <Link href="#" className="text-[var(--color-muted)] text-sm hover:text-[var(--color-accent)] underline underline-offset-2">
                        docs.yourproject.com
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
