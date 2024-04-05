export default {
  setTodo(state, payload) {
    state.todos = payload;
  },
  setSingleTodo(state, payload) {
    state.singleTodo = payload;
  },
};
