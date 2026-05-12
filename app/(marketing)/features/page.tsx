import Link from "next/link";

export const metadata = {
  title: "Features - ShipQuill",
  description: "Explore the powerful features of ShipQuill.",
};

export default function FeaturesPage() {
  return (
    <div className="flex-1 overflow-hidden">

      {/* ── Hero Banner ─────────────────────────────── */}
      <div className="relative pt-36 pb-32 flex items-center justify-center overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/30 via-white/50 to-[#FDFCF9]" />

        <div className="text-center max-w-3xl mx-auto px-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-600/10 text-green-800 text-sm font-semibold mb-6 border border-green-200">
            ✦ Everything included, forever
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1B3022] tracking-tight mb-6 leading-tight">
            Everything you need to<br />scale your documentation.
          </h1>
          <p className="text-xl text-[#1B3022]/70 font-medium leading-relaxed">
            ShipQuill combines intelligent AI parsing with a seamless Git workflow to build documentation that maintains itself.
          </p>
        </div>
      </div>

      {/* ── Feature Cards ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">

        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-800 text-sm font-semibold border border-green-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Smart AI Engine
            </div>
            <h2 className="text-4xl font-bold text-[#1B3022] leading-snug">Understands your code like a senior engineer.</h2>
            <p className="text-[#1B3022]/70 text-lg leading-relaxed">
              Our proprietary AI models don't just extract comments — they understand the relationship between your functions, classes, and modules. ShipQuill generates clear, context-aware explanations even if your code is barely commented.
            </p>
            <ul className="space-y-3 pt-2">
              {["Type inference and signature extraction", "Automatic code example generation", "Dependency graphing"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#1B3022] font-medium">
                  <span className="w-5 h-5 rounded-full bg-green-100 border border-green-300 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-green-100 bg-white shadow-xl overflow-hidden">
              <div className="bg-green-50 px-6 py-3 border-b border-green-100 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-300" />
                <span className="w-3 h-3 rounded-full bg-yellow-300" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs text-[#1B3022]/40 font-mono">calculateTotal.ts</span>
              </div>
              <div className="p-6 font-mono text-sm text-[#1B3022]/70 bg-white">
                <span className="text-purple-600">function</span>{" "}
                <span className="text-blue-600">calculateTotal</span>(items: CartItem[]) {"{"}<br />
                &nbsp;&nbsp;<span className="text-green-600">{"// AI generates docs for this"}</span><br />
                &nbsp;&nbsp;<span className="text-purple-600">return</span> items.<span className="text-blue-600">reduce</span>((sum, item) =&gt; sum + item.price, 0);<br />
                {"}"}
              </div>
              <div className="m-4 p-5 bg-green-50 border border-green-100 rounded-2xl">
                <div className="text-[#1B3022] font-bold mb-2 text-sm uppercase tracking-wide">✦ Generated Documentation</div>
                <div className="text-sm text-[#1B3022]/70 leading-relaxed">
                  Calculates the total price of all items in the shopping cart.<br /><br />
                  <span className="font-mono bg-white px-2 py-0.5 rounded text-xs text-green-700 border border-green-100">@param items</span> — Array of CartItem objects.<br />
                  <span className="font-mono bg-white px-2 py-0.5 rounded text-xs text-blue-700 border border-blue-100">@returns</span> — Total numeric price.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 mb-32">
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-green-100 bg-white shadow-xl p-10 flex items-center justify-center min-h-[280px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-sky-50 opacity-60" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-20 h-20 bg-[#181717] rounded-2xl flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="w-20 h-2 bg-green-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full animate-pulse w-3/4" />
                  </div>
                  <div className="w-20 h-2 bg-green-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 rounded-full w-1/2" />
                  </div>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 text-sm font-semibold border border-sky-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              Seamless Integration
            </div>
            <h2 className="text-4xl font-bold text-[#1B3022] leading-snug">Zero configuration. Triggered by your git workflow.</h2>
            <p className="text-[#1B3022]/70 text-lg leading-relaxed">
              Install the ShipQuill GitHub App and we'll take it from there. Every time you push to your main branch, we automatically rebuild and deploy your documentation. No clunky YAML files to maintain.
            </p>
            <ul className="space-y-3 pt-2">
              {["Push to main, docs update automatically", "No YAML or config files needed", "Works with any repo structure"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#1B3022] font-medium">
                  <span className="w-5 h-5 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden min-h-[300px] bg-[#1B3022]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3022] via-[#1B3022]/80 to-transparent" />
          <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Stop writing docs.<br />Start shipping features.</h2>
              <p className="text-white/70 text-lg">Join the private beta — it's free.</p>
            </div>
            <Link
              href="/signup"
              className="shrink-0 px-8 py-4 bg-white text-[#1B3022] rounded-full font-bold text-lg hover:bg-green-50 transition-all shadow-2xl hover:-translate-y-1 hover:shadow-green-900/20"
            >
              Create Your Free Account →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
