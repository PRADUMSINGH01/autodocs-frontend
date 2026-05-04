import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Dashboard - Auto Docs",
  description: "Manage your repositories and documentation.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[var(--color-background)]">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-shrink-0 z-20">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Mobile Header (simplified) */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            <span className="font-bold text-lg tracking-tight">ShipQuill</span>
          </div>
          <button className="text-[var(--color-muted)] hover:text-[var(--color-foreground)]">
            {/* Simple Menu Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
          </button>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 relative z-0">
           {/* Background subtle glows for dashboard */}
           <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--color-primary)]/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
           <div className="fixed bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[var(--color-secondary)]/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
           {children}
        </main>
      </div>
    </div>
  );
}
