import Link from 'next/link';
import { Check } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';
import waterBg from '@/public/water-bg.jpg';

export const metadata = {
  title: 'Pricing – ShipQuill',
  description: 'Simple, transparent pricing for teams of all sizes.',
};

export default function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      description: 'Perfect for side projects and indie hackers.',
      features: ['1 Repository', 'Basic AI Analysis', 'Standard Themes', 'Community Support'],
      cta: 'Join Waitlist',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'Everything you need to ship world-class docs.',
      features: [
        'Unlimited Repositories',
        'Advanced AI Agents',
        'Custom Domains',
        'Priority Support',
        'Custom Branding',
      ],
      cta: 'Join Waitlist',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs.',
      features: [
        'SLA Guarantees',
        'Dedicated Agent Training',
        'On-premise Deployment',
        'SSO/SAML Auth',
        'Dedicated Support',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src={waterBg.src}
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1a231f] tracking-tight mb-6">
            Simple, Transparent <br />
            <span className="text-[#1f2d25]">Pricing.</span>
          </h1>
          <p className="text-lg text-[#1a231f]/70 max-w-2xl mx-auto leading-relaxed font-medium">
            Choose the plan that fits your stage. All plans include our core agentic documentation engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-10 rounded-3xl backdrop-blur-xl border transition-all ${
                tier.popular
                  ? 'bg-white shadow-2xl border-[#1f2d25]/20 scale-105 z-10'
                  : 'bg-white/40 border-white/60 shadow-xl'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1f2d25] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-[#1a231f] mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-[#1a231f]">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-[#1a231f]/60 font-medium">/mo</span>}
              </div>
              <p className="text-[#1a231f]/70 text-sm mb-8 leading-relaxed font-medium">
                {tier.description}
              </p>
              
              <Link
                href="/waitlist"
                className={`w-full py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center mb-8 ${
                  tier.popular
                    ? 'bg-[#1f2d25] text-white hover:bg-black shadow-lg'
                    : 'bg-white/80 text-[#1f2d25] border border-[#1f2d25]/10 hover:bg-white'
                }`}
              >
                {tier.cta}
              </Link>

              <div className="space-y-4">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1a231f]/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist Callout */}
        <div className="max-w-2xl mx-auto p-12 rounded-3xl bg-[#1f2d25] text-white text-center shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">Ready to ship?</h2>
          <p className="text-white/70 mb-8 font-medium">
            Join the waitlist today to lock in early-bird pricing and get a spot in our private beta.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
