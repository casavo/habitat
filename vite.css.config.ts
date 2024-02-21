import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "node:path";
import { defineConfig } from "vite";

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
      identifiers: ({ debugId }) => {
        return debugId?.replace("_", "-") ?? "";
      },
    }),
  ],
});
