import { useState } from "react";
import { Form } from "react-router";
import { RichTextEditor } from "~/components/admin/RichTextEditor";

interface ArticleFormProps {
  defaultValues?: {
    title: string;
    slug: string;
    description: string;
    content: string;
    tags: string;
    published: boolean;
    reading_time: string;
  };
  error?: string;
}

export function ArticleForm({ defaultValues, error }: ArticleFormProps) {
  const [title, setTitle] = useState(defaultValues?.title ?? "");
  const [slug, setSlug] = useState(defaultValues?.slug ?? "");
  const [markdownContent, setMarkdownContent] = useState(
    defaultValues?.content ?? ""
  );

  function generateSlug(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!defaultValues) {
      setSlug(generateSlug(value));
    }
  }

  return (
    <Form method="post" className="space-y-6">
      <input type="hidden" name="_action" value="save" />

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-600 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-text-secondary mb-1"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full px-3 py-2 bg-surface-secondary border border-border rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="slug"
            className="block text-sm font-medium text-text-secondary mb-1"
          >
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full px-3 py-2 bg-surface-secondary border border-border rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-mono text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-text-secondary mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={2}
          defaultValue={defaultValues?.description ?? ""}
          className="w-full px-3 py-2 bg-surface-secondary border border-border rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-text-secondary mb-1"
          >
            Tags{" "}
            <span className="text-text-tertiary font-normal">
              (comma-separated)
            </span>
          </label>
          <input
            id="tags"
            name="tags"
            type="text"
            defaultValue={defaultValues?.tags ?? ""}
            className="w-full px-3 py-2 bg-surface-secondary border border-border rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="ai, product, startups"
          />
        </div>
        <div>
          <label
            htmlFor="reading_time"
            className="block text-sm font-medium text-text-secondary mb-1"
          >
            Reading Time
          </label>
          <input
            id="reading_time"
            name="reading_time"
            type="text"
            defaultValue={defaultValues?.reading_time ?? ""}
            className="w-full px-3 py-2 bg-surface-secondary border border-border rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="~5 min read"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1">
          Content
        </label>
        <input type="hidden" name="content" value={markdownContent} />
        <RichTextEditor
          initialContent={defaultValues?.content ?? ""}
          onChange={setMarkdownContent}
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          id="published"
          name="published"
          type="checkbox"
          defaultChecked={defaultValues?.published ?? false}
          className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
        />
        <label
          htmlFor="published"
          className="text-sm font-medium text-text-secondary"
        >
          Published
        </label>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <button
          type="submit"
          className="px-6 py-2 bg-accent text-white font-medium rounded-lg hover:bg-accent-deep transition-colors duration-200"
        >
          Save Article
        </button>
        <a
          href="/admin/articles"
          className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
        >
          Cancel
        </a>
      </div>
    </Form>
  );
}
