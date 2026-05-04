import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Pricing - Auto Docs",
  description: "Simple, transparent pricing for indie hackers and SaaS teams.",
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
);

const CrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#3d2611]/20 shrink-0 mt-0.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

export default function Pricing() {
  return (
    <div className="flex-1 py-24 sm:py-32 relative overflow-hidden bg-[#fdfbf7]">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.05] mix-blend-multiply pointer-events-none">
        <Image src="/water-bg.jpg" alt="Background texture" fill className="object-cover object-bottom" />
      </div>
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-amber-900/5 to-transparent pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3d2611] tracking-tight mb-6">
            Pay for what you ship.<br/>Not what you don't.
          </h1>
          <p className="text-lg text-[#3d2611]/70 font-medium leading-relaxed">
            Built for indie hackers and SaaS founders. No seat fees. No per-AI-message billing. Flat rate, always.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          
          {/* Free Tier */}
          <div className="bg-white/70 backdrop-blur-md border border-[#3d2611]/10 rounded-3xl p-10 hover:shadow-xl transition-all">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#3d2611]/50 uppercase tracking-widest mb-3">Starter</h3>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-6xl font-bold text-[#3d2611] tracking-tight">$0</span>
                <span className="text-[#3d2611]/50 font-semibold pb-2">/month</span>
              </div>
              <p className="text-[#3d2611]/60 text-[15px] font-medium leading-relaxed">
                Kick the tyres. Ship your first docs for free — no card required, ever.
              </p>
            </div>

            <Link href="/signup" className="block w-full py-3.5 px-4 bg-white border-2 border-[#3d2611]/15 text-[#3d2611] rounded-full text-center font-bold text-[15px] hover:border-orange-400 hover:text-orange-600 transition-all mb-10 shadow-sm">
              Get Started Free
            </Link>

            <div className="space-y-4">
              <p className="text-[13px] font-bold uppercase tracking-widest text-[#3d2611]/40 mb-4">What's included</p>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611]/80 font-medium text-[15px]">1 connected repository</span></div>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611]/80 font-medium text-[15px]">AI-generated docs on every push</span></div>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611]/80 font-medium text-[15px]">50 AI doc generations/month</span></div>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611]/80 font-medium text-[15px]">Hosted on shipquill.ink subdomain</span></div>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611]/80 font-medium text-[15px]">REST API & Markdown export</span></div>
              <div className="flex gap-3 items-start"><CrossIcon /><span className="text-[#3d2611]/30 font-medium text-[15px]">Custom domain</span></div>
              <div className="flex gap-3 items-start"><CrossIcon /><span className="text-[#3d2611]/30 font-medium text-[15px]">Private repos</span></div>
              <div className="flex gap-3 items-start"><CrossIcon /><span className="text-[#3d2611]/30 font-medium text-[15px]">Versioned docs</span></div>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="bg-white border-2 border-orange-400 rounded-3xl p-10 relative shadow-[0_20px_60px_rgba(245,158,11,0.12)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                Most Popular
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-orange-600 uppercase tracking-widest mb-3">Pro</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-6xl font-bold text-[#3d2611] tracking-tight">$19</span>
                <span className="text-[#3d2611]/50 font-semibold pb-2">/month</span>
              </div>
              <p className="text-[13px] text-[#3d2611]/40 font-semibold mb-3">$15/mo billed annually — save $48/yr</p>
              <p className="text-[#3d2611]/60 text-[15px] font-medium leading-relaxed">
                Everything you need to go from commit to polished, versioned developer docs. Flat rate. No surprises.
              </p>
            </div>

            <Link href="/signup" className="block w-full py-3.5 px-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-full text-center font-bold text-[15px] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all mb-10 shadow-md">
              Start 14-Day Free Trial →
            </Link>

            <div className="space-y-4">
              <p className="text-[13px] font-bold uppercase tracking-widest text-[#3d2611]/40 mb-4">Everything in Starter, plus</p>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611] font-semibold text-[15px]">Up to <strong>10 repos</strong> (public & private)</span></div>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611] font-semibold text-[15px]"><strong>Unlimited</strong> AI doc generations</span></div>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611] font-semibold text-[15px]"><strong>Custom domain</strong> (docs.yourapp.com)</span></div>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611] font-semibold text-[15px]">Versioned docs per Git tag/release</span></div>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611] font-semibold text-[15px]">Auto-generated OpenAPI / SDK refs</span></div>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611] font-semibold text-[15px]">CI/CD GitHub Action integration</span></div>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611] font-semibold text-[15px]">Interactive API playground</span></div>
              <div className="flex gap-3 items-start"><CheckIcon /><span className="text-[#3d2611] font-semibold text-[15px]">Priority email support</span></div>
            </div>
          </div>
        </div>

        {/* Social proof / FAQ strip */}
        <div className="mt-20 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white/60 backdrop-blur-md border border-[#3d2611]/10 rounded-2xl p-6">
            <p className="text-3xl font-bold text-[#3d2611] mb-1">14 days</p>
            <p className="text-[#3d2611]/60 text-[14px] font-medium">Free Pro trial. No card required.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-[#3d2611]/10 rounded-2xl p-6">
            <p className="text-3xl font-bold text-[#3d2611] mb-1">$0 seats</p>
            <p className="text-[#3d2611]/60 text-[14px] font-medium">Invite your whole team. No per-user fees.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-[#3d2611]/10 rounded-2xl p-6">
            <p className="text-3xl font-bold text-[#3d2611] mb-1">Cancel anytime</p>
            <p className="text-[#3d2611]/60 text-[14px] font-medium">No lock-in. Export your docs anytime.</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#3d2611]/50 text-[14px] font-medium">
            Need more than 10 repos or a custom integration?{" "}
            <a href="mailto:team@shipquill.ink" className="text-orange-600 font-bold hover:underline">
              Talk to us →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
