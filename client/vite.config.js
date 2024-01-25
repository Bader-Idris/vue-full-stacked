import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/sass/main.scss";`,
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["defaults", "last 2 versions", "IE 11"],
          grid: "stable",
          flexbox: "modern",
          cascade: false,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Add Babel configuration
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'vue'`,
  },
  optimizeDeps: {
    include: ["@babel/preset-env"],
  },
});
