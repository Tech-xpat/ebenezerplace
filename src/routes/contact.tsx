import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/house/pages/contact/ContactPage";
import { pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact | Ebenezer's Place", "Visit Ebenezer's Place International Ministry at No. 72 Market Road, opposite Voke Filling Station, along Zenith Bank, Ughelli, Delta State."),
  component: ContactPage,
});
