import { createApp } from "vue";
import App from "./App.vue";
import mili from "@mili/components";

const app = createApp(App);
app.use(mili);
app.mount("#app");
