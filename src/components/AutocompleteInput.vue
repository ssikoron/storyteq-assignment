<script lang="ts" setup>
import { onMounted, ref } from "vue";

defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

const inputField = ref<HTMLInputElement>();

onMounted(() => {
  inputField.value?.focus();
});

function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", value);
}
</script>

<template>
  <div class="bg-white">
    <form>
      <label for="search" class="sr-only">Search</label>
      <div class="relative">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <img
            src="@/assets/icons/search.svg"
            class="h-5 w-5 text-gray-500 dark:text-gray-400"
          />
        </div>
        <input
          ref="inputField"
          type="search"
          id="search"
          class="block w-full p-4 pl-10 text-sm text-gray-900 focus:outline-none"
          placeholder="Search"
          :value="modelValue"
          @input="handleInput"
        />
      </div>
    </form>
    <slot></slot>
  </div>
</template>

<style scoped></style>
