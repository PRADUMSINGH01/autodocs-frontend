"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  LayoutDashboard, 
  Database, 
  FileText, 
  CreditCard, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  LogOut,
  Coins,
  Globe,
  Lock
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Simulation
  const isPremium = false;

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Repositories", href: "/dashboard/repos", icon: <Database className="w-5 h-5" /> },
    { name: "Generated Docs", href: "/dashboard/docs", icon: <FileText className="w-5 h-5" /> },
    { name: "Domains", href: "/dashboard/domains", icon: <Globe className="w-5 h-5" />, premium: true },
    { name: "Billing", href: "/dashboard/billing", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Settings", href: "/dashboard/profile", icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <div className={`flex flex-col h-full bg-background border-r border-border dark:border-slate-800/50 transition-all duration-300 relative ${isCollapsed ? 'w-20' : 'w-64'}`}>
      
      {/* Sidebar Header */}
      <div className={`flex items-center p-6 mb-2 overflow-hidden transition-all duration-300 ${isCollapsed ? 'justify-center px-2' : 'gap-3 px-6'}`}>
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white shadow-sm flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
        </div>
        {!isCollapsed && (
          <div className="flex flex-col animate-in fade-in slide-in-from-left-2 duration-300">
            <span className="font-serif font-bold text-lg text-foreground tracking-tight">ShipQuill</span>
            <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest"></span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className={`flex-1 py-4 space-y-1 overflow-y-auto overflow-x-hidden ${isCollapsed ? 'px-3' : 'px-4'}`}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center py-2 rounded-md text-sm font-semibold transition-all duration-200 group relative ${
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              } ${isCollapsed ? 'justify-center px-0' : 'px-3 gap-3'}`}
              title={isCollapsed ? item.name : undefined}
            >
              <div className={`flex-shrink-0 transition-colors duration-200 ${isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"}`}>
                {item.icon}
              </div>
              {!isCollapsed && <span className="whitespace-nowrap flex-1">{item.name}</span>}
              
              {!isCollapsed && item.premium && !isPremium && (
                <Lock className="w-3 h-3 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Compact Usage Module */}
      {!isCollapsed && (
        <div className="px-4 mb-6">
          <div className="p-4 bg-muted/30 border border-border rounded-lg relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Coins className="w-3 h-3" />
                <span className="text-[9px] font-bold uppercase tracking-wider">AI Quota</span>
              </div>
              <span className="text-[9px] font-bold text-primary">80%</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-end justify-between">
                <span className="text-lg font-bold text-foreground leading-none">0.8M <span className="text-[10px] text-muted-foreground font-normal">/ 1M</span></span>
              </div>
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <div className="w-[80%] h-full bg-primary transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Section */}
      <div className="p-4 mt-auto border-t border-border bg-muted/20 transition-colors">
        {!isCollapsed ? (
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-8 h-8 rounded bg-muted border border-border flex items-center justify-center text-xs font-bold text-muted-foreground">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-foreground truncate">Jane Developer</p>
              <p className="text-[10px] text-muted-foreground truncate font-medium">Starter Plan</p>
            </div>
            <Link href="/" className="text-muted-foreground hover:text-destructive transition-colors">
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
             <Link href="/dashboard/billing" className="text-primary hover:scale-110 transition-transform">
                <Coins className="w-5 h-5" />
             </Link>
             <Link href="/" className="flex justify-center py-2 text-muted-foreground hover:text-destructive transition-colors" title="Log Out">
               <LogOut className="w-5 h-5" />
             </Link>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary rounded-full p-1 z-50 transition-all shadow-sm"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}
