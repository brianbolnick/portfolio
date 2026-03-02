import { redirect, useLoaderData, useActionData } from "react-router";
import { ArticleForm } from "~/components/admin/ArticleForm";
import {
  getArticleById,
  updateArticle,
  deleteArticle,
} from "~/server/db.server";
import type { Route } from "./+types/admin.articles.$id";

export async function loader({ params }: Route.LoaderArgs) {
  const id = Number(params.id);
  if (isNaN(id)) throw new Response("Invalid ID", { status: 400 });

  const article = await getArticleById(id);
  if (!article) throw new Response("Not found", { status: 404 });

  return { article };
}

export async function action({ request, params }: Route.ActionArgs) {
  const id = Number(params.id);
  if (isNaN(id)) throw new Response("Invalid ID", { status: 400 });

  const formData = await request.formData();
  const actionType = formData.get("_action");

  if (actionType === "delete") {
    await deleteArticle(id);
    return redirect("/admin/articles");
  }

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
    await updateArticle(id, {
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
      error instanceof Error ? error.message : "Failed to update article";
    return { error: message };
  }
}

export default function EditArticle() {
  const { article } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-text-primary mb-8">
        Edit Article
      </h1>
      <ArticleForm
        defaultValues={{
          title: article.title,
          slug: article.slug,
          description: article.description,
          content: article.content,
          tags: article.tags?.join(", ") ?? "",
          published: article.published,
          reading_time: article.reading_time ?? "",
        }}
        error={actionData && "error" in actionData ? actionData.error : undefined}
      />
    </div>
  );
}
