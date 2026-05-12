import Link from "next/link";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Soft overlay to blend text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 55%, #FDFCF9 100%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pb-20">
        <div className="max-w-2xl">
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-green-200/60 shadow-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
            </span>
            <span className="text-[13px] font-semibold text-[#1B3022]/80">Private Beta — 200+ developers on the waitlist</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-[5rem] font-bold text-[#1B3022] tracking-tight mb-8 leading-[1.05]">
            You build the API. <br />
            Our agents write <br />
            the docs.
          </h1>

          {/* Subheadline */}
          <p className="text-[17px] sm:text-[19px] text-[#1B3022]/70 mb-10 max-w-lg leading-[1.7] font-medium">
            Connect your GitHub repo. Our AI agents analyze your codebase, map dependencies, and generate beautiful, always-in-sync documentation — automatically.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
            <Link
              href="/signup"
              className="group w-full sm:w-auto px-8 py-4 bg-[#2D6A4F] text-white hover:bg-[#1B3022] transition-all rounded-full font-semibold text-[16px] shadow-lg flex items-center justify-center gap-2.5 hover:shadow-xl hover:-translate-y-0.5 duration-300"
            >
              Start for Free
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 bg-white/60 backdrop-blur-md text-[#1B3022] border border-[#1B3022]/10 hover:bg-white/80 rounded-full font-semibold text-[16px] transition-all flex items-center justify-center shadow-sm"
            >
              How It Works
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-8 sm:gap-12 mb-14 flex-wrap">
            {[
              { value: "2.4ms", label: "per file" },
              { value: "20+", label: "languages" },
              { value: "99.9%", label: "uptime" },
            ].map((stat, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-[#1B3022] tracking-tight">{stat.value}</span>
                <span className="text-sm font-semibold text-[#1B3022]/40 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Waitlist Section */}
          <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/80 shadow-xl max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600" />
              </span>
              <h3 className="text-sm font-bold text-green-800 uppercase tracking-wider">Join Private Beta</h3>
            </div>

            <p className="text-[#1B3022]/70 text-sm font-medium mb-6 leading-relaxed">
              We're currently in a limited private beta. Join the waitlist to get early access and help shape the future of AI documentation.
            </p>

            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
}
