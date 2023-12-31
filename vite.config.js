import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "src/index.html",
        "sign-up": "src/sign-up.html",
        "sign-in": "src/sign-in.html",
        "sign-in-scss": "src/sign-in-scss.html",
      },
    },
  },
  root: "src",
});
