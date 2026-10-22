import { createFileRoute } from "@tanstack/react-router";
import GalleryPage from "@/house/pages/gallery/GalleryPage";
import { pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/gallery")({
  head: () => pageHead("Gallery | Ebenezer's Place", "Photos and moments from Ebenezer's Place International Ministry. New gallery items publish from the church admin."),
  component: GalleryPage,
});
