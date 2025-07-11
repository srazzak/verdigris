import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout.tsx", [
    index("routes/today.tsx"),
    route("later", "routes/later.tsx"),
  ]),
] satisfies RouteConfig;
