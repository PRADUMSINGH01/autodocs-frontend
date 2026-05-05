"use client";

import React, { useEffect, useState } from 'react';
import { Search, Menu, GitBranch, BookOpen, FileText, ChevronRight, Folder } from 'lucide-react';
import SearchDialog from './SearchDialog';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState<string>('');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headingIds = [
        '1-executive-summary',
        '2-architecture-deep-dive',
        '3-api-reference',
        '4-getting-started-usage',
        '5-security-performance',
        '6-contribution-guide'
      ];
      
      let currentActiveId = headingIds[0]; 
      
      for (const id of headingIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentActiveId = id;
          }
        }
      }
      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For the Right Sidebar Scroll Spy
  const TocLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const id = href.replace('#', '');
    const isActive = activeId === id;
    
    return (
      <li>
        <a 
          href={href} 
          className={`block py-1.5 text-sm transition-all duration-200 border-l-2 pl-4 -ml-[2px] ${
            isActive 
              ? 'text-primary dark:text-primary/80 font-medium border-primary dark:border-primary' 
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700'
          }`}
        >
          {children}
        </a>
      </li>
    );
  };

  // For the Left Sidebar Navigation
  const NavItem = ({ title, href, active }: { title: string, href: string, active?: boolean }) => (
    <li>
      <a href={href} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
        active 
          ? 'bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary/80 font-medium' 
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1A1F2E] hover:text-gray-900 dark:hover:text-white'
      }`}>
        {active ? <FileText className="w-4 h-4 text-primary" /> : <FileText className="w-4 h-4 opacity-70" />}
        {title}
      </a>
    </li>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0D13] flex flex-col font-sans">
      <SearchDialog open={searchOpen} setOpen={setSearchOpen} />
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0B0D13]/80 backdrop-blur-md">
        <div className="flex h-14 items-center px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-lg text-gray-900 dark:text-white w-64 shrink-0">
            <div className="bg-gradient-to-br from-primary to-indigo-600 p-1 rounded-md">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span>ShipQuill</span>
          </div>

          <div 
            className="flex-1 max-w-md hidden md:flex items-center relative cursor-text ml-4"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="w-4 h-4 absolute left-3 text-gray-400" />
            <div className="w-full bg-gray-100 dark:bg-[#1A1F2E] hover:bg-gray-200 dark:hover:bg-[#23293B] border border-transparent rounded-lg py-1.5 pl-10 pr-3 text-sm text-gray-500 transition-colors flex items-center justify-between shadow-sm">
              <span>Search docs...</span>
              <div className="text-[10px] text-gray-400 font-mono border border-gray-200 dark:border-gray-700 px-1.5 rounded bg-white dark:bg-gray-800">⌘K</div>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <a href="https://github.com/expressjs/express" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <GitBranch className="w-5 h-5" />
            </a>
            <button className="md:hidden text-gray-600 dark:text-gray-400">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex max-w-[100rem] mx-auto w-full px-4 md:px-8">
        
        {/* Left Sidebar (Global Navigation) */}
        <aside className="hidden md:block w-64 shrink-0 border-r border-gray-100 dark:border-gray-800/60 overflow-y-auto h-[calc(100vh-3.5rem)] sticky top-14 py-8 pr-6">
          <div className="space-y-6">
            
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Folder className="w-4 h-4 text-primary" />
                Documentation
              </h4>
              <ul className="space-y-1">
                <NavItem title="Express.js Overview" href="#1-executive-summary" active={true} />
                <NavItem title="Installation" href="#installation" />
                <NavItem title="Routing Basics" href="#basic-routing" />
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Folder className="w-4 h-4 text-blue-500" />
                Advanced Topics
              </h4>
              <ul className="space-y-1">
                <NavItem title="Middleware" href="#middleware" />
                <NavItem title="Error Handling" href="#error-handling" />
                <NavItem title="Security" href="#5-security-performance" />
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Folder className="w-4 h-4 text-emerald-500" />
                API Reference
              </h4>
              <ul className="space-y-1">
                <NavItem title="Application" href="#application-app" />
                <NavItem title="Request" href="#request-req" />
                <NavItem title="Response" href="#response-res" />
                <NavItem title="Router" href="#router-express-router" />
              </ul>
            </div>

          </div>
        </aside>

        {/* Middle Main Content */}
        <main className="flex-1 min-w-0 py-8 px-4 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto">
            {children}
          </div>
        </main>
        
        {/* Right Sidebar (Table of Contents / Scroll Spy) */}
        <aside className="hidden lg:block w-64 shrink-0 overflow-y-auto h-[calc(100vh-3.5rem)] sticky top-14 py-8 pl-6">
          <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">On this page</div>
          <div className="border-l-2 border-gray-100 dark:border-gray-800">
            <ul className="space-y-1">
              <TocLink href="#1-executive-summary">Executive Summary</TocLink>
              <TocLink href="#2-architecture-deep-dive">Architecture Deep-Dive</TocLink>
              <TocLink href="#3-api-reference">API Reference</TocLink>
              <TocLink href="#4-getting-started-usage">Getting Started</TocLink>
              <TocLink href="#5-security-performance">Security & Performance</TocLink>
              <TocLink href="#6-contribution-guide">Contribution Guide</TocLink>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}
