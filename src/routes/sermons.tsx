import { createFileRoute } from "@tanstack/react-router";
import SermonsPage from "@/house/pages/sermons/SermonsPage";
import { pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/sermons")({
  head: () => pageHead("Sermons | Ebenezer's Place", "Sermons from Pastor Everest Chinakweze and Ebenezer's Place International Ministry."),
  component: SermonsPage,
});
