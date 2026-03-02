import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children, ...props }) => (
    <h2
      className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-12 mb-4"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="font-display text-xl md:text-2xl font-semibold text-text-primary mt-10 mb-3"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="text-text-secondary leading-relaxed mb-6" {...props}>
      {children}
    </p>
  ),
  a: ({ children, ...props }) => (
    <a
      className="text-accent hover:text-accent-deep underline underline-offset-2 transition-colors duration-200"
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-2 border-accent pl-6 my-6 italic text-text-secondary"
      {...props}
    >
      {children}
    </blockquote>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="list-disc list-outside ml-6 mb-6 space-y-2 text-text-secondary leading-relaxed"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal list-outside ml-6 mb-6 space-y-2 text-text-secondary leading-relaxed"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="pl-1" {...props}>
      {children}
    </li>
  ),
  code: ({ children, className, ...props }) => {
    // Inline code (no language class) vs code blocks (has language class from remark)
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className="font-mono text-sm bg-surface-secondary px-1.5 py-0.5 rounded border border-border"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }) => (
    <pre
      className="font-mono text-sm bg-surface-secondary border border-border rounded-lg p-4 overflow-x-auto mb-6"
      {...props}
    >
      {children}
    </pre>
  ),
  hr: ({ ...props }) => <hr className="border-border my-10" {...props} />,
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-text-primary" {...props}>
      {children}
    </strong>
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto mb-6">
      <table
        className="w-full border-collapse border border-border"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border border-border bg-surface-secondary px-3 py-2 text-left text-sm font-semibold text-text-primary"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      className="border border-border px-3 py-2 text-sm text-text-secondary"
      {...props}
    >
      {children}
    </td>
  ),
};

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </Markdown>
  );
}
