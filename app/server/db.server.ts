import { sql } from "@vercel/postgres";

export interface DBArticle {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  published: boolean;
  reading_time: string | null;
  created_at: Date;
  updated_at: Date;
}

export async function getPublishedArticles(): Promise<DBArticle[]> {
  const { rows } = await sql<DBArticle>`
    SELECT * FROM articles
    WHERE published = true
    ORDER BY created_at DESC
  `;
  return rows;
}

export async function getAllArticles(): Promise<DBArticle[]> {
  const { rows } = await sql<DBArticle>`
    SELECT * FROM articles
    ORDER BY created_at DESC
  `;
  return rows;
}

export async function getArticleById(id: number): Promise<DBArticle | null> {
  const { rows } = await sql<DBArticle>`
    SELECT * FROM articles WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

export async function getArticleBySlug(
  slug: string
): Promise<DBArticle | null> {
  const { rows } = await sql<DBArticle>`
    SELECT * FROM articles WHERE slug = ${slug} AND published = true
  `;
  return rows[0] ?? null;
}

export async function createArticle(data: {
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: string[];
  published: boolean;
  reading_time: string | null;
}): Promise<DBArticle> {
  const { rows } = await sql<DBArticle>`
    INSERT INTO articles (title, slug, description, content, tags, published, reading_time)
    VALUES (${data.title}, ${data.slug}, ${data.description}, ${data.content}, ${data.tags as unknown as string}, ${data.published}, ${data.reading_time})
    RETURNING *
  `;
  return rows[0];
}

export async function updateArticle(
  id: number,
  data: {
    title: string;
    slug: string;
    description: string;
    content: string;
    tags: string[];
    published: boolean;
    reading_time: string | null;
  }
): Promise<DBArticle> {
  const { rows } = await sql<DBArticle>`
    UPDATE articles
    SET title = ${data.title},
        slug = ${data.slug},
        description = ${data.description},
        content = ${data.content},
        tags = ${data.tags as unknown as string},
        published = ${data.published},
        reading_time = ${data.reading_time},
        updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `;
  return rows[0];
}

export async function deleteArticle(id: number): Promise<void> {
  await sql`DELETE FROM articles WHERE id = ${id}`;
}
