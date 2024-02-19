import path from "node:path";
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { getComponentName } from "./src/utils/build";

const id: string = "/habitat/";

const isPROD: boolean = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isPROD ? id : "/",
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, "src/utils/reset.css.ts"),
        path.resolve(__dirname, "src/index.d.ts"),
        path.resolve(__dirname, "src/index.ts"),
      ],
      formats: ["es"],
      name: "@casavo/habitat",
    },
    outDir: "dist-css",
    sourcemap: true,
    target: "modules",
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: ({ debugId, filePath }) => {
        const component = getComponentName(filePath);

        const id = debugId && debugId.length > 0 ? `_${debugId}` : "";
        const item = `${component}${id}`;
        const name = item === "" ? "habitat_theme" : item;
        console.log(name);
        return name;
      },
    }),
  ],
});
