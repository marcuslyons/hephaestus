import adapter from "@sveltejs/adapter-auto";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  vite: {
    resolve: {
      alias: {
        $lib: path.resolve("./src/lib"),
        $components: path.resolve("./src/components"),
      },
    },
  },
};

export default config;
