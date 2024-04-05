import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import baseButton from "./components/UI/baseButton.vue";

const app = createApp(App);

app.component("base-button", baseButton);
app.use(router);
app.use(store);
app.mount("#app");
