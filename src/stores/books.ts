import { defineStore } from "pinia";
import { books } from "./datasets";
import type { Book } from "./datasets";

interface BooksStoreState {
  allItems: Book[];
  searchQuery: string | null;
  filteredItems: Book[] | null;
}

export const useBooks = defineStore("books", {
  state: (): BooksStoreState => ({
    allItems: books,
    searchQuery: null,
    filteredItems: [],
  }),
  actions: {
    search(query: string) {
      const results = this.$state.allItems.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      this.$state.filteredItems = results;
      this.$state.searchQuery = query;
    },
    reset() {
      this.$state.filteredItems = null;
      this.$state.searchQuery = null;
    },
  },
});
