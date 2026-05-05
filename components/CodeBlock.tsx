"use client";

import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Check, Copy } from 'lucide-react';

export default function CodeBlock({ children, className }: { children: string, className?: string }) {
  const [copied, setCopied] = useState(false);

  // Extract language from className (e.g., "language-javascript")
  const language = className ? className.replace(/language-/, '') : 'text';

  const onCopy = () => {
    navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6 rounded-xl overflow-hidden bg-[#1E1E1E] border border-gray-800">
      {/* Top Bar with Language Label and Copy Button */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#2D2D2D] text-gray-400 text-xs font-sans border-b border-gray-800">
        <span className="uppercase tracking-wider font-semibold">{language}</span>
        <button 
          onClick={onCopy}
          className="hover:text-white transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Code Area */}
      <Highlight
        theme={themes.vsDark}
        code={children.trim()}
        language={language as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`p-4 overflow-x-auto text-sm font-mono custom-scrollbar ${className}`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
