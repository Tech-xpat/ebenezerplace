import { createFileRoute } from "@tanstack/react-router";
import NotFoundPage from "@/house/pages/NotFoundPage";
import { pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/$")({
  head: () => pageHead("Page not found | Ebenezer's Place", "That page is not on Ebenezer's Place International Ministry."),
  component: NotFoundPage,
});
