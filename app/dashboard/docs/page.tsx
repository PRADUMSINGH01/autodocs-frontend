import Link from "next/link";

export default function Docs() {
  const docs = [
    { name: "Frontend App Documentation", repo: "company/frontend-app", url: "frontend.shipquill.ink", status: "Live", version: "v2.1.0" },
    { name: "Backend API Specs", repo: "company/backend-api", url: "backend.shipquill.ink", status: "Live", version: "v1.5.2" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Generated Documentation</h1>
        <p className="text-[var(--color-muted)] mt-1">View and manage your deployed documentation websites.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc) => (
          <div key={doc.name} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm flex flex-col hover:border-[var(--color-primary)]/50 transition-colors">
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] border border-[var(--color-secondary)]/20">
                  {doc.status}
                </span>
              </div>
              
              <h3 className="font-semibold text-lg text-[var(--color-foreground)] mb-1">{doc.name}</h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">{doc.repo}</p>
              
              <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Latest Build: {doc.version}
              </div>
            </div>
            
            <div className="px-6 py-4 bg-[var(--color-background)]/50 border-t border-[var(--color-border)] flex items-center justify-between">
              <Link href={`https://${doc.url}`} target="_blank" className="text-sm text-[var(--color-foreground)] hover:text-[var(--color-primary)] font-medium truncate w-[150px]">
                {doc.url}
              </Link>
              <button className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)]">Settings</button>
            </div>
          </div>
        ))}
        
        {/* Placeholder for new */}
        <div className="bg-[var(--color-background)] border-2 border-dashed border-[var(--color-border)] rounded-xl flex flex-col items-center justify-center p-6 text-center hover:border-[var(--color-primary)] transition-colors cursor-pointer group h-[240px]">
          <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-muted)] group-hover:text-[var(--color-primary)] mb-4 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
          <h3 className="font-semibold text-[var(--color-foreground)]">Generate New Docs</h3>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-[200px]">Select a connected repository to build new documentation.</p>
        </div>
      </div>
    </div>
  );
}
