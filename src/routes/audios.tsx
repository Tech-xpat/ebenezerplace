import { createFileRoute } from "@tanstack/react-router";
import AudiosPage from "@/house/pages/audios/AudiosPage";
import { pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/audios")({
  head: () => pageHead("Audio | Ebenezer's Place", "Gospel audio from Ebenezer's Place International Ministry, published from the church admin."),
  component: AudiosPage,
});
