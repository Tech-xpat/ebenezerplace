import { createFileRoute } from "@tanstack/react-router";
import MinistriesPage from "@/house/pages/ministries/MinistriesPage";
import { pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/ministries")({
  head: () => pageHead("Ministries | Ebenezer's Place", "Worship, prayer, youth, women, men, and children at Ebenezer's Place International Ministry, Ughelli."),
  component: MinistriesPage,
});
