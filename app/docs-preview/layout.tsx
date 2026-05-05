import fs from 'fs/promises';
import path from 'path';
import React from 'react';

export default async function DocsPreviewLayout({ children }: { children: React.ReactNode }) {
  // Read the dynamic theme configuration
  let config: any = { theme: { primary: '#3b82f6' } }; // Default blue fallback
  
  try {
    const configPath = path.join(process.cwd(), 'shipquill.json');
    const rawConfig = await fs.readFile(configPath, 'utf8');
    config = JSON.parse(rawConfig);
  } catch (e) {
    console.error('Failed to read shipquill.json');
  }

  return (
    // Inject the primary color as a CSS variable globally for this route
    <div style={{ '--color-primary': config.theme?.primary } as React.CSSProperties}>
      {children}
    </div>
  );
}
