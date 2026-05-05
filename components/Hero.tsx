import Link from "next/link";
import waterBg from "@/public/water-bg.jpg";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Image — Standard img tag for maximum reliability */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src={waterBg.src}
          alt="ShipQuill Background"
          className="w-full h-full object-cover animate-ken-burns opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent" />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent calc(100% - 200px), white 100%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pb-20">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-[5rem] font-bold text-[#1a231f] tracking-tight mb-8 leading-[1.05]">
            You build the API. <br />
            Our agents write <br />
            the docs.
          </h1>

          {/* Subheadline */}
          <p className="text-[18px] sm:text-[20px] text-[#1a231f]/80 mb-10 max-w-lg leading-relaxed font-medium">
            The easiest way for SaaS startups and indie hackers to generate beautiful, interactive documentation. Connect your repo and let AI do the rest.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-[#1f2d25] text-white hover:bg-black transition-colors rounded-full font-semibold text-[16px] shadow-lg flex items-center justify-center gap-2"
            >
              Start for Free
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 bg-white/40 backdrop-blur-md text-[#1a231f] border border-white/50 hover:bg-white/60 rounded-full font-semibold text-[16px] transition-all flex items-center justify-center shadow-sm"
            >
              How It Works
            </Link>
          </div>

          {/* Prominent Waitlist Section */}
          <div className="mt-12 p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xl max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-600" />
              </span>
              <h3 className="text-sm font-bold text-violet-900 uppercase tracking-wider">Join Private Beta</h3>
            </div>
            
            <p className="text-[#1a231f]/70 text-sm font-medium mb-6 leading-relaxed">
              We're currently in a limited private beta. Join the waitlist to get early access and help shape the future of AI documentation.
            </p>

            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
}
