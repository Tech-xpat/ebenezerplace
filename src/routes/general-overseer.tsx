import { createFileRoute } from "@tanstack/react-router";
import GeneralOverseerPage from "@/house/pages/general-overseer/GeneralOverseerPage";
import { SITE, pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/general-overseer")({
  head: () => pageHead(`${SITE.leader.name} | General Overseer, ${SITE.short}`, `${SITE.leader.name} is General Overseer of Ebenezer's Place International Ministry, Ughelli.`),
  component: GeneralOverseerPage,
});
