/// <reference types="vitest" />

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import magicalSvg from "vite-plugin-magical-svg";
import resolveTsConfigPaths from "vite-tsconfig-paths";

const exclude = ["**/node_modules/**", "**/dist/**", "**/playwright/**"];

export default defineConfig({
  plugins: [
    // magicalSvg({ svgo: false, target: "react" }),
    resolveTsConfigPaths(),
    react(),
    vanillaExtractPlugin(),
  ],
  test: {
    coverage: {
      exclude: exclude.concat([
        "./",
        "**/docs**",
        "**/storybook-static/**",
        "**/src/assets/**",
        "**/src/stories/**",
      ]),
      reporter: ["html"],
    },
    deps: {
      web: {
        transformAssets: false,
      },
    },
    environment: "jsdom",
    exclude,
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});
