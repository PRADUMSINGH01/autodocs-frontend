"use client";

import { useState } from "react";
import Link from "next/link";

type DomainStatus = "idle" | "pending" | "verifying" | "verified" | "failed";

export default function SettingsPage() {
  const [domain, setDomain] = useState("");
  const [savedDomain, setSavedDomain] = useState<string | null>(null);
  const [status, setStatus] = useState<DomainStatus>("idle");
  const [publishMode, setPublishMode] = useState<"auto" | "draft">("auto");
  const [copied, setCopied] = useState(false);
  const isPro = false; // TODO: wire up to real subscription status from Firebase

  const CNAME_TARGET = "proxy.shipquill.ink";

  const handleAddDomain = () => {
    if (!domain.trim()) return;
    setSavedDomain(domain.trim());
    setStatus("pending");
  };

  const handleVerify = () => {
    setStatus("verifying");
    // Simulate DNS polling — replace with real API call
    setTimeout(() => {
      setStatus("verified"); // or "failed" if DNS not resolved
    }, 2500);
  };

  const handleRemove = () => {
    setDomain("");
    setSavedDomain(null);
    setStatus("idle");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const statusBadge = {
    idle: null,
    pending: (
      <span className="flex items-center gap-1.5 text-amber-600 bg-amber-50 border border-amber-200 text-xs font-bold px-3 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
        Awaiting DNS
      </span>
    ),
    verifying: (
      <span className="flex items-center gap-1.5 text-blue-600 bg-blue-50 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping inline-block" />
        Verifying…
      </span>
    ),
    verified: (
      <span className="flex items-center gap-1.5 text-green-700 bg-green-50 border border-green-200 text-xs font-bold px-3 py-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Verified & Live
      </span>
    ),
    failed: (
      <span className="flex items-center gap-1.5 text-red-600 bg-red-50 border border-red-200 text-xs font-bold px-3 py-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        DNS Not Found
      </span>
    ),
  };

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-[var(--color-foreground)] tracking-tight mb-1">Settings</h1>
        <p className="text-[var(--color-muted)] text-sm">Manage your custom domain, publish mode, and preferences.</p>
      </div>

      {/* Custom Domain Card */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-[var(--color-border)] flex items-start justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-[var(--color-foreground)] mb-1 flex items-center gap-2">
              Custom Domain
              {!isPro && (
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20">
                  Pro
                </span>
              )}
            </h2>
            <p className="text-sm text-[var(--color-muted)]">
              Serve your docs at <code className="text-[var(--color-primary)] bg-[var(--color-background)] px-1.5 py-0.5 rounded text-xs font-mono">docs.yourapp.com</code> instead of a subdomain.
            </p>
          </div>
          {savedDomain && statusBadge[status]}
        </div>

        <div className="p-6 space-y-6">
          {!isPro ? (
            // Locked State
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-muted)]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <div>
                <p className="font-bold text-[var(--color-foreground)] mb-1">Custom domains are a Pro feature</p>
                <p className="text-sm text-[var(--color-muted)]">Upgrade to Pro to connect your own domain and get an SSL cert provisioned automatically.</p>
              </div>
              <Link href="/pricing" className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-md">
                Upgrade to Pro — $19/mo
              </Link>
            </div>
          ) : (
            <>
              {/* Domain Input */}
              {!savedDomain ? (
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="docs.yourapp.com"
                    className="flex-1 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] font-mono transition-colors"
                  />
                  <button
                    onClick={handleAddDomain}
                    disabled={!domain.trim()}
                    className="px-5 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-xl font-bold text-sm hover:scale-105 transition-all disabled:opacity-40 disabled:pointer-events-none shadow-md"
                  >
                    Add Domain
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-4 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl px-4 py-3">
                  <span className="font-mono text-sm text-[var(--color-foreground)] font-semibold">{savedDomain}</span>
                  <button onClick={handleRemove} className="text-[var(--color-muted)] hover:text-red-400 text-xs font-bold transition-colors">
                    Remove
                  </button>
                </div>
              )}

              {/* CNAME Instructions */}
              {savedDomain && status !== "verified" && (
                <div className="space-y-4">
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-5">
                    <p className="text-sm font-bold text-[var(--color-foreground)] mb-3">
                      Step 1 — Add this CNAME record to your DNS provider
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs font-mono">
                        <thead>
                          <tr className="text-[var(--color-muted)] uppercase tracking-widest text-left">
                            <th className="pb-2 pr-8">Type</th>
                            <th className="pb-2 pr-8">Name</th>
                            <th className="pb-2">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-[var(--color-foreground)]">
                            <td className="pr-8 font-bold text-orange-500">CNAME</td>
                            <td className="pr-8">{savedDomain.split(".")[0]}</td>
                            <td className="flex items-center gap-2">
                              {CNAME_TARGET}
                              <button
                                onClick={() => copyToClipboard(CNAME_TARGET)}
                                className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors ml-1"
                                title="Copy"
                              >
                                {copied ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                )}
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-[var(--color-muted)] mt-3">
                      DNS changes can take up to 24 hours to propagate. Usually it's under 5 minutes.
                    </p>
                  </div>

                  <button
                    onClick={handleVerify}
                    disabled={status === "verifying"}
                    className="w-full py-3 border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all disabled:opacity-50"
                  >
                    {status === "verifying" ? "Checking DNS…" : "Step 2 — Verify DNS →"}
                  </button>

                  {status === "failed" && (
                    <p className="text-xs text-red-400 text-center">
                      DNS not found yet. Make sure the CNAME record is saved and try again in a few minutes.
                    </p>
                  )}
                </div>
              )}

              {status === "verified" && (
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5 text-center">
                  <p className="text-green-700 font-bold text-sm mb-1">🎉 Your custom domain is live!</p>
                  <a href={`https://${savedDomain}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-primary)] hover:underline font-mono">
                    https://{savedDomain}
                  </a>
                  <p className="text-xs text-[var(--color-muted)] mt-2">SSL certificate provisioned automatically. Your docs are now served over HTTPS.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Publish Mode Card */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-[var(--color-border)]">
          <h2 className="text-base font-bold text-[var(--color-foreground)] mb-1">Publish Mode</h2>
          <p className="text-sm text-[var(--color-muted)]">Choose how the agent publishes docs after every code push.</p>
        </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => setPublishMode("auto")}
            className={`text-left p-5 rounded-xl border-2 transition-all ${publishMode === "auto" ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" : "border-[var(--color-border)] hover:border-[var(--color-muted)]"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={publishMode === "auto" ? "text-[var(--color-primary)]" : "text-[var(--color-muted)]"}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              <span className="font-bold text-sm text-[var(--color-foreground)]">Auto-Publish</span>
              <span className="ml-auto text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">Recommended</span>
            </div>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              Docs go live instantly on every merge to <code className="font-mono">main</code>. Zero manual steps. This is the full ShipQuill experience.
            </p>
          </button>
          <button
            onClick={() => setPublishMode("draft")}
            className={`text-left p-5 rounded-xl border-2 transition-all ${publishMode === "draft" ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" : "border-[var(--color-border)] hover:border-[var(--color-muted)]"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={publishMode === "draft" ? "text-[var(--color-primary)]" : "text-[var(--color-muted)]"}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              <span className="font-bold text-sm text-[var(--color-foreground)]">Draft Mode</span>
            </div>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              Agent writes the docs, but you review and approve before they go live. Good for teams who want editorial control.
            </p>
          </button>
        </div>
        <div className="px-6 pb-6">
          <button className="px-5 py-2.5 bg-[var(--color-primary)] text-[var(--color-background)] rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
