import type { ComponentType } from "react";

export interface ArticleMeta {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags?: string[];
  published: boolean;
  readingTime?: string;
}

export interface ArticleEntry {
  meta: ArticleMeta;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  load: () => Promise<{ default: ComponentType<any> }>;
}

export const articles: ArticleEntry[] = [
  {
    meta: {
      title: "We're Trying to Build a Brain for Our Company",
      slug: "digital-agents-ai-enablement",
      date: "2026-02-19",
      description:
        "An experiment in using AI agents to capture institutional knowledge at a 17-person startup before it breaks at 30.",
      tags: ["ai", "agents", "product", "startups"],
      published: false,
      readingTime: "~7 min read",
    },
    load: () => import("~/content/digital-agents-ai-enablement.mdx"),
  },
];

export function getPublishedArticles(): ArticleEntry[] {
  return articles.filter((a) => a.meta.published);
}

export function getArticleBySlug(slug: string): ArticleEntry | undefined {
  return articles.find((a) => a.meta.slug === slug && a.meta.published);
}

export function formatArticleDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
