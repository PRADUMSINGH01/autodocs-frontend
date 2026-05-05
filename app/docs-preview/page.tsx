import Link from 'next/link';
import { ArrowRight, BookOpen, Terminal, Shield, Zap, Code2, Server, Globe } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0D13] text-gray-900 dark:text-gray-100 font-sans relative overflow-hidden">
      
      {/* Background Effects (Grid & Glowing Orbs) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-full rounded-full bg-primary/10 dark:bg-primary/10 blur-[120px] pointer-events-none"></div>

      {/* Top Navigation */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-gray-800/40 backdrop-blur-md bg-white/50 dark:bg-[#0B0D13]/50">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="bg-gradient-to-br from-primary to-indigo-600 p-1.5 rounded-lg shadow-lg shadow-primary/20">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="tracking-tight">ShipQuill Docs</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          <Link href="/docs-preview/read" className="hover:text-primary dark:hover:text-primary/80 transition-colors">Documentation</Link>
          <div className="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
          <a href="https://github.com/expressjs/express" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary/80 transition-colors">GitHub</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
        
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary/80 text-sm font-semibold mb-8 border border-primary-200 dark:border-primary/20 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/80 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          ShipQuill Beta - Waitlist Now Open
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
          AI Documentation <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500 dark:from-primary/80 dark:to-indigo-400">
            For Your Code
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mb-12 leading-relaxed">
          Generate world-class documentation for your repositories in seconds. Join the waitlist for early access or preview the Express.js docs below.
        </p>

        {/* Waitlist Form Section */}
        <div className="w-full max-w-lg mb-12">
          <WaitlistForm />
        </div>

        {/* Secondary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-24">
          <Link 
            href="/docs-preview/read" 
            className="group flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all border border-transparent hover:border-primary/20"
          >
            Preview Express Docs
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mock Code Editor Preview (Hero Image Alternative) */}
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-[#0d1117] text-left">
          <div className="flex items-center px-4 py-3 border-b border-gray-800 bg-[#161b22]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-xs font-mono text-gray-400">server.js</div>
          </div>
          <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-gray-300">
            <p><span className="text-pink-400">import</span> express <span className="text-pink-400">from</span> <span className="text-primary-300">'express'</span>;</p>
            <p className="mt-2"><span className="text-pink-400">const</span> app = <span className="text-purple-400">express</span>();</p>
            <p className="mt-4"><span className="text-green-400">// Define a route</span></p>
            <p>app.<span className="text-purple-400">get</span>(<span className="text-primary-300">'/'</span>, (req, res) <span className="text-pink-400">=&gt;</span> {'{'}</p>
            <p className="ml-4">res.<span className="text-purple-400">send</span>(<span className="text-primary-300">'Hello World from Express!'</span>);</p>
            <p>{'}'});</p>
            <p className="mt-4">app.<span className="text-purple-400">listen</span>(<span className="text-orange-300">3000</span>, () <span className="text-pink-400">=&gt;</span> console.<span className="text-purple-400">log</span>(<span className="text-primary-300">'Server running...'</span>));</p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 w-full mt-32 text-left">
          <div className="group p-8 rounded-3xl bg-white dark:bg-[#12151E] border border-gray-100 dark:border-gray-800/50 hover:border-primary/30 dark:hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
            <div className="bg-yellow-100 dark:bg-yellow-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-yellow-600 dark:text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">Blazing Fast</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Express provides a thin layer of fundamental web application features, ensuring your Node.js apps run at maximum speed.</p>
          </div>
          <div className="group p-8 rounded-3xl bg-white dark:bg-[#12151E] border border-gray-100 dark:border-gray-800/50 hover:border-green-500/30 dark:hover:border-green-500/30 transition-all hover:shadow-xl hover:shadow-green-500/5">
            <div className="bg-green-100 dark:bg-green-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-green-600 dark:text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">Enterprise Security</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Built with strict input validation, content negotiation, and proxy trust configurations for modern web safety.</p>
          </div>
          <div className="group p-8 rounded-3xl bg-white dark:bg-[#12151E] border border-gray-100 dark:border-gray-800/50 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/5">
            <div className="bg-purple-100 dark:bg-purple-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-7 h-7 text-purple-600 dark:text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">Robust Routing</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">A myriad of HTTP utility methods and middleware at your disposal, making creating a robust API quick and easy.</p>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-gray-100 dark:border-gray-800/50 py-12 mt-20 relative z-10 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>© 2026 ShipQuill Platform. Hosted on user custom domains.</p>
      </footer>
    </div>
  );
}
