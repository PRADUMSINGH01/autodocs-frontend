import Link from "next/link";

export default function DashboardOverview() {
  const stats = [
    { name: "Connected Repos", value: "3", change: "+1 this week", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> },
    { name: "Docs Generated", value: "12", change: "+4 this month", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
    { name: "Plan", value: "Pro", change: "Active", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Overview</h1>
        <p className="text-[var(--color-muted)] mt-1">Welcome back. Here's what's happening with your documentation.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="group relative bg-[var(--color-surface)]/50 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-between mb-4">
              <h3 className="font-medium text-[var(--color-muted)]">{stat.name}</h3>
              <div className="text-[var(--color-primary)] bg-[var(--color-primary)]/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
            </div>
            <div className="relative text-3xl font-bold text-[var(--color-foreground)] mb-1 tracking-tight">{stat.value}</div>
            <div className="relative text-sm text-[var(--color-secondary)] font-medium">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-[var(--color-surface)]/50 backdrop-blur-md border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-lg">
          <div className="px-6 py-5 border-b border-[var(--color-border)] flex justify-between items-center bg-[var(--color-surface)]/50">
            <h2 className="font-semibold text-lg text-[var(--color-foreground)]">Recent Activity</h2>
            <Link href="/dashboard/docs" className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">View all →</Link>
          </div>
          <div className="p-0">
            <div className="divide-y divide-[var(--color-border)]/50">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="group px-6 py-4 flex items-center justify-between hover:bg-[var(--color-primary)]/5 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-secondary)]/20 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-foreground)]">Docs regenerated for <span className="text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-accent)]">company/frontend-app</span></p>
                      <p className="text-sm text-[var(--color-muted)] mt-0.5">Triggered by push to main branch</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-[var(--color-muted)] bg-[var(--color-surface)] px-3 py-1 rounded-full border border-[var(--color-border)]">{i + 1}h ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[var(--color-surface)]/50 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-6 shadow-lg">
          <h2 className="font-semibold text-lg text-[var(--color-foreground)] mb-5">Quick Actions</h2>
          <div className="space-y-4">
            <Link href="/dashboard/repos" className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-background)]/50 border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/5 transition-all duration-300 group">
              <div className="text-[var(--color-primary)] bg-[var(--color-primary)]/10 p-2 rounded-lg group-hover:scale-110 group-hover:bg-[var(--color-primary)]/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
              <div>
                <span className="block font-semibold text-[var(--color-foreground)]">Connect New Repo</span>
                <span className="text-xs text-[var(--color-muted)] mt-0.5">Import from GitHub</span>
              </div>
            </Link>
            <button className="w-full flex items-center gap-4 p-4 rounded-xl bg-[var(--color-background)]/50 border border-[var(--color-border)] hover:border-[var(--color-secondary)]/50 hover:bg-[var(--color-secondary)]/5 transition-all duration-300 group text-left">
              <div className="text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 p-2 rounded-lg group-hover:scale-110 group-hover:bg-[var(--color-secondary)]/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </div>
              <div>
                <span className="block font-semibold text-[var(--color-foreground)]">Download CLI Tool</span>
                <span className="text-xs text-[var(--color-muted)] mt-0.5">Run Auto Docs locally</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
