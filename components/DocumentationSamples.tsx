"use client";

import { useState } from "react";
import {
  Globe,
  Code2,
  BookOpen,
  Sparkles,
  ChevronRight,
  Search,
  Layout,
  GitBranch,
  Eye,
  Zap,
  ArrowUpRight,
  Lock,
  Terminal,
  Cpu
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const SAMPLES = [
  {
    id: "api",
    name: "Core API",
    type: "Backend Reference",
    description: "Full AST-mapped documentation for a complex Go/Node.js backend. Auto-generated endpoints, types, and error codes.",
    content: {
      title: "Authentication API",
      endpoint: "POST /v1/auth/login",
      code: "type AuthResponse struct {\n  Token string `json:\"token\"` \n  User  User   `json:\"user\"` \n}",
      ai_note: "ShipQuill Agent: Detected missing JWT expiration handling in the middleware. Added security note to docs."
    }
  },
  {
    id: "ui",
    name: "Design System",
    type: "Component Library",
    description: "Visual documentation for React/Next.js components. Includes live props tables and structural relationships.",
    content: {
      title: "Button Component",
      endpoint: "<Button variant=\"primary\" />",
      code: "interface ButtonProps {\n  variant: 'primary' | 'ghost';\n  loading?: boolean;\n}",
      ai_note: "ShipQuill Agent: Component uses CSS variables for theming. Documentation updated to include color tokens."
    }
  },
  {
    id: "cli",
    name: "Developer CLI",
    type: "Tooling Docs",
    description: "Command-line interface documentation with auto-generated help screens and usage examples.",
    content: {
      title: "CLI Command: sync",
      endpoint: "shipquill sync --force",
      code: "# Usage: \n# shipquill [command] [options]\n\nsync  -  Synchronize your local repo with agents",
      ai_note: "ShipQuill Agent: Added cross-reference to 'Authentication' section for token management."
    }
  }
];

export default function DocumentationSamples() {
  const [activeTab, setActiveTab] = useState(SAMPLES[0]);

  return (
    <section id="showcase" className="py-32 bg-[#0a0f0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Content Area */}
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 text-[#2D6A4F] text-[10px] font-black uppercase tracking-[0.2em]"
              >
                <Cpu className="w-3 h-3" />
                Live Showcases
              </motion.div>
              <h2 className="font-serif text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Docs that <br />
                <span className="text-[#2D6A4F] italic">read minds.</span>
              </h2>
              <p className="text-lg text-white/50 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                ShipQuill agents map your entire architecture into readable, interactive
                sites that stay in sync with every push. No maintenance required.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {SAMPLES.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => setActiveTab(sample)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-500 relative group overflow-hidden ${activeTab.id === sample.id
                      ? 'bg-emerald-950/20 border-[#2D6A4F] shadow-[0_20px_50px_rgba(45,106,79,0.15)] scale-[1.02]'
                      : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07]'
                    }`}
                >
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${activeTab.id === sample.id ? 'text-[#2D6A4F]' : 'text-white/30'}`}>
                      {sample.type}
                    </span>
                    {activeTab.id === sample.id && <Zap className="w-3.5 h-3.5 text-[#2D6A4F]" />}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 relative z-10 transition-colors ${activeTab.id === sample.id ? 'text-white' : 'text-white/60'}`}>
                    {sample.name}
                  </h3>
                  <p className={`text-sm font-medium relative z-10 leading-relaxed transition-colors ${activeTab.id === sample.id ? 'text-white/60' : 'text-white/30'}`}>
                    {sample.description}
                  </p>

                  {/* Decorative background glow for active */}
                  {activeTab.id === sample.id && (
                    <motion.div
                      layoutId="tabGlow"
                      className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="pt-6 flex justify-center lg:justify-start">
              <Link href="/showcase" className="flex items-center gap-2 text-white/80 font-bold group hover:text-white transition-colors">
                View all live samples
                <ArrowUpRight className="w-4 h-4 text-[#2D6A4F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Browser Mockup Area */}
          <div className="lg:w-1/2 relative w-full group/mockup">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#2D6A4F]/10 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover/mockup:opacity-100 transition-opacity duration-1000" />

            <div className="relative bg-[#0d1411] border border-white/10 rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden aspect-[4/3] flex flex-col transition-all duration-500 ring-1 ring-white/5">

              {/* Browser Top Bar */}
              <div className="h-12 bg-white/5 border-b border-white/10 px-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="px-4 py-1 bg-black/40 rounded-full border border-white/5 text-[10px] font-mono text-white/40 flex items-center gap-3">
                  <Lock className="w-2.5 h-2.5" />
                  docs.shipquill.com/{activeTab.id}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-1.5 bg-white/5 rounded-full" />
                  <div className="w-4 h-4 bg-white/5 rounded-full" />
                </div>
              </div>

              {/* Browser Content */}
              <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar Mockup */}
                <div className="w-1/4 border-r border-white/5 p-8 space-y-8 hidden sm:block bg-black/10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#2D6A4F]/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#2D6A4F] rounded-full" />
                    </div>
                    <div className="w-12 h-2 bg-white/10 rounded" />
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className={`h-1.5 rounded transition-all duration-500 ${i === (activeTab.id === 'api' ? 2 : activeTab.id === 'ui' ? 3 : 4) ? 'bg-[#2D6A4F]/40 w-full' : 'bg-white/5 w-2/3'}`} />
                    ))}
                  </div>
                  <div className="pt-8 space-y-4">
                    <div className="w-10 h-1.5 bg-white/5 rounded" />
                    <div className="space-y-3">
                      {[1, 2].map(i => (
                        <div key={i} className="h-1.5 bg-white/[0.02] w-1/2 rounded" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Content Mockup */}
                <div className="flex-1 p-10 sm:p-14 overflow-y-auto custom-scrollbar bg-gradient-to-b from-transparent to-black/20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <GitBranch className="w-4 h-4 text-[#2D6A4F]" />
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">shipquill / v{activeTab.id}</span>
                      </div>
                      <h4 className="font-serif text-4xl font-bold text-white mb-8 tracking-tight">{activeTab.content.title}</h4>

                      <div className="p-5 bg-black/40 rounded-2xl border border-white/5 font-mono text-xs text-white/60 mb-10 overflow-x-auto whitespace-pre relative group/code">
                        <div className="absolute top-3 right-3 opacity-0 group-hover/code:opacity-100 transition-opacity">
                          <Terminal className="w-3 h-3 text-white/20" />
                        </div>
                        {activeTab.content.endpoint}
                      </div>

                      <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-white/5 pb-3">
                          <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Type Definition</span>
                          <div className="flex gap-1">
                            <div className="w-1 h-1 rounded-full bg-[#2D6A4F]" />
                            <div className="w-1 h-1 rounded-full bg-[#2D6A4F]/40" />
                          </div>
                        </div>
                        <pre className="text-[12px] font-mono leading-relaxed text-emerald-400/70 bg-emerald-500/[0.03] p-6 rounded-2xl border border-emerald-500/10">
                          {activeTab.content.code}
                        </pre>
                      </div>

                      {/* AI Note Insight */}
                      <div className="mt-12 p-6 rounded-2xl bg-[#2D6A4F]/5 border border-[#2D6A4F]/10 relative overflow-hidden group/note shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2D6A4F]/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                        <div className="flex items-start gap-5 relative z-10">
                          <div className="w-8 h-8 rounded-xl bg-[#2D6A4F] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-emerald-950/50">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-[#2D6A4F] uppercase tracking-[0.2em] mb-2">Agent Context</p>
                            <p className="text-[14px] font-medium text-white/70 leading-relaxed italic">
                              "{activeTab.content.ai_note}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Browser Bottom Status */}
              <div className="h-10 bg-black/60 border-t border-white/5 px-6 flex items-center justify-between text-[9px] font-black text-white/10 uppercase tracking-[0.4em]">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] animate-pulse" />
                  Live Syncing
                </div>
                <div className="flex items-center gap-4">
                  <span>AST v4.2-STABLE</span>
                  <span className="text-white/5">|</span>
                  <span>MDX-R</span>
                </div>
              </div>
            </div>

            {/* Float Decoration - Search */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#0d1411]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl hidden lg:block z-20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-[#2D6A4F] flex items-center justify-center text-white shadow-lg shadow-emerald-950/50">
                  <Search className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Search</span>
              </div>
              <div className="space-y-3">
                <div className="h-1.5 bg-white/10 rounded-full w-full" />
                <div className="h-1.5 bg-white/5 rounded-full w-4/5" />
                <div className="h-1.5 bg-white/5 rounded-full w-2/3" />
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
