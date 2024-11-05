import { createApp } from "vue";
import "./style.css";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";

import tempsApp from "./temps/App.vue";

// main.ts
import "virtual:uno.css";

const app = createApp(tempsApp);
app.use(ArcoVue);
app.mount("#app");
