import fs from 'fs/promises';
import path from 'path';
import MDXViewer from '@/components/MDXViewer';
import DocsLayout from '@/components/DocsLayout';

export default async function ReadDocsPage() {
  // Read the MDX file from the public folder
  let mdxContent = '';
  try {
    const filePath = path.join(process.cwd(), 'public', 'express-js-docs.mdx');
    mdxContent = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    return <div className="p-10 text-red-500">Error loading express-js-docs.mdx from public folder.</div>;
  }

  return (
    <DocsLayout>
      <div className="max-w-4xl">
        <MDXViewer source={mdxContent} />
      </div>
    </DocsLayout>
  );
}
