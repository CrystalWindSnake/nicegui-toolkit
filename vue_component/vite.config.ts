import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import * as path from "path";

import { vitePluginForArco } from "@arco-plugins/vite-vue";

const niceguiResourcesJs = "../../static/utils/resources.js";

function createIgnoreModulePlugin(ignoredModules: string[]): Plugin {
  return {
    name: "ignore-module-plugin",
    resolveId(id) {
      if (ignoredModules.includes(id)) {
        return id;
      }
    },
    load(id) {
      if (ignoredModules.includes(id)) {
        return "export default {}";
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
      // template: { transformAssetUrls },
    }),
    vitePluginForArco({
      style: "css",
    }),
    Unocss(),
    createIgnoreModulePlugin([niceguiResourcesJs]),
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
    // sourcemap: "inline",

    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: `src/index.ts`,
      formats: ["es"],
      // name: 'TrackBall',
      // the proper extensions will be added
      fileName: "trackBall",

      // fileName(format, entryName) {
      //   return  entryName
      // },
    },
    rollupOptions: {
      external: ["vue", niceguiResourcesJs],
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "trackBall.css";
          }
          return assetInfo.name;
        },
        // intro: 'import "./style.css";',
      },
    },
  },
});
