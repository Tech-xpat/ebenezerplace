import { createFileRoute } from "@tanstack/react-router";
import BookReaderPage from "@/house/pages/books/BookReaderPage";
import { pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/books/$id")({
  head: () => pageHead("Reading | Ebenezer's Place", "Read a book from Ebenezer's Place International Ministry."),
  component: BookReaderPage,
});
