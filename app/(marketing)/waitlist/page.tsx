import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Zap, Code2 } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata = {
  title: 'Join the Waitlist – ShipQuill',
  description:
    'Get early access to ShipQuill — the AI documentation platform that generates world-class docs for your GitHub repositories in seconds.',
};

export default function WaitlistPage() {
  return (
    <div className="relative min-h-screen flex flex-col">

      {/* Background — same water image as Hero */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black calc(100% - 200px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 200px), transparent 100%)',
        }}
      >
        <Image
          src="/water-bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Same overlay as Hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent" />
        {/* Extra lightening from the top so text is always readable */}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Page Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 max-w-3xl mx-auto w-full text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-[#1f2d25]/10 text-[#1f2d25] text-sm font-semibold mb-10 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600" />
          </span>
          Private Beta — Limited Spots Available
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#1a231f] tracking-tight mb-7 leading-[1.05]">
          Be First to Ship <br />
          <span className="text-[#1f2d25]">Beautiful Docs.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#1a231f]/70 max-w-xl mb-12 leading-relaxed font-medium">
          ShipQuill connects to your GitHub repository and uses AI to instantly
          generate, publish, and host polished documentation — on your own
          custom domain. Enter your email to reserve your spot.
        </p>

        {/* Waitlist Form */}
        <div className="w-full max-w-md mb-10">
          <WaitlistForm />
        </div>

        {/* Social proof */}
        <p className="text-sm text-[#1a231f]/50 font-medium mb-16">
          🎉 Join{' '}
          <span className="font-bold text-[#1a231f]/70">100+ developers</span>{' '}
          already on the waitlist.
        </p>

        {/* Feature Cards — glassmorphism style matching the site */}
        <div className="grid sm:grid-cols-3 gap-5 w-full text-left mt-4">
          {[
            {
              icon: <Zap className="w-5 h-5 text-[#1f2d25]" />,
              title: 'Instant Generation',
              desc: 'Docs live in under 60 seconds after connecting your repo.',
            },
            {
              icon: <Code2 className="w-5 h-5 text-[#1f2d25]" />,
              title: 'MDX-Powered',
              desc: 'Full syntax highlighting, callouts, and custom components.',
            },
            {
              icon: <Shield className="w-5 h-5 text-[#1f2d25]" />,
              title: 'Custom Domains',
              desc: 'docs.yourcompany.com with one-click SSL provisioning.',
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md hover:bg-white/60 transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-white/80 flex items-center justify-center mb-4 shadow-sm border border-[#1f2d25]/10">
                {icon}
              </div>
              <h3 className="font-semibold text-[#1a231f] mb-1">{title}</h3>
              <p className="text-sm text-[#1a231f]/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Preview link */}
        <div className="mt-14">
          <p className="text-sm text-[#1a231f]/50 mb-2">Want to see what ShipQuill produces?</p>
          <Link
            href="/docs-preview/read"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-black underline underline-offset-4 transition-colors group"
          >
            Preview live Express.js documentation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
