import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#fcfaf5] pt-24 pb-12 overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 -z-10 opacity-[0.15] mix-blend-multiply">
        <Image
          src="/water-bg.jpg"
          alt="Footer texture"
          fill
          className="object-cover object-bottom"
        />
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-700/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-20">
          
          {/* Brand/Logo Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-[#3d2611] tracking-tight mb-4">ShipQuill</h3>
            <p className="text-[#3d2611]/70 text-[15px] leading-relaxed mb-6 pr-4 font-medium">
              The premium, agentic documentation platform for modern SaaS teams and indie hackers.
            </p>
            <div className="flex items-center gap-4">
              {/* X (Twitter) Icon */}
              <a href="https://x.com/soloshippper" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-700 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[14px] font-bold text-[#3d2611] mb-6 uppercase tracking-widest">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/signup" className="text-[#3d2611]/80 hover:text-orange-600 font-semibold transition-colors text-[15px]">Start for Free</Link></li>
              <li><Link href="#features" className="text-[#3d2611]/80 hover:text-orange-600 font-semibold transition-colors text-[15px]">Features</Link></li>
              <li><Link href="#how-it-works" className="text-[#3d2611]/80 hover:text-orange-600 font-semibold transition-colors text-[15px]">How It Works</Link></li>
              <li><Link href="/pricing" className="text-[#3d2611]/80 hover:text-orange-600 font-semibold transition-colors text-[15px]">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[14px] font-bold text-[#3d2611] mb-6 uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/docs" className="text-[#3d2611]/80 hover:text-orange-600 font-semibold transition-colors text-[15px]">Documentation</Link></li>
              <li><Link href="/blog" className="text-[#3d2611]/80 hover:text-orange-600 font-semibold transition-colors text-[15px]">Blog</Link></li>
              <li><Link href="/community" className="text-[#3d2611]/80 hover:text-orange-600 font-semibold transition-colors text-[15px]">Community</Link></li>
              <li><Link href="/guides" className="text-[#3d2611]/80 hover:text-orange-600 font-semibold transition-colors text-[15px]">API Guides</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[14px] font-bold text-[#3d2611] mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-[#3d2611]/80 hover:text-orange-600 font-semibold transition-colors text-[15px]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[#3d2611]/80 hover:text-orange-600 font-semibold transition-colors text-[15px]">Terms of Service</Link></li>
              <li><a href="mailto:team@shipquill.ink" className="text-[#3d2611]/80 hover:text-orange-600 font-semibold transition-colors text-[15px]">Contact Us</a></li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3d2611]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#3d2611]/60 text-sm font-semibold">
            &copy; {new Date().getFullYear()} ShipQuill. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm font-bold text-[#3d2611]/70">
            <span>Built with</span>
            <span className="text-orange-500 animate-pulse">❤</span>
            <span>by Agents</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
