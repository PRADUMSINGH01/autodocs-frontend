"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Activity, Zap, Shield, Cpu } from "lucide-react";

export default function FeatureShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section 
      ref={sectionRef}
      id="features"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 -z-20 h-[124%] w-full"
      >
        <Image 
          src="/feature.png" 
          alt="Feature Background" 
          fill
          priority
          quality={85}
          className="object-cover grayscale-[0.3] brightness-[0.6] scale-105"
          sizes="100vw"
        />
        {/* Professional Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="absolute inset-0 bg-[#0d1411]/60 backdrop-blur-[1px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Content Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="p-10 md:p-16 rounded-[3rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#2D6A4F]/20 text-[#2D6A4F] text-[10px] font-black uppercase tracking-[0.25em] mb-10 border border-[#2D6A4F]/20">
              <Cpu className="w-3.5 h-3.5" />
              Infrastructure
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold text-white tracking-tighter leading-[0.9] mb-10">
              Built for <br />
              <span className="text-[#2D6A4F] italic">Extreme Scale.</span>
            </h2>

            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium mb-12 max-w-lg">
              Experience the next generation of documentation. Our agentic infrastructure processes your entire codebase in parallel, delivering sub-millisecond precision and hyper-linked docs that feel hand-crafted.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14">
              {[
                { label: "Parsing speed", value: "2.4ms", icon: <Zap className="w-4 h-4" /> },
                { label: "Accuracy rate", value: "99.9%", icon: <Shield className="w-4 h-4" /> },
                { label: "Support", value: "20+ Lang", icon: <Activity className="w-4 h-4" /> },
                { label: "Architecture", value: "Parallel", icon: <Cpu className="w-4 h-4" /> },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 group/stat">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#2D6A4F] group-hover/stat:bg-[#2D6A4F] group-hover/stat:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-white font-bold text-2xl tracking-tight">{stat.value}</div>
                    <div className="text-white/20 text-[9px] uppercase font-black tracking-widest">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              href="/signup"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#2D6A4F] text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#0d1411] transition-all shadow-2xl shadow-emerald-950/20"
            >
              Start for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Secondary Visual (Floating UI) */}
          <div className="hidden lg:block relative">
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 p-8 rounded-[3rem] bg-black/40 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/5 overflow-hidden"
            >
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#2D6A4F 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
               />
               
               <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5 relative z-10">
                 <div className="flex gap-2">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                 </div>
                 <div className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">System Health: Optimal</div>
               </div>
               
               <div className="space-y-6 mb-10 relative z-10">
                 {[1, 2, 3].map((_, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-white/30">
                         <span>Module_{i+1}</span>
                         <span>{90 + i * 2}% Load</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full w-full overflow-hidden border border-white/5">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                           transition={{ duration: 2, delay: i * 0.2 }}
                           className="h-full bg-gradient-to-r from-[#2D6A4F] to-emerald-400"
                        />
                      </div>
                   </div>
                 ))}
               </div>
               
               <div className="flex justify-between items-end relative z-10">
                 <div className="space-y-1">
                   <div className="text-white/10 text-[9px] uppercase font-black tracking-widest">Global Compute</div>
                   <div className="text-white/80 font-mono text-2xl font-bold">14.2 TFLOPS</div>
                 </div>
                 <div className="w-16 h-16 rounded-[1.5rem] bg-[#2D6A4F]/10 flex items-center justify-center border border-[#2D6A4F]/20 shadow-lg shadow-emerald-950/40">
                   <Activity className="w-8 h-8 text-[#2D6A4F]" />
                 </div>
               </div>
            </motion.div>
            
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[#2D6A4F]/10 rounded-full blur-[140px] -z-10 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
