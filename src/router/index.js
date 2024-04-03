import { createRouter, createWebHistory } from "vue-router";
import welcomeScreen from "../pages/welcomeScreen.vue";
import userRegister from "../pages/userRegister.vue";
import userLogin from "../pages/userLogin.vue";
import createTodo from "../pages/createTodo.vue";
import updateTodo from "../pages/updateTodo.vue";
import todoList from "../pages/todoList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => {
        const token = localStorage.getItem("token");
        return token ? todoList : welcomeScreen;
      },
    },
    { path: "/register", name: "userRegister", component: userRegister },
    { path: "/login", name: "userLogin", component: userLogin },
    { path: "/create", name: "createTodo", component: createTodo },
    { path: "/update", name: "updateTodo", component: updateTodo },
  ],
});

export default router;
