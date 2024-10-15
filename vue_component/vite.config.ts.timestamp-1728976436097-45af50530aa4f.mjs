// vite.config.ts
import { defineConfig } from "file:///E:/working/github/nicegui-toolkit/vue_component/node_modules/.pnpm/vite@4.5.0_less@4.2.0/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/working/github/nicegui-toolkit/vue_component/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@4.5.0_less@4.2.0__vue@3.5.8_typescript@5.2.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Unocss from "file:///E:/working/github/nicegui-toolkit/vue_component/node_modules/.pnpm/unocss@0.57.1_postcss@8.4.47_rollup@4.7.0_vite@4.5.0_less@4.2.0_/node_modules/unocss/dist/vite.mjs";
import * as path from "path";
import { vitePluginForArco } from "file:///E:/working/github/nicegui-toolkit/vue_component/node_modules/.pnpm/@arco-plugins+vite-vue@1.4.5/node_modules/@arco-plugins/vite-vue/lib/index.js";
var __vite_injected_original_dirname = "E:\\working\\github\\nicegui-toolkit\\vue_component";
function createIgnoreModulePlugin(ignoredModules) {
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
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true
      }
      // template: { transformAssetUrls },
    }),
    vitePluginForArco({
      style: "css"
    }),
    Unocss(),
    createIgnoreModulePlugin(["../../static/utils/resources.js"])
  ],
  define: {
    "process.env": {}
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
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
      fileName: "trackBall"
      // fileName(format, entryName) {
      //   return  entryName
      // },
    },
    rollupOptions: {
      external: ["vue", "../../static/utils/resources.js"],
      output: {
        globals: {
          vue: "Vue"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "trackball.css";
          }
          return assetInfo.name;
        }
        // intro: 'import "./style.css";',
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx3b3JraW5nXFxcXGdpdGh1YlxcXFxuaWNlZ3VpLXRvb2xraXRcXFxcdnVlX2NvbXBvbmVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcd29ya2luZ1xcXFxnaXRodWJcXFxcbmljZWd1aS10b29sa2l0XFxcXHZ1ZV9jb21wb25lbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3dvcmtpbmcvZ2l0aHViL25pY2VndWktdG9vbGtpdC92dWVfY29tcG9uZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBQbHVnaW4gfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IFVub2NzcyBmcm9tIFwidW5vY3NzL3ZpdGVcIjtcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuaW1wb3J0IHsgdml0ZVBsdWdpbkZvckFyY28gfSBmcm9tIFwiQGFyY28tcGx1Z2lucy92aXRlLXZ1ZVwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSWdub3JlTW9kdWxlUGx1Z2luKGlnbm9yZWRNb2R1bGVzOiBzdHJpbmdbXSk6IFBsdWdpbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwiaWdub3JlLW1vZHVsZS1wbHVnaW5cIixcclxuICAgIHJlc29sdmVJZChpZCkge1xyXG4gICAgICBpZiAoaWdub3JlZE1vZHVsZXMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9hZChpZCkge1xyXG4gICAgICBpZiAoaWdub3JlZE1vZHVsZXMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiZXhwb3J0IGRlZmF1bHQge31cIjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSh7XHJcbiAgICAgIHNjcmlwdDoge1xyXG4gICAgICAgIGRlZmluZU1vZGVsOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyB0ZW1wbGF0ZTogeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSxcclxuICAgIH0pLFxyXG4gICAgdml0ZVBsdWdpbkZvckFyY28oe1xyXG4gICAgICBzdHlsZTogXCJjc3NcIixcclxuICAgIH0pLFxyXG4gICAgVW5vY3NzKCksXHJcbiAgICBjcmVhdGVJZ25vcmVNb2R1bGVQbHVnaW4oW1wiLi4vLi4vc3RhdGljL3V0aWxzL3Jlc291cmNlcy5qc1wiXSksXHJcbiAgXSxcclxuICBkZWZpbmU6IHtcclxuICAgIFwicHJvY2Vzcy5lbnZcIjoge30sXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIC8vIG91dERpcjogYGRpc3QvJHtjb21wb25lbnROYW1lfWAsXHJcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxyXG5cclxuICAgIGxpYjoge1xyXG4gICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHNcclxuICAgICAgZW50cnk6IGBzcmMvY29tcG9uZW50cy9pbmRleC50c2AsXHJcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxyXG4gICAgICAvLyBuYW1lOiAnVHJhY2tCYWxsJyxcclxuICAgICAgLy8gdGhlIHByb3BlciBleHRlbnNpb25zIHdpbGwgYmUgYWRkZWRcclxuICAgICAgZmlsZU5hbWU6IFwidHJhY2tCYWxsXCIsXHJcblxyXG4gICAgICAvLyBmaWxlTmFtZShmb3JtYXQsIGVudHJ5TmFtZSkge1xyXG4gICAgICAvLyAgIHJldHVybiAgZW50cnlOYW1lXHJcbiAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogW1widnVlXCIsIFwiLi4vLi4vc3RhdGljL3V0aWxzL3Jlc291cmNlcy5qc1wiXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcclxuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PT0gXCJzdHlsZS5jc3NcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ0cmFja2JhbGwuY3NzXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBpbnRybzogJ2ltcG9ydCBcIi4vc3R5bGUuY3NzXCI7JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVUsU0FBUyxvQkFBNEI7QUFDOVcsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixZQUFZLFVBQVU7QUFFdEIsU0FBUyx5QkFBeUI7QUFMbEMsSUFBTSxtQ0FBbUM7QUFPekMsU0FBUyx5QkFBeUIsZ0JBQWtDO0FBQ2xFLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFVBQVUsSUFBSTtBQUNaLFVBQUksZUFBZSxTQUFTLEVBQUUsR0FBRztBQUMvQixlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUssSUFBSTtBQUNQLFVBQUksZUFBZSxTQUFTLEVBQUUsR0FBRztBQUMvQixlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixRQUFRO0FBQUEsUUFDTixhQUFhO0FBQUEsTUFDZjtBQUFBO0FBQUEsSUFFRixDQUFDO0FBQUEsSUFDRCxrQkFBa0I7QUFBQSxNQUNoQixPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCx5QkFBeUIsQ0FBQyxpQ0FBaUMsQ0FBQztBQUFBLEVBQzlEO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixlQUFlLENBQUM7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBVSxhQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsY0FBYztBQUFBLElBRWQsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsSUFBSTtBQUFBO0FBQUE7QUFBQSxNQUdkLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtaO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsT0FBTyxpQ0FBaUM7QUFBQSxNQUNuRCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0EsZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsU0FBUyxhQUFhO0FBQ2xDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPLFVBQVU7QUFBQSxRQUNuQjtBQUFBO0FBQUEsTUFFRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
