import {resolve} from "node:path";
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
      entry: {
        badge: resolve(__dirname, "src/components/Badge"),
        button: resolve(__dirname, "src/components/Button"),
        checkbox: resolve(__dirname, "src/components/Checkbox"),
        index: resolve(__dirname, "src/index.ts"),
        reset: resolve(__dirname, "src/utils/reset.css.ts"),
        spinner: resolve(__dirname, "src/components/Spinner"),
        switch: resolve(__dirname, "src/components/Switch"),
        theme: resolve(__dirname, "src/utils/theme.ts"),
        typography: resolve(__dirname, "src/components/Typography"),
      },
      formats: ["es","cjs"],
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
    ssrManifest: true,
    target: "modules",
  },
  plugins: [
    // we don't need to emit the types for the components if we are building the Storybook
    process.env.npm_lifecycle_event === "build:components" &&
      dts({
        clearPureImport: false,
        exclude: ["node_modules/**", "**/vite-env.d.ts"],
        insertTypesEntry: true,
      }),
    react(),
    vanillaExtractPlugin({ identifiers: "short" }),
  ],
});
