import fs from 'fs/promises';
import path from 'path';
import MDXViewer from '@/components/MDXViewer';
import DocsLayout from '@/components/DocsLayout';

export default async function ReadDocsPage() {
  // Read the MDX file from the public folder
  let mdxContent = '';
  try {
    // Use an absolute path to ensure we hit the correct public folder
    const filePath = path.join(process.cwd(), 'public', 'output.mdx');
    mdxContent = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return (
      <div className="p-10 text-red-500 bg-red-50 rounded-xl border border-red-200">
        <h2 className="text-xl font-bold mb-2">Failed to load Documentation</h2>
        <p>Could not find <code>public/output.mdx</code>. Please ensure the file exists in your <code>my-app/public</code> folder.</p>
      </div>
    );
  }

  return (
    <DocsLayout>
      <div className="max-w-4xl">
        <MDXViewer source={mdxContent} />
      </div>
    </DocsLayout>
  );
}
