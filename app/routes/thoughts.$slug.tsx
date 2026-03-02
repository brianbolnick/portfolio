import { Suspense, lazy, useMemo } from "react";
import { useLoaderData } from "react-router";
import {
  getArticleBySlug as getStaticArticle,
  type ArticleMeta,
} from "~/data/articles";
import { getArticleBySlug as getDBArticle } from "~/server/db.server";
import { ArticleLayout } from "~/components/writing/ArticleLayout";
import { MarkdownRenderer } from "~/components/writing/MarkdownRenderer";
import { mdxComponents } from "~/components/writing/mdx-components";
import type { Route } from "./+types/thoughts.$slug";

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params;

  // Try DB first
  try {
    const dbArticle = await getDBArticle(slug);
    if (dbArticle) {
      return {
        source: "db" as const,
        meta: {
          title: dbArticle.title,
          slug: dbArticle.slug,
          date: new Date(dbArticle.created_at).toISOString().split("T")[0],
          description: dbArticle.description,
          tags: dbArticle.tags,
          published: true,
          readingTime: dbArticle.reading_time ?? undefined,
        },
        content: dbArticle.content,
      };
    }
  } catch {
    // DB not available — try static
  }

  // Fall back to static articles
  const staticArticle = getStaticArticle(slug);
  if (staticArticle) {
    return {
      source: "static" as const,
      meta: staticArticle.meta,
      content: null,
    };
  }

  throw new Response("Not found", { status: 404 });
}

export default function ArticlePage() {
  const data = useLoaderData<typeof loader>();

  if (data.source === "db") {
    return (
      <ArticleLayout meta={data.meta as ArticleMeta}>
        <MarkdownRenderer content={data.content!} />
      </ArticleLayout>
    );
  }

  // Static MDX article — lazy load the component
  return <StaticArticle meta={data.meta as ArticleMeta} />;
}

function StaticArticle({ meta }: { meta: ArticleMeta }) {
  const staticArticle = getStaticArticle(meta.slug);

  const Content = useMemo(() => {
    if (!staticArticle) return null;
    return lazy(staticArticle.load);
  }, [staticArticle]);

  if (!Content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-text-tertiary font-mono">Article not found.</p>
      </div>
    );
  }

  return (
    <ArticleLayout meta={meta}>
      <Suspense
        fallback={
          <div className="text-text-tertiary font-mono text-sm">
            Loading...
          </div>
        }
      >
        <Content components={mdxComponents} />
      </Suspense>
    </ArticleLayout>
  );
}
