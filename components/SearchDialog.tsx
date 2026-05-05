"use client";

import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, FileText, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SearchDialog({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  const router = useRouter();
  
  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen]);

  // Mock index of the document sections for searching
  const documentIndex = [
    { id: '1-executive-summary', title: 'Executive Summary', category: 'Overview' },
    { id: '2-architecture-deep-dive', title: 'Architecture Deep-Dive', category: 'Overview' },
    { id: '3-api-reference', title: 'API Reference', category: 'Overview' },
    { id: '4-getting-started-usage', title: 'Getting Started', category: 'Guides' },
    { id: '5-security-performance', title: 'Security & Performance', category: 'Guides' },
    { id: '6-contribution-guide', title: 'Contribution Guide', category: 'Guides' },
  ];

  const runCommand = (id: string) => {
    setOpen(false);
    // Smooth scroll if we are already on the page, or navigate if we aren't
    if (window.location.pathname.includes('/read')) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(`/docs-preview/read#${id}`);
      }
    } else {
      router.push(`/docs-preview/read#${id}`);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-gray-900/50 backdrop-blur-sm">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={() => setOpen(false)} />
      
      <Command 
        className="relative z-10 w-full max-w-2xl bg-white dark:bg-[#1A1F2E] rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col font-sans"
        shouldFilter={true}
      >
        <div className="flex items-center px-4 py-3 border-b border-gray-100 dark:border-gray-800">
          <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
          <Command.Input 
            autoFocus
            placeholder="Search documentation sections..." 
            className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 text-lg"
          />
          <div className="text-xs text-gray-400 font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">ESC</div>
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2 scroll-smooth custom-scrollbar">
          <Command.Empty className="py-12 text-center text-sm text-gray-500">
            No results found.
          </Command.Empty>

          <Command.Group heading="Overview" className="text-xs font-semibold text-gray-500 px-2 py-2 mb-1">
            {documentIndex.filter(d => d.category === 'Overview').map((item) => (
              <Command.Item 
                key={item.id} 
                onSelect={() => runCommand(item.id)}
                className="flex items-center gap-3 px-3 py-3 text-sm text-gray-700 dark:text-gray-300 rounded-lg cursor-pointer aria-selected:bg-primary/10 dark:aria-selected:bg-primary/20 aria-selected:text-primary dark:aria-selected:text-primary/80 group"
              >
                <FileText className="w-4 h-4 text-gray-400 group-aria-selected:text-primary" />
                {item.title}
                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-aria-selected:opacity-100 transition-opacity" />
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Guides" className="text-xs font-semibold text-gray-500 px-2 py-2 mb-1">
            {documentIndex.filter(d => d.category === 'Guides').map((item) => (
              <Command.Item 
                key={item.id} 
                onSelect={() => runCommand(item.id)}
                className="flex items-center gap-3 px-3 py-3 text-sm text-gray-700 dark:text-gray-300 rounded-lg cursor-pointer aria-selected:bg-primary/10 dark:aria-selected:bg-primary/20 aria-selected:text-primary dark:aria-selected:text-primary/80 group"
              >
                <FileText className="w-4 h-4 text-gray-400 group-aria-selected:text-primary" />
                {item.title}
                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-aria-selected:opacity-100 transition-opacity" />
              </Command.Item>
            ))}
          </Command.Group>

        </Command.List>
      </Command>
    </div>
  );
}
