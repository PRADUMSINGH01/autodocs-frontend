"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Deep forest background */}
      <div className="absolute inset-0 bg-[#0f1f17]" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/8 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-green-400 text-xs font-bold uppercase tracking-[0.2em] mb-10">
            <Sparkles className="w-3.5 h-3.5" />
            Start Shipping Better Docs
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Stop writing docs. <br />
            <span className="text-green-400">Start shipping them.</span>
          </h2>

          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-medium mb-14">
            Join hundreds of developers who have automated their documentation workflow. Connect your repo, and let our AI agents handle the rest — for free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/signup"
              className="group px-10 py-4.5 bg-green-500 text-white rounded-full font-bold text-[16px] shadow-xl shadow-green-500/20 hover:bg-green-400 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3"
            >
              Get Started — It's Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/showcase"
              className="px-10 py-4.5 bg-white/5 text-white/80 border border-white/10 rounded-full font-semibold text-[16px] hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              View Live Docs
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500/60" />
              <span>SOC 2 Ready</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-500/60" />
              <span>No credit card required</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <div className="flex items-center gap-2">
              <span>Free for students</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
