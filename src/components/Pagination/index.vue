<template>
  <div class="flex justify-center items-center text-sm font-semibold mt-10">
    <button
      v-show="current > 1"
      class="w-24 h-10 mr-4 border-2 border-[#f34044] text-[#f34044] text-sm font-semibold bg-transparent cursor-pointer rounded-full"
      @click="handlePage(current - 1)"
    >
      Previous
    </button>
    <span
      class="min-w-[100px] h-10 grid place-content-center bg-[#f34044] px-5 text-white rounded-full"
      >Page {{ current }} of {{ pageTotal }}</span
    >
    <button
      v-show="current < pageTotal"
      class="w-16 h-10 ml-4 border-2 border-[#f34044] text-[#f34044] text-sm font-semibold bg-transparent cursor-pointer rounded-full"
      @click="handlePage(current + 1)"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  pageTotal: number;
  current: number;
}

defineProps<Props>();

const handlePage = (page: number) => {
  window.location.href = `?page=${page}`;
};
</script>

<style lang="css" scoped></style>
