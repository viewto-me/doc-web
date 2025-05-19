
// src/app/docs/[...slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MainLayout } from '@/components/layout/main-layout';
import { findPageByPath, type DocPage, documentationTree } from '@/lib/documentation'; // Added documentationTree here
// Removed Card imports as they are not used in the new design directly for page content

interface DocPageProps {
  params: {
    slug: string[];
  };
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const path = `/docs/${params.slug.join('/')}`;
  const page = findPageByPath(path);

  if (!page) {
    return {
      title: 'Página Não Encontrada',
    };
  }

  return {
    title: `${page.title} | viewto.me API Docs`,
    description: `Documentação para ${page.title} na API viewto.me.`,
  };
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];
  const processedPages: DocPage[] = []; // To avoid processing children multiple times if structure is complex

  function collectPaths(pages: DocPage[], basePath: string[] = []) {
    for (const page of pages) {
      if (processedPages.find(p => p.id === page.id)) continue; // Avoid infinite loops with circular refs if any
      processedPages.push(page);

      const pathSegments = page.path.split('/').filter(s => s && s !== 'docs');
      paths.push({ slug: pathSegments });
      if (page.children) {
        collectPaths(page.children, pathSegments); // Pass current path segments for nested logic
      }
    }
  }

  collectPaths(documentationTree);
  return paths;
}


export default function DocumentationPage({ params }: DocPageProps) {
  const path = `/docs/${params.slug.join('/')}`;
  const page = findPageByPath(path);

  if (!page) {
    notFound();
  }

  // page.mainContent and page.codeContent are already functions returning ReactNode due to findPageByPath
  const MainContent = page.mainContent;
  const CodeContent = page.codeContent;

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-8 w-full">
        {/* Left Column: Main Prose Content */}
        <div className="w-full lg:w-3/5 xl:w-2/3 flex-shrink-0">
          <article className="prose prose-sm dark:prose-invert max-w-none">
            {page.categoryTitle && (
              <span className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                {page.categoryTitle}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold !text-foreground mb-6 pb-2 border-b border-border">
              {page.title}
            </h1>
            <MainContent />
          </article>
        </div>

        {/* Right Column: Code Examples, Tables etc. */}
        {CodeContent && (
          <div className="w-full lg:w-2/5 xl:w-1/3 lg:flex-shrink-0">
            <aside className="lg:sticky lg:top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
              {/* prose-sm dark:prose-invert for consistent styling if CodeContent has HTML */}
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <CodeContent />
              </div>
            </aside>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
