<template>
  <div>
    <button
      type="button"
      class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
    >
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "Submit",
      type: String,
    },
  },
};
</script>

<style></style>
