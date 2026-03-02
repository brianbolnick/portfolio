import { logout } from "~/server/auth.server";
import type { Route } from "./+types/admin.logout";

export async function action({ request }: Route.ActionArgs) {
  return logout(request);
}

export async function loader() {
  return new Response(null, { status: 405 });
}
