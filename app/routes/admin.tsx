import { Link, Outlet, Form, useLocation } from "react-router";
import { requireAuth } from "~/server/auth.server";
import type { Route } from "./+types/admin";
import { cn } from "~/lib/cn";

export async function loader({ request }: Route.LoaderArgs) {
  await requireAuth(request);
  return null;
}

const navItems = [
  { label: "Articles", href: "/admin/articles" },
];

export default function AdminLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-border bg-surface-secondary">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              to="/admin/articles"
              className="font-display font-bold text-text-primary"
            >
              Admin
            </Link>
            <nav className="flex items-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm transition-colors duration-200",
                    location.pathname.startsWith(item.href)
                      ? "text-accent font-medium"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm text-text-tertiary hover:text-text-secondary transition-colors duration-200"
            >
              View Site
            </Link>
            <Form method="post" action="/admin/logout">
              <button
                type="submit"
                className="text-sm text-text-tertiary hover:text-text-secondary transition-colors duration-200"
              >
                Logout
              </button>
            </Form>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
