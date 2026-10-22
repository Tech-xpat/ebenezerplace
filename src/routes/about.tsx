import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/house/pages/about/AboutPage";
import { SITE, pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/about")({
  head: () => pageHead(`About ${SITE.name}`, `About Ebenezer's Place International Ministry, led by ${SITE.leader.name}, at No. 72 Market Road, Ughelli.`),
  component: AboutPage,
});
