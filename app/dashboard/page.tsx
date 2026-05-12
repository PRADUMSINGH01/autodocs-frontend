"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Activity, 
  Database, 
  GitBranch, 
  RefreshCw, 
  Sparkles, 
  Zap,
  Globe,
  Plus
} from "lucide-react";

export default function DashboardOverview() {
  const [activeTab, setActiveTab] = useState<'activity' | 'repos'>('activity');

  const stats = [
    { name: "Active Repos", value: "12", change: "+2", icon: <GitBranch className="w-4 h-4" /> },
    { name: "Doc Coverage", value: "88%", change: "+5%", icon: <Globe className="w-4 h-4" /> },
    { name: "Avg Build", value: "32s", change: "-4s", icon: <Zap className="w-4 h-4" /> },
    { name: "Engine Health", value: "Optimal", change: "Stable", icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10 py-4">
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-2">
        <div className="space-y-2">
          <h1 className="font-serif text-4xl font-bold text-foreground tracking-tight">Your Projects</h1>
          <p className="text-muted-foreground font-medium text-lg">Manage your automated documentation ecosystem.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard/docs" className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Connect Repository
          </Link>
        </div>
      </div>

      {/* Full-Width Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="group bg-card border border-border/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                 <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                   {stat.icon}
                 </div>
                 <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.name}</span>
              </div>
              <span className="text-[11px] font-bold text-primary">{stat.change}</span>
            </div>
            <h3 className="text-3xl font-bold text-foreground tracking-tight">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Expanded Main Workspace */}
      <div className="space-y-6">
        <div className="flex items-center gap-8 px-2 border-b border-border">
          <button 
            onClick={() => setActiveTab('activity')}
            className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative flex items-center gap-2 ${activeTab === 'activity' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Activity className="w-4 h-4" />
            Recent Activity
            {activeTab === 'activity' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
          </button>
          <button 
            onClick={() => setActiveTab('repos')}
            className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative flex items-center gap-2 ${activeTab === 'repos' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Database className="w-4 h-4" />
            Connected Repositories
            {activeTab === 'repos' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
          </button>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          {activeTab === 'activity' ? (
            <div className="divide-y divide-border/50">
              {[
                { repo: "shipquill/core-api", event: "Generated API Docs", time: "12m ago", status: "Success" },
                { repo: "shipquill/docs-web", event: "README Sync", time: "45m ago", status: "Success" },
                { repo: "acme/frontend", event: "Health Check", time: "2h ago", status: "Running" },
                { repo: "acme/backend", event: "Structural Sync", time: "5h ago", status: "Success" },
                { repo: "acme/core-engine", event: "AST Optimization", time: "8h ago", status: "Success" },
              ].map((item, i) => (
                <div key={i} className="p-7 flex items-center justify-between hover:bg-muted/30 transition-all group">
                  <div className="flex items-center gap-6">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'Success' ? 'bg-primary' : 'bg-blue-500 animate-pulse'}`} />
                    <div>
                      <p className="font-bold text-foreground text-lg leading-none mb-1.5">{item.event}</p>
                      <p className="text-sm text-muted-foreground font-medium">{item.repo}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["frontend-app", "backend-api", "internal-wiki", "core-engine", "auth-service", "data-pipeline"].map(repo => (
                <div key={repo} className="p-6 rounded-lg border border-border bg-muted/20 hover:bg-card hover:shadow-md transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <GitBranch className="w-5 h-5 text-primary" />
                    <span className="font-bold text-foreground">{repo}</span>
                  </div>
                  <Zap className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
