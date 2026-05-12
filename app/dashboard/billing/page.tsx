"use client";

import { useState } from "react";
import { 
  Check, 
  CreditCard, 
  Download, 
  Database, 
  Coins, 
  ChevronRight, 
  Zap, 
  ShieldCheck,
  Star,
  GraduationCap,
  Rocket
} from "lucide-react";

export default function Billing() {
  const [activePlan, setActivePlan] = useState<'free' | 'pro'>('free');

  const plans = [
    {
      id: 'free',
      name: 'Student',
      price: '$0',
      description: 'Perfect for students, open source contributors, and learning.',
      features: [
        'Connect up to 3 Repositories',
        '1 Million AI Tokens / mo',
        'Automated README sync',
        'Community Support',
        'Standard Build Priority'
      ],
      cta: 'Current Plan',
      popular: false,
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$10',
      description: 'Built for indie hackers, solo developers, and small startups.',
      features: [
        'Connect up to 5 Repositories',
        '10 Million AI Tokens / mo',
        'Priority Agent Processing',
        'Advanced AST Analysis',
        'Priority Email Support',
        'Custom Domain Support'
      ],
      cta: 'Upgrade to Pro',
      popular: true,
      icon: <Rocket className="w-5 h-5" />
    }
  ];

  const invoices = [
    { id: "INV-2026-003", date: "May 1, 2026", amount: "$0.00", status: "Paid" },
    { id: "INV-2026-002", date: "Apr 1, 2026", amount: "$0.00", status: "Paid" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 py-4">
      {/* Header */}
      <div className="px-2">
        <h1 className="font-serif text-4xl font-bold text-foreground tracking-tight">Billing & Plans</h1>
        <p className="text-muted-foreground font-medium text-lg mt-1">Select the engine power that fits your documentation needs.</p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`relative group p-8 bg-card border rounded-xl transition-all duration-300 ${
              plan.popular ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-border shadow-sm hover:border-primary/30'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded shadow-md flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plan.popular ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                   {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-serif font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm font-medium">/mo</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {plan.description}
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              className={`w-full py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                plan.id === activePlan 
                  ? 'bg-muted text-muted-foreground cursor-default' 
                  : 'bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/10 group-hover:scale-[1.02]'
              }`}
              disabled={plan.id === activePlan}
            >
              {plan.cta}
              {plan.id !== activePlan && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-2">
        {/* Usage Overview */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 bg-card border border-border rounded-xl shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 blur-3xl" />
             
             <h2 className="text-lg font-bold text-foreground mb-8 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Current Consumption
             </h2>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Connected Repos</span>
                    <span className="text-sm font-bold text-foreground">3 / 3</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="w-full h-full bg-primary" />
                  </div>
                  <p className="text-[10px] text-muted-foreground font-medium">You have reached the limit for the {activePlan === 'free' ? 'Student' : 'Pro'} plan.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">AI Token Usage</span>
                    <span className="text-sm font-bold text-foreground">0.8M / 1M</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-primary" />
                  </div>
                  <p className="text-[10px] text-muted-foreground font-medium">Resetting in 12 days.</p>
                </div>
             </div>
          </div>

          {/* History */}
          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="px-8 py-4 border-b border-border bg-muted/20">
              <h2 className="font-bold text-sm text-foreground uppercase tracking-widest">Payment History</h2>
            </div>
            <div className="divide-y divide-border">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="px-8 py-5 flex items-center justify-between hover:bg-muted/10 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-muted flex items-center justify-center text-muted-foreground">
                      <Download className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{invoice.date}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-tighter">{invoice.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="font-bold text-foreground text-sm">{invoice.amount}</span>
                    <span className="px-2.5 py-0.5 rounded border border-primary/20 bg-primary/10 text-primary text-[10px] font-bold">
                      {invoice.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="lg:col-span-1 space-y-6">
           <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
              <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                 <CreditCard className="w-4 h-4" />
                 Payment Method
              </h2>
              <div className="p-5 rounded-lg bg-muted/30 border border-border space-y-4">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-7 bg-white rounded border border-slate-200 flex items-center justify-center text-[10px] font-black text-blue-900 italic shadow-sm">
                       VISA
                    </div>
                    <span className="text-sm font-bold text-foreground">•••• 4242</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] font-medium text-muted-foreground">
                    <span>Expiry: 12/28</span>
                    <button className="text-primary font-bold hover:underline">Edit</button>
                 </div>
              </div>
           </div>

           <div className="p-8 bg-muted/30 border border-dashed border-border rounded-xl text-center">
              <ShieldCheck className="w-10 h-10 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">
                 Secure Stripe checkout.<br/>SSL Encrypted connection.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
