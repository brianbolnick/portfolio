import { Form, useActionData, redirect } from "react-router";
import { getSession, login } from "~/server/auth.server";
import type { Route } from "./+types/admin.login";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request);
  if (session.get("authenticated")) {
    throw redirect("/admin/articles");
  }
  return null;
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const password = formData.get("password");

  if (typeof password !== "string" || !password) {
    return { error: "Password is required" };
  }

  return login(request, password);
}

export default function AdminLogin() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="font-display text-2xl font-bold text-text-primary mb-2">
          Admin Login
        </h1>
        <p className="text-text-tertiary text-sm mb-8">
          Enter your password to continue.
        </p>

        <Form method="post" className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-text-secondary mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 bg-surface-secondary border border-border rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Enter password"
            />
          </div>

          {actionData && "error" in actionData && (
            <p className="text-red-500 text-sm">{actionData.error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-accent text-white font-medium rounded-lg hover:bg-accent-deep transition-colors duration-200"
          >
            Sign In
          </button>
        </Form>
      </div>
    </div>
  );
}
