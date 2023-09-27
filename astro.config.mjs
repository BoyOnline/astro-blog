import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
// import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // vue({
    //   appEntrypoint: "/src/pages/_app",
    //   jsx: {
    //     isCustomElement: (tag) => tag.startsWith("v-md"),
    //   },
    // }),
    vue(),
    tailwind(),
  ],
  output: "server",
  adapter: vercel(),
});
