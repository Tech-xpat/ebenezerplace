import { createFileRoute } from "@tanstack/react-router";
import App from "@/house/App";
import { SITE, pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Ebenezer's Place — Ebenezer's Place International Ministry",
      SITE.description,
    ),
  component: App,
});
