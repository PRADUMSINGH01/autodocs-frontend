"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useToast } from "@/components/ToastProvider";

export default function CreativeRepoProject() {
  const { id } = useParams();
  const { success, info } = useToast();
  
  const [project] = useState({
    name: "Frontend App",
    repo: "company/frontend-app",
    sections: [
      {
        title: "Essentials",
        files: [
          { name: "Introduction.mdx", status: "Published", id: "101", desc: "Core introduction to the project" },
          { name: "Installation.mdx", status: "Published", id: "102", desc: "Setting up your environment" },
        ]
      },
      {
        title: "Development",
        files: [
          { name: "Architecture.mdx", status: "Published", id: "201", desc: "Project structure and design patterns" },
          { name: "Routing.mdx", status: "Draft", id: "203", desc: "Navigation and URL structure" },
        ]
      }
    ]
  });

  const handleDeploy = () => {
    info("Starting global deployment...");
    setTimeout(() => {
      success("All sections deployed successfully!");
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6 relative">
      {/* Background Decor */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[80%] h-[60%] border border-[#2D6A4F]/5 rounded-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-8">
        <div className="flex items-center gap-8">
          <Link href="/dashboard/docs" className="w-14 h-14 rounded-[20px] bg-white border border-slate-100 flex items-center justify-center text-slate-300 hover:text-[#2D6A4F] hover:shadow-xl transition-all group">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-bold text-[#2D6A4F] uppercase tracking-[0.2em]">Repository Management</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <h1 className="font-serif text-5xl font-bold text-[#1B3022] tracking-tight">{project.name}</h1>
            <p className="text-slate-400 font-medium mt-2">{project.repo}</p>
          </div>
        </div>
        <button 
          onClick={handleDeploy}
          className="px-8 py-4 rounded-[22px] bg-[#1B3022] text-white font-bold text-sm hover:bg-[#2D6A4F] hover:shadow-2xl hover:shadow-green-900/30 transition-all active:scale-[0.98]"
        >
          Deploy All Changes
        </button>
      </div>

      {/* Sections List */}
      <div className="space-y-16">
        {project.sections.map((section) => (
          <div key={section.title} className="space-y-6">
            <div className="flex items-center gap-4 px-2">
               <h2 className="text-[11px] font-bold text-[#2D6A4F] uppercase tracking-[0.3em]">{section.title}</h2>
               <div className="flex-1 h-px bg-gradient-to-r from-slate-100 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.files.map((file) => (
                <Link 
                  key={file.id} 
                  href={`/dashboard/docs/edit/${file.id}`}
                  className="group bg-white/50 backdrop-blur-xl border border-slate-100 rounded-[28px] p-8 hover:shadow-2xl hover:border-[#2D6A4F]/20 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#2D6A4F]/10 group-hover:text-[#2D6A4F] transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      </div>
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
                        file.status === 'Published' ? 'text-green-600 bg-green-50 border-green-100' : 'text-slate-400 bg-slate-50 border-slate-100'
                      }`}>
                        {file.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1B3022] group-hover:text-[#2D6A4F] transition-colors">{file.name}</h3>
                    <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed">{file.desc}</p>
                    <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-[#2D6A4F] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Open Editor
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                  </div>
                </Link>
              ))}
              
              <button className="border-2 border-dashed border-slate-100 rounded-[28px] p-8 flex flex-col items-center justify-center text-slate-300 hover:border-[#2D6A4F] hover:text-[#2D6A4F] hover:bg-white transition-all group min-h-[180px]">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-green-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">New File</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
