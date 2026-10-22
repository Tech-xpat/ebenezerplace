import { createFileRoute } from "@tanstack/react-router";
import BooksPage from "@/house/pages/books/BooksPage";
import { pageHead } from "@/lib/ministry";

export const Route = createFileRoute("/books/")({
  head: () => pageHead("Books | Ebenezer's Place", "Books and tracts from Ebenezer's Place International Ministry."),
  component: BooksPage,
});
