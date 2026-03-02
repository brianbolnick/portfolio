import { Link } from "react-router";
import { motion } from "framer-motion";
import { GlowCard } from "~/components/ui/GlowCard";
import { formatArticleDate, type ArticleMeta } from "~/data/articles";

interface ArticleCardProps {
  meta: ArticleMeta;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ArticleCard({ meta }: ArticleCardProps) {
  return (
    <motion.div variants={cardVariants}>
      <Link to={`/thoughts/${meta.slug}`} className="block">
        <GlowCard className="h-full">
          <div className="flex items-center gap-3 text-xs font-mono text-text-tertiary mb-3">
            <time dateTime={meta.date}>{formatArticleDate(meta.date)}</time>
            {meta.readingTime && (
              <>
                <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                <span>{meta.readingTime}</span>
              </>
            )}
          </div>
          <h3 className="font-display text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
            {meta.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {meta.description}
          </p>
          {meta.tags && meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent-muted text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </GlowCard>
      </Link>
    </motion.div>
  );
}
