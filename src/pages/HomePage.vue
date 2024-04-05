<template>
  <todo-list v-if="switchComponent"></todo-list>
  <welcome-screen v-else></welcome-screen>
</template>

<script>
import welcomeScreen from "./welcomeScreen.vue";
import todoList from "./todoList.vue";
export default {
  components: {
    welcomeScreen,
    todoList,
  },
  data() {
    return {
      switchComponent: false,
    };
  },
  mounted() {
    const token = localStorage.getItem("token");

    this.switchComponent = !!token;
  },
};
</script>

<style></style>
