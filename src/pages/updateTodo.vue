<template>
  <section class="w-2/4 m-auto">
    <div class="rounded-md bg-black/70 p-2">
      <div class="bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Update Todo
          </h2>
          <todo-form :updateTodo="todo"></todo-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import todoForm from "../components/todoForm.vue";
export default {
  data() {
    return {
      todo: {},
    };
  },
  components: {
    todoForm,
  },
  created() {
    const id = this.$route.params.id;
    const todos = this.$store.getters.getTodos;
    this.todo = todos.find((currentElement) => currentElement.id == id);
  },
};
</script>

<style></style>
