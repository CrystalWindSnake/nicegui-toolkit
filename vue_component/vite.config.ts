import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss({})],
  define: {
    'process.env': {}
  },
  build: {
    // outDir: `dist/${componentName}`,
    cssCodeSplit: false,


    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: `src/components/index.ts`,
      formats: ['es'],
      // name: 'TrackBall',
      // the proper extensions will be added
      fileName: 'TrackBall',

      // fileName(format, entryName) {
      //   return  entryName
      // },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        // intro: 'import "./style.css";',
      },
    },
  },
})
