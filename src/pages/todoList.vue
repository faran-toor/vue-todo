<template>
  <div class="">
    <div class="flex justify-between py-1 px-3">
      <router-link
        to="/create"
        class="text-white"
        >Create Todo</router-link
      >
      <router-link
        to="/login"
        @click="logout"
        class="text-white"
        >Logout</router-link
      >
    </div>
    <div
      v-if="todoList.length > 0"
      class="flex flex-wrap p-3 gap-1.5 mt-8"
    >
      <div
        v-for="todo in todoList"
        :key="todo.id"
        className=" border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black
              bg-[#ccbed7]"
      >
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
          {{ todo.title }}
        </h5>
        <p class="text-gray-900">{{ todo.description }}</p>

        <router-link
          :to="{ name: 'updateTodo', params: { id: todo.id } }"
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        >
          ✏️
        </router-link>
        <button
          @click="deleteTodo(todo.id)"
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        >
          ❌
        </button>
      </div>
    </div>
    <div
      class="text-white text-3xl"
      v-else
    >
      TodoList Empty
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [],
    };
  },
  created() {
    this.$store.dispatch("getTodos").then(() => {
      this.todoList = this.$store.getters.getTodos;
    });
  },
  mounted() {
    this.todoList = this.$store.getters.getTodos;
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
      this.$store.dispatch("deleteTodo", id);
    },
  },
};
</script>

<style></style>
