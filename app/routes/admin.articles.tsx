import { Link, useLoaderData, Form } from "react-router";
import { getAllArticles } from "~/server/db.server";
import type { Route } from "./+types/admin.articles";
import { formatArticleDate } from "~/data/articles";

export async function loader({}: Route.LoaderArgs) {
  const articles = await getAllArticles();
  return { articles };
}

export default function AdminArticles() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-2xl font-bold text-text-primary">
          Articles
        </h1>
        <Link
          to="/admin/articles/new"
          className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-deep transition-colors duration-200"
        >
          New Article
        </Link>
      </div>

      {articles.length === 0 ? (
        <div className="border border-border rounded-xl p-12 text-center">
          <p className="text-text-tertiary">No articles yet.</p>
          <Link
            to="/admin/articles/new"
            className="text-accent hover:text-accent-deep text-sm mt-2 inline-block"
          >
            Create your first article
          </Link>
        </div>
      ) : (
        <div className="border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-secondary">
                <th className="text-left px-4 py-3 text-xs font-mono font-medium text-text-tertiary uppercase tracking-wider">
                  Title
                </th>
                <th className="text-left px-4 py-3 text-xs font-mono font-medium text-text-tertiary uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-4 py-3 text-xs font-mono font-medium text-text-tertiary uppercase tracking-wider">
                  Date
                </th>
                <th className="text-right px-4 py-3 text-xs font-mono font-medium text-text-tertiary uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr
                  key={article.id}
                  className="border-b border-border last:border-b-0 hover:bg-surface-secondary/50 transition-colors duration-150"
                >
                  <td className="px-4 py-3">
                    <Link
                      to={`/admin/articles/${article.id}`}
                      className="text-text-primary hover:text-accent font-medium transition-colors duration-200"
                    >
                      {article.title}
                    </Link>
                    <p className="text-text-tertiary text-xs mt-0.5 truncate max-w-md">
                      {article.description}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono",
                        article.published
                          ? "bg-green-500/10 text-green-600 dark:text-green-400"
                          : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                      )}
                    >
                      {article.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-text-tertiary font-mono">
                    {formatArticleDate(
                      new Date(article.created_at).toISOString().split("T")[0]
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/admin/articles/${article.id}`}
                        className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                      >
                        Edit
                      </Link>
                      <Form
                        method="post"
                        action={`/admin/articles/${article.id}`}
                        onSubmit={(e) => {
                          if (!confirm("Delete this article?")) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <input type="hidden" name="_action" value="delete" />
                        <button
                          type="submit"
                          className="text-sm text-red-500 hover:text-red-600 transition-colors duration-200"
                        >
                          Delete
                        </button>
                      </Form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
