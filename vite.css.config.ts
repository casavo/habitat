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
        path.resolve(__dirname, "src/utils/sprinkles.css.ts"),
        // path.resolve(__dirname, "src/index.d.ts"),
        // path.resolve(__dirname, "src/index.ts"),
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

        // put the debugId in the class name if it exists
        const id = debugId && debugId.length > 0 ? `_${debugId}` : "";
        const item = `${component}${id}`;
        // if the identifier is empty its the main theme file
        const name = item === "" ? "habitat_theme" : item;
        // print the resulting class names when building the CSS (debug/check)
        console.log(name);
        return name;
      },
    }),
  ],
});
