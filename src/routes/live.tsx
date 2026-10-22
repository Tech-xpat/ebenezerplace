import { createFileRoute } from "@tanstack/react-router";
import LivePage from "@/house/pages/live/LivePage";
import { pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/live")({
  head: () => pageHead("Watch Live | Ebenezer's Place", "Thursday Encounter Service, 6:00 PM WAT, Ebenezer's Place International Ministry, Ughelli."),
  component: LivePage,
});
