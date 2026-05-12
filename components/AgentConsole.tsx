"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, Shield, Activity, CheckCircle2, Server, Search } from "lucide-react";

const logs = [
  { time: "14:20:01", type: "system", text: "Initializing ShipQuill Agent v2.4-STABLE", icon: <Server className="w-3 h-3" /> },
  { time: "14:20:02", type: "system", text: "Handshake verified with github.com/acme/api-core", icon: <Shield className="w-3 h-3" /> },
  { time: "14:20:04", type: "agent", text: "Indexing file structure... 124 files mapping to AST", icon: <Search className="w-3 h-3" /> },
  { time: "14:20:06", type: "agent", text: "Parsing AST for /src/auth/service.ts", icon: <Activity className="w-3 h-3" /> },
  { time: "14:20:07", type: "success", text: "Extracted Interface: UserAuth(login: string, role: string)", icon: <CheckCircle2 className="w-3 h-3" /> },
  { time: "14:20:09", type: "agent", text: "Graph analysis: /src/auth → /src/db/models (1-to-N)", icon: <Activity className="w-3 h-3" /> },
  { time: "14:20:12", type: "system", text: "Synthesizing MDX for 'Authentication Module'...", icon: <Terminal className="w-3 h-3" /> },
  { time: "14:20:15", type: "success", text: "Compiled 12 interactive code examples successfully.", icon: <CheckCircle2 className="w-3 h-3" /> },
  { time: "14:20:18", type: "system", text: "Propagating to global edge CDN (Vercel/AWS)", icon: <Server className="w-3 h-3" /> },
  { time: "14:20:20", type: "success", text: "Doc deployment complete. Reachable at docs.acme.com", icon: <CheckCircle2 className="w-3 h-3" /> },
];

export default function AgentConsole() {
  const [visibleLogs, setVisibleLogs] = useState<typeof logs>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < logs.length) {
      const timer = setTimeout(() => {
        setVisibleLogs((prev) => [...prev, logs[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      const restart = setTimeout(() => {
        setVisibleLogs([]);
        setCurrentIndex(0);
      }, 6000);
      return () => clearTimeout(restart);
    }
  }, [currentIndex]);

  return (
    <section className="py-32 bg-[#0d1411] overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2D6A4F]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2D6A4F]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 text-[#2D6A4F] text-[10px] font-black uppercase tracking-[0.2em]"
            >
              <Terminal className="w-3.5 h-3.5" />
              Agent Cognitive Stream
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
              Watch the Agent <br />
              <span className="text-[#2D6A4F] italic">Synthesize.</span>
            </h2>
            
            <p className="text-white/50 text-lg leading-relaxed font-medium max-w-xl">
              Unlike static scrapers, ShipQuill runs a live cognitive process. 
              It reasons about your architecture, identifying breaking changes 
              and hidden dependencies before they reach your developers.
            </p>
            
            <div className="grid grid-cols-2 gap-10 pt-6">
              <div className="space-y-3">
                <div className="text-4xl font-serif font-bold text-white flex items-center gap-2">
                   01
                   <div className="h-px w-8 bg-[#2D6A4F]/30" />
                </div>
                <div className="text-[#2D6A4F] text-[10px] font-black uppercase tracking-widest">Contextual Reasoning</div>
                <p className="text-white/30 text-xs leading-relaxed font-medium">Understands intent, not just syntax.</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-serif font-bold text-white flex items-center gap-2">
                   02
                   <div className="h-px w-8 bg-[#2D6A4F]/30" />
                </div>
                <div className="text-[#2D6A4F] text-[10px] font-black uppercase tracking-widest">Semantic Mapping</div>
                <p className="text-white/30 text-xs leading-relaxed font-medium">Maps relationships across services.</p>
              </div>
            </div>
          </div>

          {/* Terminal Mockup */}
          <div className="relative group">
            {/* Glow effects */}
            <div className="absolute inset-0 bg-[#2D6A4F]/20 blur-[120px] -z-10 rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="bg-[#050807] rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden font-mono text-xs h-[480px] flex flex-col relative ring-1 ring-white/5">
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-50 bg-[length:100%_4px,3px_100%]" />

              {/* Terminal Header */}
              <div className="bg-white/5 px-8 py-5 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
                <div className="text-white/20 text-[9px] font-black tracking-[0.2em] uppercase">agent_node_id: s-772-quill</div>
              </div>
              
              {/* Terminal Body */}
              <div className="flex-1 p-8 overflow-y-auto space-y-4 custom-scrollbar relative">
                <AnimatePresence initial={false}>
                  {visibleLogs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-4 items-start"
                    >
                      <span className="text-white/10 shrink-0 font-bold tracking-tighter">[{log.time}]</span>
                      <div className="flex gap-3 items-center">
                         <div className={`p-1 rounded-md ${
                            log.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 
                            log.type === 'agent' ? 'bg-[#2D6A4F]/10 text-[#2D6A4F]' : 
                            'bg-white/5 text-white/40'
                         }`}>
                           {log.icon}
                         </div>
                         <span className={`leading-relaxed font-medium ${
                            log.type === 'system' ? 'text-white/40' : 
                            log.type === 'agent' ? 'text-white/80' : 
                            'text-emerald-400 font-bold'
                         }`}>
                           {log.text}
                         </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {currentIndex < logs.length && (
                  <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-5 bg-[#2D6A4F] inline-block align-middle ml-12"
                  />
                )}
              </div>

              {/* Status Bar */}
              <div className="px-8 py-5 bg-black/40 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="flex flex-col gap-1">
                      <div className="text-[8px] text-white/20 uppercase font-black tracking-widest">Process Health</div>
                      <div className="flex gap-0.5">
                         {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className={`w-3 h-1 rounded-full ${i <= (currentIndex/logs.length * 6) ? 'bg-[#2D6A4F]' : 'bg-white/5'}`} />
                         ))}
                      </div>
                   </div>
                </div>
                <div className="text-right">
                   <div className="text-[8px] text-white/20 uppercase font-black tracking-widest mb-1">Compute Load</div>
                   <div className="text-[#2D6A4F] font-bold text-[10px]">14.2 GFLOPS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
