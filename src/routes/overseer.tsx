import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/overseer")({
  beforeLoad: () => {
    throw redirect({ to: "/general-overseer" });
  },
});
