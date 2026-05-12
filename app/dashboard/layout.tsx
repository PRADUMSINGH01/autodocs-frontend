"use client";

import Sidebar from "@/components/Sidebar";
import { useTheme } from "@/components/ThemeProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background transition-colors duration-300">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-shrink-0 z-20 border-r border-border dark:border-slate-800/50">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        {/* Top Header - Removed Search */}
        <header className="h-16 flex-shrink-0 flex items-center justify-between px-8 border-b border-border bg-background/80 backdrop-blur-md z-10 transition-colors duration-300">
          <div className="flex items-center gap-4 flex-1">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden sm:block">Dashboard Overview</span>
          </div>
          <div className="flex items-center gap-6">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl bg-muted/50 border border-transparent hover:border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </button>

            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </button>
            <div className="flex items-center gap-3 border-l border-border pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-bold text-foreground uppercase tracking-wider">Jane Developer</p>
                <p className="text-[9px] text-muted-foreground font-medium uppercase tracking-tighter">Admin</p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-[10px] font-bold border border-primary/20 shadow-lg shadow-primary/10">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background transition-colors duration-300">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            </div>
            <span className="font-serif font-bold text-lg text-foreground">ShipQuill</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="text-muted-foreground">
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </button>
            <button className="text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
            </button>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 sm:p-12 relative z-0 transition-colors duration-300">
           {children}
        </main>
      </div>
    </div>
  );
}
