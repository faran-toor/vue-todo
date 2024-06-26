import { createStore } from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const store = createStore({
  state: {
    todos: [],
    singleTodo: {},
    message: null,
  },
  getters,
  mutations,
  actions,
});

export default store;
