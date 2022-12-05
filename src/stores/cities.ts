import { defineStore } from "pinia";
import { cities } from "./datasets";

interface CitiesStoreState {
  allItems: string[];
  searchQuery: string | null;
  filteredItems: string[] | null;
}

export const useCities = defineStore("cities", {
  state: (): CitiesStoreState => ({
    allItems: cities,
    searchQuery: null,
    filteredItems: [],
  }),
  actions: {
    search(query: string) {
      const results = this.$state.allItems.filter((city) =>
        city.toLowerCase().includes(query.toLowerCase())
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
