import { createApp } from "vue";
import "./style.css";
import Temp from "./Temp.vue";
import App from "./App.vue";
import tempsApp from "./temps/App.vue";

import "uno.css";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/zh-CN";
import "quasar/dist/quasar.css";
import "@quasar/extras/material-icons/material-icons.css";

const app = createApp(tempsApp);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
});

app.mount("#app");
