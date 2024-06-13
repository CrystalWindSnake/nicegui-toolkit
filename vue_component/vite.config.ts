import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import * as path from "path";

import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
      template: { transformAssetUrls },
    }),
    Unocss({}),
  ],
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
      fileName: "trackBall",

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
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "trackball.css";
          }
          return assetInfo.name;
        },
        // intro: 'import "./style.css";',
      },
    },
  },
});
