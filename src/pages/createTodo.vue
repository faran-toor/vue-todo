<template>
  <section class="w-2/4 m-auto">
    <div class="rounded-md bg-black/70 p-2">
      <div class="bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Create Todo
        </h2>
        <todo-form></todo-form>
      </div>
    </div>
  </section>
</template>

<script>
import todoForm from "../components/todoForm.vue";
export default {
  components: {
    todoForm,
  },
};
</script>

<style></style>
