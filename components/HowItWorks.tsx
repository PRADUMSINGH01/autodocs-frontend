"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Database,
  Network,
  FileCode,
  Globe,
  ChevronRight,
  Cpu,
  ArrowRight,
  Code2,
  GitBranch,
  Layers,
  Zap
} from "lucide-react";
import Link from 'next/link'
const steps = [
  {
    id: "ingest",
    title: "Repository Ingestion",
    subtitle: "PHASE 01",
    description: "Deep-linking your codebase. Our agents perform a semantic scan of your entire repository, mapping every function, class, and relationship.",
    icon: <Database className="w-5 h-5" />,
    stats: { label: "Ingestion Speed", value: "2.4s/repo" }
  },
  {
    id: "analyze",
    title: "Logic Mapping",
    subtitle: "PHASE 02",
    description: "Reasoning over architecture. The AI maps the data flow and identifies side effects, state changes, and hidden API contracts.",
    icon: <Network className="w-5 h-5" />,
    stats: { label: "Analysis Depth", value: "100% AST" }
  },
  {
    id: "synthesize",
    title: "Doc Synthesis",
    subtitle: "PHASE 03",
    description: "AI-native content generation. We synthesize clear, professional MDX files with interactive code blocks and visual diagrams.",
    icon: <FileCode className="w-5 h-5" />,
    stats: { label: "Accuracy", value: "99.9%" }
  },
  {
    id: "deploy",
    title: "Edge Deployment",
    subtitle: "PHASE 04",
    description: "Instant global availability. Every push triggers an atomic rebuild and deployment to our high-performance edge network.",
    icon: <Globe className="w-5 h-5" />,
    stats: { label: "Availability", value: "99.99%" }
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-[#2D6A4F] text-[11px] font-black uppercase tracking-[0.3em] mb-6"
            >
              <Cpu className="w-4 h-4" />
              The ShipQuill Engine
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#1B3022] tracking-tighter leading-[0.95]">
              How it <span className="text-[#2D6A4F] italic">actually</span> works.
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm font-medium leading-relaxed">
            Our agentic pipeline is designed for precision. We don't just scrape comments; we reason about your code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-2 relative">
            {/* Simple Timeline Line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-slate-100 hidden lg:block" />

            {steps.map((step, index) => (
              <button
                key={step.id}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 relative group flex items-start gap-6 ${activeStep === index
                    ? "bg-emerald-50/50"
                    : "hover:bg-slate-50 opacity-40 hover:opacity-70"
                  }`}
              >
                {/* Icon / Number Indicator */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 flex-shrink-0 z-10 ${activeStep === index
                    ? "bg-[#2D6A4F] text-white shadow-xl shadow-emerald-900/20"
                    : "bg-white border border-slate-100 text-slate-300"
                  }`}>
                  <span className="text-[12px] font-black">{index + 1}</span>
                </div>

                <div className="flex-1 pt-1">
                  <span className={`text-[9px] font-black tracking-[0.2em] uppercase transition-colors ${activeStep === index ? 'text-[#2D6A4F]' : 'text-slate-300'}`}>
                    {step.subtitle}
                  </span>
                  <h3 className={`text-xl font-bold tracking-tight mt-1 transition-colors ${activeStep === index ? 'text-[#1B3022]' : 'text-slate-400'}`}>
                    {step.title}
                  </h3>
                </div>

                {activeStep === index && (
                  <motion.div layoutId="activeStep" className="absolute left-0 top-0 bottom-0 w-1 bg-[#2D6A4F] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Visualization / Content Area */}
          <div className="lg:col-span-8">
            <div className="bg-[#0d1411] rounded-[3rem] p-10 md:p-16 h-full flex flex-col shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden group/viz">
              {/* Background Subtle Gradient */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2D6A4F]/10 rounded-full blur-[120px] -mr-48 -mt-48 transition-opacity opacity-50 group-hover/viz:opacity-100" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex flex-col h-full"
                >
                  {/* Header Info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="space-y-2">
                      <h4 className="text-3xl font-serif font-bold text-white tracking-tight">{steps[activeStep].title}</h4>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Status: Verified Operational</span>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-6">
                      <div className="space-y-1">
                        <div className="text-[9px] font-black text-white/20 uppercase tracking-widest">{steps[activeStep].stats.label}</div>
                        <div className="text-xl font-mono font-bold text-[#2D6A4F]">{steps[activeStep].stats.value}</div>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div className="w-10 h-10 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F]">
                        <Zap className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Main Visualization Mockup */}
                  <div className="flex-1 min-h-[280px] bg-black/40 rounded-[2rem] border border-white/5 p-8 flex flex-col justify-center items-center relative group/inner overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                    {/* Animated Icons based on step */}
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="relative"
                    >
                      <div className="w-32 h-32 rounded-[2.5rem] bg-[#2D6A4F] flex items-center justify-center text-white shadow-[0_0_80px_rgba(45,106,79,0.5)] z-10 relative">
                        {steps[activeStep].icon}
                      </div>
                      {/* Orbiting Elements */}
                      {[1, 2, 3].map(i => (
                        <motion.div
                          key={i}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border border-white/5 rounded-full"
                          style={{ margin: `-${i * 20}px` }}
                        />
                      ))}
                    </motion.div>

                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex justify-between items-end">
                        <div className="space-y-2">
                          <div className="text-[9px] font-black text-white/20 uppercase tracking-widest">Processing Node</div>
                          <div className="flex gap-1.5">
                            {[1, 2, 3, 4, 5, 6, 7].map(j => (
                              <motion.div
                                key={j}
                                animate={{ opacity: [0.2, 0.8, 0.2] }}
                                transition={{ duration: 2, delay: j * 0.2, repeat: Infinity }}
                                className="w-1 h-3 bg-emerald-500/40 rounded-full"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="w-24 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center gap-2">
                          <Code2 className="w-3 h-3 text-[#2D6A4F]" />
                          <span className="text-[10px] font-bold text-white/40 font-mono">AST-v4</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Description */}
                  <div className="mt-12">
                    <p className="text-xl text-white/70 leading-relaxed font-medium italic max-w-xl">
                      "{steps[activeStep].description}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Scanning Line */}
              <motion.div
                animate={{ left: ["-10%", "110%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-px bg-emerald-500/20 z-20 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Final Step CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#2D6A4F]">
              <GitBranch className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#1B3022]">Ready to scale your docs?</h4>
              <p className="text-slate-500 font-medium">Connect your first repository in under 2 minutes.</p>
            </div>
          </div>
          <Link href="/register" className="group flex items-center gap-3 px-10 py-5 bg-[#2D6A4F] text-white rounded-full font-bold text-lg hover:bg-[#1B3022] transition-all shadow-xl shadow-emerald-950/10">
            Start Ingesting
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
