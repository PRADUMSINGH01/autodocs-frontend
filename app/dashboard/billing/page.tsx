import Link from "next/link";

export default function Billing() {
  const invoices = [
    { id: "INV-2026-003", date: "May 1, 2026", amount: "$29.00", status: "Paid" },
    { id: "INV-2026-002", date: "Apr 1, 2026", amount: "$29.00", status: "Paid" },
    { id: "INV-2026-001", date: "Mar 1, 2026", amount: "$29.00", status: "Paid" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Billing & Plans</h1>
        <p className="text-[var(--color-muted)] mt-1">Manage your subscription and billing history.</p>
      </div>

      {/* Current Plan */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-sm p-6 sm:p-8 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-primary)]/10 blur-[80px] rounded-full pointer-events-none"></div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Pro Plan</h2>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
                Active
              </span>
            </div>
            <p className="text-[var(--color-muted)]">You are currently on the Pro plan. Your next charge of $29.00 will be applied on June 1, 2026.</p>
          </div>
          <button className="px-6 py-2.5 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] rounded-lg font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors whitespace-nowrap">
            Change Plan
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-border)] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-[var(--color-muted)] mb-1">Repositories</p>
            <p className="text-lg font-semibold text-[var(--color-foreground)]">3 / 10</p>
            <div className="w-full bg-[var(--color-background)] h-2 rounded-full mt-2 overflow-hidden border border-[var(--color-border)]">
              <div className="bg-[var(--color-primary)] h-full" style={{ width: "30%" }}></div>
            </div>
          </div>
          <div>
            <p className="text-sm text-[var(--color-muted)] mb-1">Monthly Builds</p>
            <p className="text-lg font-semibold text-[var(--color-foreground)]">45 / 500</p>
            <div className="w-full bg-[var(--color-background)] h-2 rounded-full mt-2 overflow-hidden border border-[var(--color-border)]">
              <div className="bg-[var(--color-secondary)] h-full" style={{ width: "9%" }}></div>
            </div>
          </div>
          <div>
            <p className="text-sm text-[var(--color-muted)] mb-1">Team Members</p>
            <p className="text-lg font-semibold text-[var(--color-foreground)]">2 / 5</p>
            <div className="w-full bg-[var(--color-background)] h-2 rounded-full mt-2 overflow-hidden border border-[var(--color-border)]">
              <div className="bg-[var(--color-accent)] h-full" style={{ width: "40%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-sm p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-[var(--color-foreground)] mb-4">Payment Method</h2>
        <div className="flex items-center justify-between p-4 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center font-bold text-blue-800 text-sm italic">
              VISA
            </div>
            <div>
              <p className="font-medium text-[var(--color-foreground)]">Visa ending in 4242</p>
              <p className="text-sm text-[var(--color-muted)]">Expires 12/28</p>
            </div>
          </div>
          <button className="text-sm text-[var(--color-primary)] hover:underline">Update</button>
        </div>
      </div>

      {/* Invoice History */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--color-border)]">
          <h2 className="font-semibold text-[var(--color-foreground)]">Invoice History</h2>
        </div>
        <div className="divide-y divide-[var(--color-border)]">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="px-6 py-4 flex items-center justify-between hover:bg-[var(--color-background)] transition-colors">
              <div>
                <p className="font-medium text-[var(--color-foreground)]">{invoice.date}</p>
                <p className="text-sm text-[var(--color-muted)]">{invoice.id}</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-medium text-[var(--color-foreground)]">{invoice.amount}</span>
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                  {invoice.status}
                </span>
                <button className="text-[var(--color-muted)] hover:text-[var(--color-foreground)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
