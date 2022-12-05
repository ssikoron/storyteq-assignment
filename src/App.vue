<script lang="ts" setup>
import SearchBox from "@/components/SearchBox.vue";
</script>

<template>
  <main role="main" class="h-screen w-screen py-10">
    <h1 class="w-full text-center text-xl text-white">storyteq autocomplete</h1>
    <div
      class="xs:w-full ml-auto mr-auto mt-10 bg-white p-1.5 sm:w-4/5 sm:rounded-xl lg:w-1/2"
    >
      <SearchBox />
    </div>
  </main>
</template>

<style scoped></style>
