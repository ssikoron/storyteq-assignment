<script lang="ts" setup>
import { computed, reactive, watchEffect } from "vue";
import AutocompleteInput from "@/components/AutocompleteInput.vue";
import { useBooks } from "@/stores/books";

const state = reactive({
  searchQuery: "",
});

const store = useBooks();

const isSearching = computed(() => {
  return state.searchQuery.length >= 3;
});

const hasResults = computed(() => {
  return store.filteredItems && store.filteredItems.length > 0;
});

watchEffect(() => {
  if (state.searchQuery.length >= 3) {
    store.search(state.searchQuery);
  } else {
    store.reset();
  }
});
</script>

<template>
  <AutocompleteInput v-model="state.searchQuery">
    <ul v-if="hasResults" class="divide-y divide-slate-200 px-2">
      <li
        v-for="book of store.filteredItems"
        :key="book.title"
        class="cursor-pointer px-2 py-2 last-of-type:border-0 hover:bg-slate-100"
      >
        <div class="inline-flex items-center">
          <img
            src="@/assets/icons/book.svg"
            style="height: 22px"
            class="mx-2"
            alt="Book Icon"
          />
          <div class="ml-2">
            <div class="text-md font-normal">
              {{ book.title }}
            </div>
            <div class="text-sm font-light text-gray-400">
              {{ book.author }}
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div
      v-else-if="isSearching && !hasResults"
      class="flex items-center justify-center"
    >
      <div class="col-auto my-10 text-gray-400" role="alert">No results</div>
    </div>
  </AutocompleteInput>
</template>

<style scoped></style>
