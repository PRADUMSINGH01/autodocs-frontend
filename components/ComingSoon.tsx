import WaitlistForm from '@/components/WaitlistForm';

import Image from 'next/image';

export default function ComingSoonPage({ title }: { title: string }) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1f2d25]/5 border border-[#1f2d25]/10 text-[#1f2d25] text-sm font-semibold mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600" />
          </span>
          Something Big is Coming
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-[#1a231f] tracking-tight mb-6">
          {title} <br />
          <span className="text-[#1f2d25]">Coming Soon.</span>
        </h1>

        <p className="text-lg text-[#1a231f]/70 max-w-xl mb-12 leading-relaxed font-medium">
          We're hard at work building the best documentation platform in the world. Join the waitlist to be the first to know when we launch this feature.
        </p>

        <div className="w-full max-w-md">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
