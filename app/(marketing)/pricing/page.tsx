"use client";

import Link from 'next/link';
import { Check, Star, Zap, Globe, Cpu, ChevronRight, ShieldCheck, GraduationCap, Rocket } from 'lucide-react';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Student',
      price: '$0',
      description: 'Perfect for students, open source contributors, and learning the ropes.',
      features: [
        'Connect up to 3 Repositories',
        '1 Million AI Tokens / mo',
        'Automated README sync',
        'Community Support',
        'Standard Build Priority',
        'ShipQuill Subdomain'
      ],
      cta: 'Get Started Free',
      href: '/register',
      popular: false,
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      name: 'Pro',
      price: '$10',
      description: 'Built for indie hackers, solo developers, and small startups.',
      features: [
        'Connect up to 5 Repositories',
        '10 Million AI Tokens / mo',
        'Custom Domain Support',
        'Priority Agent Processing',
        'Advanced AST Analysis',
        'Priority Email Support',
        'No ShipQuill Branding'
      ],
      cta: 'Upgrade to Pro',
      href: '/register?plan=pro',
      popular: true,
      icon: <Rocket className="w-6 h-6" />
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0f0d] text-white overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Simple, Transparent <br />
            <span className="text-primary italic">Pricing.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
            Select the plan that fits your stage. All plans include our core agentic documentation engine.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-10 rounded-xl border transition-all duration-500 ${
                tier.popular
                  ? 'bg-emerald-950/20 border-primary shadow-2xl shadow-primary/10 scale-[1.02]'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded text-[10px] font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                   <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${tier.popular ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white/60'}`}>
                      {tier.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-serif font-bold text-white">{tier.price}</span>
                  <span className="text-white/50 font-medium">/mo</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  {tier.description}
                </p>
              </div>

              <Link
                href={tier.href}
                className={`w-full py-4 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 mb-10 ${
                  tier.popular
                    ? 'bg-primary text-primary-foreground hover:opacity-90 shadow-xl shadow-primary/20'
                    : 'bg-white text-[#0a0f0d] hover:bg-white/90 shadow-lg'
                }`}
              >
                {tier.cta}
                <ChevronRight className="w-4 h-4" />
              </Link>

              <div className="space-y-5 mt-auto">
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">Included Features</p>
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                       <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-sm text-white/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / Trust Section */}
        <div className="grid md:grid-cols-3 gap-12 pt-24 border-t border-white/10">
           <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                 <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg">Global Edge Delivery</h4>
              <p className="text-sm text-white/50 leading-relaxed font-medium">
                 Your docs are served from 200+ edge locations for sub-100ms latency globally.
              </p>
           </div>
           <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                 <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg">Agentic AST Engine</h4>
              <p className="text-sm text-white/50 leading-relaxed font-medium">
                 Advanced code understanding that goes beyond simple comments to map your architecture.
              </p>
           </div>
           <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                 <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg">Enterprise Security</h4>
              <p className="text-sm text-white/50 leading-relaxed font-medium">
                 SOC2 Type II compliant data handling with encrypted repository access and zero-retention policies.
              </p>
           </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-32 p-12 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-950/20 border border-primary/20 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
           <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">Ready to transform your documentation?</h2>
              <p className="text-white/60 max-w-xl mx-auto font-medium">
                 Join thousands of developers shipping high-quality docs with ShipQuill agents.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                 <Link href="/register" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-sm shadow-xl shadow-primary/20 hover:opacity-90 transition-all">
                    Start Your Free Repo
                 </Link>
                 <Link href="/contact" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-lg font-bold text-sm hover:bg-white/10 transition-all">
                    Talk to Engineering
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
