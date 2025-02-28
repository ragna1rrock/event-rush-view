import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/layout.tsx", [
    index("pages/home.tsx"),
    route("login", "pages/login.tsx")
  ])
] satisfies RouteConfig;
