<template>
  <form
    @submit.prevent="addTodo"
    method="POST"
    class="mt-8"
  >
    <div class="space-y-5">
      <div>
        <label
          for=""
          class="text-base font-medium text-gray-900"
        >
          Enter Title
        </label>
        <div class="mt-2">
          <input
            v-model="todo.title"
            type="text"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Title"
            required
          />
        </div>
      </div>
      <div>
        <label
          for=""
          class="text-base font-medium text-gray-900"
        >
          Enter Description
        </label>
        <div class="mt-2">
          <textarea
            v-model="todo.description"
            required
            name=""
            id=""
            cols="30"
            rows="10"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          ></textarea>
        </div>
      </div>
      <base-button
        @click="addTodo"
        :title="create"
      ></base-button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    updateTodo: {
      default: {},
      type: Object,
    },
  },
  data() {
    return {
      todo: {
        title: "",
        description: "",
      },
      create: "",
      createTodo: "",
    };
  },
  created() {
    this.createTodo = this.$route.path;
    if (this.createTodo == "/create") {
      this.create = "Add";
    } else {
      this.create = "Update";
      this.todo.id = this.updateTodo.id;
      this.todo.title = this.updateTodo.title;
      this.todo.description = this.updateTodo.description;
      const signleTodoId = this.$route.params.id;
      this.$store.dispatch("getSingleTodo", signleTodoId).then(() => {
        let updateTodo = this.$store.getters.getSingleTodo;
        this.todo = updateTodo;
      });
    }
  },
  mounted() {
    let singleTodo = this.$store.getters.singleTodo;
    if (singleTodo) {
      this.todo.id = singleTodo.id;
      this.todo.title = singleTodo.title;
      this.todo.description = singleTodo.description;
    }
  },
  methods: {
    addTodo() {
      if (this.createTodo == "/create") {
        this.$store.dispatch("addTodo", this.todo);
        this.$router.push("/");
      } else {
        this.$store.dispatch("updateTodo", this.todo);
        this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
