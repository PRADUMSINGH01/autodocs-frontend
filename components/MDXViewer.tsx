import { MDXRemote } from 'next-mdx-remote/rsc'
import CodeBlock from './CodeBlock'

// Helper to generate IDs from heading text
const generateId = (children: any) => {
  if (typeof children === 'string') {
    return children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }
  if (Array.isArray(children)) {
    return children.join('').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }
  return '';
};

// 1. Define custom components that might be used in the MDX (like Nextra components)
const components = {
  // Map the Callout component used by the AI
  Callout: (props: any) => {
    const types: Record<string, any> = {
      info: { bg: 'bg-blue-500/10', border: 'border-blue-500', text: 'text-blue-500', icon: 'ℹ️' },
      warning: { bg: 'bg-amber-500/10', border: 'border-amber-500', text: 'text-amber-500', icon: '⚠️' },
      error: { bg: 'bg-red-500/10', border: 'border-red-500', text: 'text-red-500', icon: '🚫' },
      success: { bg: 'bg-emerald-500/10', border: 'border-emerald-500', text: 'text-emerald-500', icon: '✅' },
    };
    const style = types[props.type || 'info'] || types.info;
    return (
      <div className={`${style.bg} border-l-4 ${style.border} p-4 my-6 rounded-r-xl transition-all hover:shadow-md`}>
        <div className={`flex items-center gap-2 font-bold uppercase tracking-wider text-xs ${style.text}`}>
          {props.emoji || style.icon} {props.type || 'Info'}
        </div>
        <div className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {props.children}
        </div>
      </div>
    );
  },
  // Steps component for process documentation
  Steps: (props: any) => (
    <div className="steps-container ml-4 border-l border-gray-200 dark:border-gray-800 pl-8 my-8 space-y-8">
      {props.children}
    </div>
  ),
  // Card & CardGroup for feature grids
  CardGroup: (props: any) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {props.children}
    </div>
  ),
  Card: (props: any) => (
    <div className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer">
      <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{props.title}</h4>
      <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {props.children}
      </div>
    </div>
  ),
  // Mermaid support
  Mermaid: (props: any) => (
    <div className="my-8 flex justify-center bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
      <pre className="mermaid text-sm opacity-80">{props.chart}</pre>
    </div>
  ),
  // Override standard HTML elements for premium typography and add IDs for linking
  h1: (props: any) => <h1 id={generateId(props.children)} className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 border-b pb-4 dark:border-gray-800 scroll-mt-24" {...props} />,
  h2: (props: any) => <h2 id={generateId(props.children)} className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-12 mb-4 border-b pb-2 dark:border-gray-800 scroll-mt-24" {...props} />,
  h3: (props: any) => <h3 id={generateId(props.children)} className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-8 mb-4 scroll-mt-24" {...props} />,
  a: (props: any) => <a className="text-primary hover:text-accent font-medium underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4" {...props} />,
  
  // Custom Code Block mapping
  pre: (props: any) => {
    // Extract the nested <code> element's props
    const codeProps = props.children?.props || {};
    const codeString = codeProps.children || '';
    const className = codeProps.className || '';
    return <CodeBlock className={className}>{codeString}</CodeBlock>;
  },
  
  code: (props: any) => {
    // We only style inline code here. Block code is handled by 'pre' above.
    if (props.className?.includes('language-')) return <code {...props} />;
    return <code className="font-mono text-sm text-primary dark:text-primary/80 bg-primary/10 dark:bg-primary-900/30 px-1.5 py-0.5 rounded-md" {...props} />;
  },
  
  p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-600 dark:text-gray-300" {...props} />,
  ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-gray-600 dark:text-gray-300" {...props} />,
  li: (props: any) => <li className="leading-7" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-gray-900 dark:text-white" {...props} />,
}

export default function MDXViewer({ source }: { source: string }) {
  // Strip import statements if the AI hallucinates them (like Nextra imports)
  const cleanSource = source.replace(/import\s+.*?from\s+['"].*?['"];?\n?/g, '');

  return (
    // The 'prose' class automatically applies beautiful typographic defaults
    <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20">
      <MDXRemote source={cleanSource} components={components} />
    </article>
  )
}
