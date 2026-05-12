"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useToast } from "@/components/ToastProvider";
import { 
  ChevronLeft, 
  Save, 
  Eye, 
  Split, 
  PenLine, 
  Image as ImageIcon, 
  Code2, 
  AlertCircle,
  Layout,
  Grid,
  Table,
  Zap,
  Sparkles,
  GitBranch,
  ArrowRight
} from "lucide-react";

export default function CreativeDocsEditor() {
  const { id } = useParams();
  const { success } = useToast();
  
  const [content, setContent] = useState(`# Introduction to ShipQuill

ShipQuill is an agentic documentation platform designed for SaaS startups and indie hackers. It connects directly to your repository and automatically generates beautiful, high-performance documentation websites.

## Key Features

- **AST Analysis**: Our agents parse your code to understand structure and relationships.
- **Auto Deploy**: Every push to main triggers a documentation rebuild.
- **MDX Support**: Write custom content in MDX and combine it with auto-generated specs.
`);

  const [title, setTitle] = useState("Introduction");
  const [isSaving, setIsSaving] = useState(false);
  const [activeView, setActiveView] = useState<'editor' | 'preview' | 'split'>('split');

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      success("Changes saved successfully");
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col bg-background -m-8 sm:-m-12 overflow-hidden relative transition-colors duration-300">
      
      {/* Sharper Professional Header */}
      <header className="h-16 flex-shrink-0 flex items-center justify-between px-8 z-30 relative border-b border-border bg-background/50 backdrop-blur-xl">
        <div className="flex items-center gap-6">
          <Link href="/dashboard/docs" className="p-1.5 hover:bg-muted rounded-md transition-all">
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </Link>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
               <GitBranch className="w-3 h-3 text-primary" />
               <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em]">shipquill/frontend</span>
            </div>
            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl font-serif font-bold text-foreground bg-transparent border-none outline-none focus:text-primary transition-colors"
              placeholder="Page title..."
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-muted/50 p-1 rounded-lg border border-border/50">
            {[
              { id: 'editor', icon: <PenLine className="w-3.5 h-3.5" />, label: 'Write' },
              { id: 'split', icon: <Split className="w-3.5 h-3.5" />, label: 'Split' },
              { id: 'preview', icon: <Eye className="w-3.5 h-3.5" />, label: 'Preview' },
            ].map(view => (
              <button 
                key={view.id}
                onClick={() => setActiveView(view.id as any)}
                className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all flex items-center gap-2 ${activeView === view.id ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {view.icon}
                {view.label}
              </button>
            ))}
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-sm flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </header>

      {/* Sharper Workspace */}
      <div className="flex-1 flex px-8 pb-8 gap-6 overflow-hidden relative z-20 pt-6">
        
        {/* Editor Panel */}
        {(activeView === 'editor' || activeView === 'split') && (
          <div className={`h-full flex flex-col bg-card/70 backdrop-blur-2xl border border-border rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${activeView === 'split' ? 'w-1/2' : 'w-full max-w-5xl mx-auto'}`}>
            {/* Contextual Toolbar */}
            <div className="h-12 flex-shrink-0 px-6 flex items-center justify-between border-b border-border/50 bg-muted/20">
              <div className="flex items-center gap-3">
                <button className="p-1.5 text-muted-foreground hover:text-primary hover:bg-background rounded transition-all" title="Image"><ImageIcon className="w-4 h-4" /></button>
                <button className="p-1.5 text-muted-foreground hover:text-primary hover:bg-background rounded transition-all" title="Code"><Code2 className="w-4 h-4" /></button>
                <button className="p-1.5 text-muted-foreground hover:text-primary hover:bg-background rounded transition-all" title="Alert"><AlertCircle className="w-4 h-4" /></button>
                <div className="w-px h-3 bg-border" />
                <button className="p-1.5 text-muted-foreground hover:text-primary hover:bg-background rounded transition-all" title="Grid"><Grid className="w-4 h-4" /></button>
                <button className="p-1.5 text-muted-foreground hover:text-primary hover:bg-background rounded transition-all" title="Table"><Table className="w-4 h-4" /></button>
              </div>
              <div className="flex items-center gap-1.5 text-primary opacity-60">
                <Sparkles className="w-3 h-3" />
                <span className="text-[9px] font-bold uppercase tracking-widest">AI Assisted</span>
              </div>
            </div>
            
            <textarea 
              className="flex-1 p-8 sm:p-10 outline-none font-mono text-[13px] leading-relaxed text-foreground/80 resize-none bg-transparent custom-scrollbar"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              spellCheck={false}
              placeholder="Start writing..."
            />
          </div>
        )}

        {/* Preview Panel */}
        {(activeView === 'preview' || activeView === 'split') && (
          <div className={`h-full flex flex-col bg-card/40 backdrop-blur-xl border border-border rounded-xl shadow-lg overflow-hidden transition-all duration-500 relative ${activeView === 'split' ? 'w-1/2' : 'w-full max-w-5xl mx-auto'}`}>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-10">
              <div className="max-w-2xl mx-auto prose dark:prose-invert prose-slate prose-headings:font-serif prose-headings:tracking-tight prose-a:text-primary prose-pre:bg-muted prose-pre:rounded-lg prose-pre:p-6">
                <h1 className="text-foreground text-4xl mb-10 leading-tight">{title || "Untitled"}</h1>
                
                <div className="text-foreground/80 leading-relaxed text-base">
                  <h2 className="text-foreground border-b border-border pb-3">Introduction</h2>
                  <p>
                    ShipQuill is an agentic documentation platform designed for SaaS startups and indie hackers. It connects directly to your repository and automatically generates beautiful, high-performance documentation websites.
                  </p>
                  
                  <div className="my-8 p-6 bg-primary/5 border border-primary/10 rounded-lg relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-2">
                       <Zap className="w-3.5 h-3.5 text-primary" />
                       <h4 className="text-primary font-bold uppercase tracking-widest text-[10px]">Sync Status</h4>
                    </div>
                    <p className="text-foreground font-medium text-sm italic">"Your documentation is currently in sync with the latest main branch push."</p>
                  </div>

                  <h3 className="text-foreground">Key Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-8">
                    {[
                      { t: 'AST Analysis', d: 'Deep understanding of code.', icon: <Code2 className="w-4 h-4" /> },
                      { t: 'MDX Support', d: 'Custom components.', icon: <Layout className="w-4 h-4" /> },
                    ].map(f => (
                      <div key={f.t} className="p-4 rounded-lg bg-background/50 border border-border hover:border-primary/20 transition-all group">
                        <div className="w-7 h-7 rounded bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all mb-2">
                           {f.icon}
                        </div>
                        <p className="font-bold text-foreground text-xs">{f.t}</p>
                        <p className="text-[11px] text-muted-foreground mt-1 leading-normal">{f.d}</p>
                      </div>
                    ))}
                  </div>

                  <pre className="text-xs leading-relaxed overflow-x-auto p-4 rounded-lg bg-muted/50 border border-border">
{`{
  "project": "ShipQuill",
  "autoGen": true,
  "theme": "forest",
  "features": ["ai", "sync", "mdx"]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

