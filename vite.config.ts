import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";

const id: string = "/habitat/";

const isPROD: boolean = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  base: isPROD ? id : "/",
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, "src/utils/reset.css.ts"),
        path.resolve(__dirname, "src/index.ts"),
      ],
      fileName: (format, entryName) => {
        if (entryName === "reset.css") {
          return `reset.${format}.js`;
        }
        return `index.${format}.js`;
      },
      formats: ["es", "cjs"],
      name: "@casavo/habitat",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    target: "modules",
  },
  plugins: [
    dts({
      clearPureImport: true,
      exclude: ["node_modules/**", "**/vite-env.d.ts"],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    react(),
    vanillaExtractPlugin({ identifiers: "short" }),
  ],
});
