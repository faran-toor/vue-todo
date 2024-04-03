<template>
  <div>
    <label
      for=""
      class="text-base font-medium text-gray-900"
    >
      {{ lebal }}
    </label>
    <div class="mt-2">
      <textarea
        v-if="type == 'description'"
        name="description"
        id=""
        v-model="inputValue"
        cols="30"
        rows="10"
        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      ></textarea>
      <input
        v-else
        v-model="inputValue"
        :type="type"
        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        :placeholder="inputPlaceholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lebal: {
      default: "Enter Title",
      type: String,
    },
    type: {
      default: "text",
      type: String,
    },
    inputPlaceholder: {
      default: "Enter title for todo",
      type: String,
    },
    input: {
      default: "",
      type: String,
    },
  },
  beforeMount() {
    this.inputValue = this.input;
  },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style></style>
