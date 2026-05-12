"use client";

import { motion } from "framer-motion";

export default function TrustedBy() {
  const logos = [
    { name: "Acme Corp", icon: "◈" },
    { name: "GlobalTech", icon: "◇" },
    { name: "VectorFlow", icon: "⬡" },
    { name: "CloudSync", icon: "⬢" },
    { name: "DevLogic", icon: "⌘" },
    { name: "NexaLabs", icon: "◆" },
  ];

  return (
    <div className="py-16 bg-[#FDFCF9] border-y border-green-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold text-[#1B3022]/30 uppercase tracking-[0.35em] mb-12">
          Trusted by the next generation of builders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-green-900/5 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300 cursor-default"
            >
              <span className="text-xl font-serif text-[#2D6A4F]">{logo.icon}</span>
              <span className="text-sm font-bold text-[#1B3022]/70 tracking-tight">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
