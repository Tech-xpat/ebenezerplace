import { createFileRoute } from "@tanstack/react-router";
import GivePage from "@/house/pages/give/GivePage";
import { pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/give")({
  head: () => pageHead("Give | Ebenezer's Place International Ministry", "Partner with Ebenezer's Place International Ministry, Ughelli."),
  component: GivePage,
});
