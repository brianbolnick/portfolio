import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("v1", "routes/v1.tsx"),
  route("v2", "routes/v2.tsx"),
  route("v3", "routes/v3.tsx"),
  route("v4", "routes/v4.tsx"),
  route("v5", "routes/v5.tsx"),
  route("v6", "routes/v6.tsx"),
  route("journal", "routes/journal.tsx"),
  route("thoughts", "routes/thoughts.tsx"),
] satisfies RouteConfig;
