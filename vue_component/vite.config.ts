import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import * as path from "path";

import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ template: { transformAssetUrls } }), Unocss({})],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // outDir: `dist/${componentName}`,
    cssCodeSplit: false,

    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: `src/components/index.ts`,
      formats: ["es"],
      // name: 'TrackBall',
      // the proper extensions will be added
      fileName: "TrackBall",

      // fileName(format, entryName) {
      //   return  entryName
      // },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        // intro: 'import "./style.css";',
      },
    },
  },
});
