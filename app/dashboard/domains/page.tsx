"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Globe, 
  Lock, 
  ExternalLink, 
  Plus, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  ArrowRight,
  Copy,
  Check,
  RefreshCw,
  Server,
  ShieldCheck,
  ChevronRight,
  X
} from "lucide-react";
import { useToast } from "@/components/ToastProvider";

export default function CustomDomains() {
  const { success } = useToast();
  // Simulate plan check (Set to true to show the "Real" connection UI)
  const [isPremium, setIsPremium] = useState(true);
  const [showConnectWizard, setShowConnectWizard] = useState(false);
  const [step, setStep] = useState(1);
  const [domainName, setDomainName] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    success("Copied to clipboard");
  };

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(3);
      success("Domain verified successfully!");
    }, 2000);
  };

  if (!isPremium) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-card border border-border rounded-xl p-12 text-center relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 max-w-md mx-auto space-y-8">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto border border-primary/20 shadow-sm">
              <Lock className="w-10 h-10" />
            </div>
            <div className="space-y-3">
              <h1 className="font-serif text-3xl font-bold text-foreground tracking-tight">Custom Domains</h1>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Connect your own domain to provide a white-labeled experience for your users.
              </p>
            </div>
            <Link href="/dashboard/billing" className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
              Upgrade to Pro for $10/mo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 space-y-10 px-4 relative">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-serif text-4xl font-bold text-foreground tracking-tight">Custom Domains</h1>
          <p className="text-muted-foreground font-medium mt-1">Manage your white-labeled documentation links.</p>
        </div>
        <button 
          onClick={() => setShowConnectWizard(true)}
          className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Connect Domain
        </button>
      </div>

      {/* Domain List */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="divide-y divide-border">
          {[
            { domain: "docs.shipquill.com", status: "Active", repo: "shipquill/core-api", ssl: "Managed" },
            { domain: "api.shipquill.com", status: "Pending", repo: "shipquill/docs-web", ssl: "In Progress" },
          ].map((item, i) => (
            <div key={i} className="p-8 flex items-center justify-between hover:bg-muted/10 transition-all group">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors border border-border">
                   <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-bold text-foreground text-lg">{item.domain}</p>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.status === 'Active' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                     <span className="w-1 h-1 rounded-full bg-border" />
                     {item.repo}
                     <span className="w-1 h-1 rounded-full bg-border" />
                     SSL: {item.ssl}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                 <button className="p-2.5 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-all">
                    <ExternalLink className="w-4 h-4" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real Connection Wizard Modal */}
      {showConnectWizard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setShowConnectWizard(false)} />
          <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Wizard Header */}
            <div className="px-8 py-6 border-b border-border flex items-center justify-between bg-muted/20">
               <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Connect Custom Domain</h3>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Step {step} of 3</p>
               </div>
               <button onClick={() => setShowConnectWizard(false)} className="p-2 hover:bg-muted rounded-lg transition-all text-muted-foreground">
                  <X className="w-5 h-5" />
               </button>
            </div>

            <div className="p-8">
              {step === 1 && (
                <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Domain Name</label>
                    <div className="relative">
                       <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                       <input 
                         type="text" 
                         placeholder="docs.example.com" 
                         value={domainName}
                         onChange={(e) => setDomainName(e.target.value)}
                         className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-lg outline-none focus:border-primary transition-all text-foreground font-medium"
                       />
                    </div>
                    <p className="text-[10px] text-muted-foreground italic">You can use an apex domain (example.com) or a subdomain (docs.example.com).</p>
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    disabled={!domainName}
                    className="w-full py-3 bg-primary text-primary-foreground font-bold text-sm rounded-lg hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    Next: Configure DNS
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                   <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-lg flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <p className="text-[11px] font-medium text-foreground/80 leading-relaxed">
                        Add the following DNS records to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) to point your domain to ShipQuill.
                      </p>
                   </div>

                   <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center px-1">
                           <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Record Type</span>
                           <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Host / Name</span>
                           <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Value / Content</span>
                        </div>
                        
                        {/* A Record */}
                        <div className="flex items-center justify-between p-3 bg-muted/50 border border-border rounded-lg group">
                           <span className="w-12 font-bold text-primary text-xs">A</span>
                           <span className="flex-1 text-center font-mono text-xs text-foreground">@</span>
                           <div className="flex items-center gap-2 bg-background px-3 py-1.5 rounded border border-border">
                              <code className="text-xs font-mono text-foreground">76.76.21.21</code>
                              <button onClick={() => copyToClipboard("76.76.21.21")} className="text-muted-foreground hover:text-primary transition-colors">
                                 <Copy className="w-3.5 h-3.5" />
                              </button>
                           </div>
                        </div>

                        {/* CNAME Record */}
                        <div className="flex items-center justify-between p-3 bg-muted/50 border border-border rounded-lg group">
                           <span className="w-12 font-bold text-primary text-xs">CNAME</span>
                           <span className="flex-1 text-center font-mono text-xs text-foreground">docs</span>
                           <div className="flex items-center gap-2 bg-background px-3 py-1.5 rounded border border-border">
                              <code className="text-xs font-mono text-foreground">cname.shipquill.com</code>
                              <button onClick={() => copyToClipboard("cname.shipquill.com")} className="text-muted-foreground hover:text-primary transition-colors">
                                 <Copy className="w-3.5 h-3.5" />
                              </button>
                           </div>
                        </div>
                      </div>
                   </div>

                   <div className="flex gap-4 pt-4">
                      <button onClick={() => setStep(1)} className="flex-1 py-3 bg-muted text-muted-foreground font-bold text-sm rounded-lg hover:text-foreground transition-all">Back</button>
                      <button 
                        onClick={handleVerify}
                        disabled={isVerifying}
                        className="flex-[2] py-3 bg-primary text-primary-foreground font-bold text-sm rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                      >
                        {isVerifying ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
                        {isVerifying ? "Verifying Records..." : "Verify Connection"}
                      </button>
                   </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center space-y-8 py-10 animate-in zoom-in-95 duration-500">
                   <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto border border-primary/20 shadow-lg">
                      <CheckCircle2 className="w-10 h-10" />
                   </div>
                   <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-bold text-foreground tracking-tight">Domain Connected!</h3>
                      <p className="text-muted-foreground font-medium max-w-sm mx-auto">
                        Your custom domain <span className="text-foreground font-bold">{domainName}</span> has been verified. We are now provisioning your SSL certificate.
                      </p>
                   </div>
                   <div className="p-4 bg-muted/30 rounded-lg inline-flex items-center gap-3 text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Provisioning SSL (est. 2-5 mins)
                   </div>
                   <button 
                     onClick={() => setShowConnectWizard(false)}
                     className="w-full py-4 bg-foreground text-background font-bold text-sm rounded-lg hover:opacity-90 transition-all shadow-xl"
                   >
                     Take me back to Dashboard
                   </button>
                </div>
              )}
            </div>

            {/* Vercel/Firebase Style Info Footer */}
            <div className="px-8 py-4 bg-muted/50 border-t border-border flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <Server className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Powered by ShipQuill Edge</span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                     <ShieldCheck className="w-3 h-3" /> SSL Secured
                  </span>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Background decoration for main page */}
      <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-xl flex items-start gap-4">
         <AlertTriangle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
         <div>
            <p className="text-sm font-bold text-foreground leading-none mb-2">DNS Propagation</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
               Changes to DNS records can take up to 48 hours to propagate globally, though most modern registrars update within minutes.
            </p>
         </div>
      </div>
    </div>
  );
}
