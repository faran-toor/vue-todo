import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import userRegister from "../pages/userRegister.vue";
import userLogin from "../pages/userLogin.vue";
import createTodo from "../pages/createTodo.vue";
import updateTodo from "../pages/updateTodo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    { path: "/register", name: "userRegister", component: userRegister },
    { path: "/login", name: "userLogin", component: userLogin },
    {
      path: "/create",
      name: "createTodo",
      component: createTodo,
      meta: { requiresAuth: true },
    },
    {
      path: "/update/:id",
      name: "updateTodo",
      component: updateTodo,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.name === "userLogin" && token) {
    next({ name: "Home" });
  } else if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
    next({ name: "userLogin" });
  } else {
    next();
  }
});

export default router;
