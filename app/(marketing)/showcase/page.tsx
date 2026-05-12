"use client";

import { useState } from "react";
import Link from "next/link";
import {
   Search,
   Menu,
   BookOpen,
   Code2,
   Hash,
   ChevronRight,
   ExternalLink,
   Zap,
   Sparkles,
   Command,
   ArrowLeft
} from "lucide-react";

const DOCS_CONTENT = {
   categories: [
      {
         title: "Getting Started",
         items: ["Introduction", "Quickstart", "Authentication", "Architecture"]
      },
      {
         title: "API Reference",
         items: ["Overview", "Endpoints", "Error Codes", "Rate Limits"]
      },
      {
         title: "SDKs & Tools",
         items: ["JavaScript SDK", "Python SDK", "CLI Tool"]
      }
   ],
   activeDoc: {
      title: "Authentication",
      lastUpdated: "May 11, 2026",
      content: `
      ## Overview
      ShipQuill uses Bearer tokens to authenticate requests. You can generate an API key in your dashboard under the "Settings" section.
      
      All API requests should be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

      ## Authentication Flow
      To authenticate, add an \`Authorization\` header to your requests with the value \`Bearer YOUR_API_KEY\`.
    `,
      codeSnippet: `curl -X GET "https://api.shipquill.com/v1/user" \\
  -H "Authorization: Bearer sk_live_51P..."`,
      aiInsight: "ShipQuill Agent: This endpoint requires the 'user:read' scope. Ensure your API key has the correct permissions."
   }
};

export default function ShowcasePage() {
   const [activeItem, setActiveItem] = useState("Authentication");

   return (
      <div className="min-h-screen bg-white text-slate-900 flex flex-col">

         {/* Mini Top Nav */}
         <header className="h-16 border-b border-slate-100 flex items-center justify-between px-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
            <div className="flex items-center gap-4">
               <Link href="/" className="p-2 hover:bg-slate-50 rounded-lg transition-colors group">
                  <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
               </Link>
               <div className="h-4 w-px bg-slate-200" />
               <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#2D6A4F] flex items-center justify-center text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
                  </div>
                  <span className="font-serif font-bold text-lg tracking-tight">ShipQuill <span className="text-slate-400 font-sans text-sm font-normal ml-1">Docs</span></span>
               </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
               <div className="relative group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#2D6A4F] transition-colors" />
                  <input
                     type="text"
                     placeholder="Search documentation..."
                     className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm w-64 focus:outline-none focus:border-[#2D6A4F]/30 focus:ring-4 focus:ring-[#2D6A4F]/5 transition-all"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-400 pointer-events-none">
                     <Command className="w-2.5 h-2.5" />
                     K
                  </div>
               </div>
               <Link href="/register" className="px-4 py-2 bg-[#2D6A4F] text-white rounded-lg text-sm font-bold hover:bg-[#1B3022] transition-all shadow-md shadow-emerald-900/10">
                  Start Free
               </Link>
            </div>
         </header>

         <div className="flex-1 flex max-w-[1600px] mx-auto w-full">

            {/* Docs Sidebar */}
            <aside className="w-72 border-r border-slate-100 p-8 hidden lg:block overflow-y-auto">
               <nav className="space-y-10">
                  {DOCS_CONTENT.categories.map((cat) => (
                     <div key={cat.title} className="space-y-4">
                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{cat.title}</h4>
                        <ul className="space-y-1">
                           {cat.items.map((item) => (
                              <li key={item}>
                                 <button
                                    onClick={() => setActiveItem(item)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeItem === item
                                          ? 'bg-[#2D6A4F]/5 text-[#2D6A4F] shadow-sm ring-1 ring-[#2D6A4F]/10'
                                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                                       }`}
                                 >
                                    {item}
                                 </button>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-8 md:p-16 lg:p-20 overflow-y-auto">
               <div className="max-w-3xl">
                  <div className="flex items-center gap-2 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                     <BookOpen className="w-3.5 h-3.5" />
                     Documentation / Getting Started
                  </div>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
                     {DOCS_CONTENT.activeDoc.title}
                  </h1>
                  <p className="text-sm text-slate-400 font-medium mb-12">
                     Last updated: {DOCS_CONTENT.activeDoc.lastUpdated}
                  </p>

                  <div className="prose prose-slate max-w-none prose-h2:font-serif prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-600 prose-p:leading-relaxed prose-code:bg-slate-50 prose-code:p-1 prose-code:rounded prose-code:text-[#2D6A4F] prose-code:before:content-none prose-code:after:content-none">
                     <div dangerouslySetInnerHTML={{ __html: DOCS_CONTENT.activeDoc.content.replace(/\n/g, '<br/>') }} />
                  </div>

                  {/* Interaction Callouts */}
                  <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-[#2D6A4F]/20 transition-all group">
                        <h4 className="font-bold text-slate-900 mb-1">Edit this page</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">Submit a PR to our documentation repository.</p>
                     </div>
                     <div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-[#2D6A4F]/20 transition-all group">
                        <ExternalLink className="w-5 h-5 text-slate-400 mb-4 group-hover:text-slate-900" />
                        <h4 className="font-bold text-slate-900 mb-1">Join Community</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">Ask questions in our Discord developer channel.</p>
                     </div>
                  </div>
               </div>
            </main>

            {/* Right Sidebar - Code & AI */}
            <aside className="w-96 border-l border-slate-100 p-8 hidden xl:block bg-slate-50/30 overflow-y-auto sticky top-16 h-[calc(100vh-64px)]">
               <div className="space-y-8">

                  {/* Code Section */}
                  <div className="space-y-4">
                     <div className="flex items-center justify-between px-1">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Example Request</span>
                        <Code2 className="w-3.5 h-3.5 text-slate-400" />
                     </div>
                     <div className="bg-[#0d1411] rounded-xl p-5 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D6A4F] to-emerald-400" />
                        <pre className="text-[11px] font-mono text-emerald-100 leading-relaxed overflow-x-auto">
                           {DOCS_CONTENT.activeDoc.codeSnippet}
                        </pre>
                     </div>
                  </div>

                  {/* AI Agent Insight */}
                  <div className="p-6 rounded-xl bg-[#2D6A4F]/5 border border-[#2D6A4F]/10 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-[#2D6A4F]/5 rounded-full -mr-12 -mt-12 blur-2xl" />
                     <div className="flex items-start gap-4 relative z-10">
                        <div className="w-8 h-8 rounded-lg bg-[#2D6A4F] flex items-center justify-center text-white shadow-lg shadow-emerald-900/20 flex-shrink-0">
                           <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                           <h5 className="text-[10px] font-black text-[#2D6A4F] uppercase tracking-[0.2em] mb-1.5">Agent Insight</h5>
                           <p className="text-xs font-medium text-slate-600 leading-relaxed italic">
                              "{DOCS_CONTENT.activeDoc.aiInsight}"
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Feedback */}
                  <div className="pt-8 border-t border-slate-100 text-center">
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Was this page helpful?</p>
                     <div className="flex justify-center gap-3">
                        <button className="px-4 py-1.5 rounded border border-slate-200 text-xs font-bold hover:bg-slate-50 transition-all">Yes</button>
                        <button className="px-4 py-1.5 rounded border border-slate-200 text-xs font-bold hover:bg-slate-50 transition-all">No</button>
                     </div>
                  </div>
               </div>
            </aside>

         </div>
      </div>
   );
}
