import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-24 z-40">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{ 
          maskImage: 'linear-gradient(to bottom, black calc(100% - 200px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 200px), transparent 100%)'
        }}
      >
        <Image
          src="/water-bg.jpg"
          alt="Sunset over water"
          fill
          priority
          className="object-cover object-center animate-ken-burns"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm text-[#1a231f] text-sm font-semibold mb-8 tracking-wide">
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
            AutoDocs for Enterprise now available
          </div>

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
        </div>
      </div>
    </div>
  );
}
