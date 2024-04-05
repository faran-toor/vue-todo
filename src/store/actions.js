import axios from "axios";

export default {
  async addTodo(context, data) {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    let formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);

    let resposeData = null;

    await axios
      .post("http://3.232.244.22/api/item", formData, config)
      .then((res) => {
        resposeData = res.data.item;
      });

    context.commit("setTodo", resposeData);
  },
  async getTodos(context) {
    let token = localStorage.getItem("token");

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    let resposeData = null;

    await axios.get("http://3.232.244.22/api/items", config).then((res) => {
      resposeData = res.data.items.data;
      context.commit("setTodo", resposeData);
    });
  },
  async updateTodo(_, todoData) {
    let data = {
      title: todoData.title,
      description: todoData.description,
    };
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    await axios.put(
      `http://3.232.244.22/api/item/${todoData.id}`,
      data,
      config
    );
  },

  async deleteTodo(_, id) {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    await axios.delete(`http://3.232.244.22/api/item/${id}`, config);
  },
  async getSingleTodo(context, id) {
    let token = localStorage.getItem("token");
    let singleItem = null;
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    await axios
      .get(`http://3.232.244.22/api/item/${id}`, config)
      .then((response) => {
        singleItem = response.data.item;
      });
    context.commit("setSingleTodo", singleItem);
  },
};
