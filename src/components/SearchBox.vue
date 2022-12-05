<script lang="ts" setup>
import { reactive } from "vue";
import BooksSearch from "@/components/BooksSearch.vue";
import CitiesSearch from "@/components/CitiesSearch.vue";

const state = reactive({
  searchMode: "cities",
});

function changeSearchMode(mode: string) {
  state.searchMode = mode;
}
</script>

<template>
  <div class="bg-white">
    <div class="" role="menubar">
      <ul
        class="-mb-px flex flex-wrap text-center text-sm font-medium text-gray-500"
      >
        <li class="mr-2">
          <button
            @click="changeSearchMode('cities')"
            id="citiesBttn"
            class="group inline-flex rounded-t-lg border-b-2 p-4"
            :class="{
              'active border-blue-600': state.searchMode === 'cities',
              'border-transparent hover:border-gray-300 hover:text-gray-600':
                state.searchMode !== 'cities',
            }"
          >
            <img
              src="@/assets/icons/city.svg"
              class="mr-2 h-5 w-5 text-blue-600"
            />
            Cities
          </button>
        </li>
        <li class="mr-2">
          <button
            @click="changeSearchMode('books')"
            id="booksBttn"
            class="group inline-flex rounded-t-lg border-b-2 p-4"
            :class="{
              'active border-blue-600': state.searchMode === 'books',
              'border-transparent hover:border-gray-300 hover:text-gray-600':
                state.searchMode !== 'books',
            }"
          >
            <img
              src="@/assets/icons/book.svg"
              class="mr-2 h-5 w-5 text-blue-600"
            />
            Books
          </button>
        </li>
      </ul>
    </div>
    <div role="searchbox">
      <BooksSearch v-if="state.searchMode === 'books'" id="booksSearch" />
      <CitiesSearch
        v-else-if="state.searchMode === 'cities'"
        id="citiesSearch"
      />
    </div>
  </div>
</template>

<style scoped></style>
