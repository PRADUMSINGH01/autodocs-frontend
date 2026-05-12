"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/components/ToastProvider";
import { 
  GitBranch, 
  ExternalLink, 
  Trash2, 
  ArrowRight,
  Plus
} from "lucide-react";

export default function CreativeDocsDashboard() {
  const { success } = useToast();
  const [docs, setDocs] = useState([
    { id: "repo-1", name: "Frontend App", repo: "company/frontend-app", url: "frontend.autodocs.com", status: "Live", lastUpdated: "2h ago", color: "bg-primary" },
    { id: "repo-2", name: "Backend API", repo: "company/backend-api", url: "backend.autodocs.com", status: "Live", lastUpdated: "1d ago", color: "bg-secondary" },
    { id: "repo-3", name: "Internal Wiki", repo: "company/internal-wiki", url: "wiki.autodocs.com", status: "Staging", lastUpdated: "5h ago", color: "bg-emerald-900" },
  ]);

  const handleDelete = (id: string) => {
    if (confirm("Remove this project?")) {
      setDocs(docs.filter(doc => doc.id !== id));
      success("Project removed successfully");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10 relative">
      {/* Sharper Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 px-4 gap-8">
        <div>
          <h1 className="font-serif text-4xl font-bold text-foreground tracking-tight">Repositories</h1>
          <p className="text-muted-foreground font-medium mt-2">All your documentation sources in one place.</p>
        </div>
        <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Repository
        </button>
      </div>

      {/* Sharper Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {docs.map((doc) => (
          <div key={doc.id} className="group bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <div className={`w-10 h-10 rounded-lg ${doc.color} flex items-center justify-center text-white shadow-sm transition-transform`}>
                  <GitBranch className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${doc.status === 'Live' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-muted text-muted-foreground border-border'}`}>
                    {doc.status}
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{doc.lastUpdated}</span>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="font-serif text-2xl font-bold text-foreground leading-tight mb-2">{doc.name}</h3>
                <p className="text-[11px] font-bold text-muted-foreground tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {doc.repo}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                <Link 
                  href={`/dashboard/docs/${doc.id}`} 
                  className="flex items-center gap-1.5 text-xs font-bold text-primary hover:gap-2.5 transition-all"
                >
                  Manage Docs
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex gap-1.5">
                  <Link href={`https://${doc.url}`} target="_blank" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <button onClick={() => handleDelete(doc.id)} className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
