"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AnimatedWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000); // 3 seconds per step
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "Code Push",
      description: "You merge to main.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></svg>
      )
    },
    {
      title: "Agent Parsing",
      description: "AI reads your changes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>
      )
    },
    {
      title: "Doc Generation",
      description: "Guides & APIs written.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
      )
    },
    {
      title: "Live Hosting",
      description: "Published to your domain.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="pb-32 pt-[250px] relative overflow-hidden -mt-[200px] z-10">
      {/* Actual Image Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/fisherman-bg.jpg"
          alt="Fisherman background"
          fill
          priority
          className="object-cover object-bottom"
          quality={100}
        />
        {/* Same opacity overlay as Hero for perfect matching */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3d2611] tracking-tight mb-6">
            The Agentic Workflow
          </h2>
          <p className="text-[18px] text-[#3d2611]/80 leading-relaxed font-medium">
            Watch how our agents turn raw code into beautiful documentation.
          </p>
        </div>

        <div className="relative">
          {/* Glowing Animated Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-[2px] bg-[#3d2611]/10" />
          <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-[2px] overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ ease: "linear", duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="h-full bg-gradient-to-r from-orange-600 to-amber-500 absolute top-0 left-0"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / 3) * 100}%` }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-4 relative z-10">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index <= activeStep;

              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center relative"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                >
                  {/* Node */}
                  <motion.div
                    className={`w-28 h-28 rounded-full flex items-center justify-center mb-8 border transition-all duration-700 shadow-xl relative backdrop-blur-md ${isActive
                      ? "bg-white border-orange-400 text-orange-500 scale-110"
                      : isPast
                        ? "bg-[#fff4e0] border-amber-200 text-amber-600"
                        : "bg-white/50 border-transparent text-[#3d2611]/30 grayscale"
                      }`}
                    animate={isActive ? {
                      boxShadow: [
                        "0px 0px 0px rgba(251,146,60,0)",
                        "0px 0px 30px rgba(251,146,60,0.4)",
                        "0px 0px 0px rgba(251,146,60,0)"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-orange-400"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                    {step.icon}
                  </motion.div>

                  {/* Text */}
                  <div className={`transition-all duration-500 ${isPast ? "opacity-100 translate-y-0" : "opacity-40 translate-y-2"}`}>
                    <h3 className="text-xl font-bold text-[#3d2611] mb-2 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-[15px] text-[#3d2611]/80 font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-40 pt-16 flex flex-col sm:flex-row items-center justify-between gap-8 bg-white/60 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/40 shadow-xl relative overflow-hidden">
          <div className="z-10">
            <h4 className="text-2xl font-bold text-[#3d2611] mb-2">Ready to automate your docs?</h4>
            <p className="text-[#3d2611]/80 text-[15px]">Join 10,000+ developers saving hours every week.</p>
          </div>

          <Link
            href="/signup"
            className="z-10 shrink-0 px-8 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full font-bold text-[15px] hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            Start Writing
          </Link>
        </div>
      </div>
    </section>
  );
}
