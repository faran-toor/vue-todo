import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import baseButton from "./components/UI/baseButton.vue";
import Toast from "./components/Toast.vue";

const app = createApp(App);

app.component("base-button", baseButton);
app.component("Toast", Toast);
app.use(router);
app.use(store);
app.mount("#app");
