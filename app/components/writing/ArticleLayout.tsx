import { Link } from "react-router";
import { motion } from "framer-motion";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { formatArticleDate, type ArticleMeta } from "~/data/articles";

interface ArticleLayoutProps {
  meta: ArticleMeta;
  children: React.ReactNode;
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ArticleLayout({ meta, children }: ArticleLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 px-6">
        <article className="max-w-3xl mx-auto py-16">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Link
                to="/thoughts"
                className="inline-flex items-center gap-2 text-sm font-mono text-text-tertiary hover:text-accent transition-colors duration-200 mb-10"
              >
                <span>&larr;</span>
                <span>Back to all posts</span>
              </Link>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-hero text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6 leading-[1.1]"
            >
              {meta.title}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 text-sm font-mono text-text-tertiary mb-4"
            >
              <time dateTime={meta.date}>{formatArticleDate(meta.date)}</time>
              {meta.readingTime && (
                <>
                  <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                  <span>{meta.readingTime}</span>
                </>
              )}
            </motion.div>

            {meta.tags && meta.tags.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2 mb-10"
              >
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent-muted text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.div variants={itemVariants}>
              <div className="w-full h-px bg-border mb-10" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose"
          >
            {children}
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
}
