import { createApp } from "vue";
import "./style.css";
import Temp from "./Temp.vue";
import App from "./App.vue";
import tempsApp from "./temps/App.vue";

import "uno.css";
// import { Quasar } from "quasar";
import quasarLang from "quasar/lang/zh-CN";
// import "quasar/dist/quasar.css";
// import "@quasar/extras/material-icons/material-icons.css";

await import("quasar/dist/quasar.css");
await import("@quasar/extras/material-icons/material-icons.css");
const quasar_module = await import("quasar");
const { Quasar, Loading } = quasar_module;

const app = createApp(tempsApp);
app.use(Quasar, {
  plugins: { Loading }, // import Quasar plugins and add here
  lang: quasarLang,
});

// register all Quasar components
Object.keys(quasar_module).forEach((key) => {
  if (key.startsWith("Q") && key !== "Quasar") {
    app.component(key, (quasar_module as any)[key]);
  }
});

app.mount("#app");
