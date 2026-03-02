import { redirect, useActionData } from "react-router";
import { ArticleForm } from "~/components/admin/ArticleForm";
import { createArticle } from "~/server/db.server";
import type { Route } from "./+types/admin.articles.new";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const tags = (formData.get("tags") as string)
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const published = formData.get("published") === "on";
  const reading_time = (formData.get("reading_time") as string) || null;

  try {
    await createArticle({
      title,
      slug,
      description,
      content,
      tags,
      published,
      reading_time,
    });
    return redirect("/admin/articles");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create article";
    return { error: message };
  }
}

export default function NewArticle() {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-text-primary mb-8">
        New Article
      </h1>
      <ArticleForm
        error={actionData && "error" in actionData ? actionData.error : undefined}
      />
    </div>
  );
}
