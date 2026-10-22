import { createFileRoute } from "@tanstack/react-router";
import AdminPage from "@/house/pages/AdminPage";
import { pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/admin")({
  head: () => pageHead("Admin | Ebenezer's Place", "Media admin for Ebenezer's Place International Ministry."),
  component: AdminPage,
});
