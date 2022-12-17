import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import("vite").UserConfig} */
const config = {
  plugins: [sveltekit(), "@babel/plugin-syntax-import-assertions"],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  }
};

export default config;
