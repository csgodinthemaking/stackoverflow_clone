import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";
import { resolve } from "path";

function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: pathResolve("src") + "/",
      },
    ],
  },

  plugins: [
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: "antd",
          libDirectory: "es",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],

  server: {
    host: "0.0.0.0",
    port: 5080,
  },
});
