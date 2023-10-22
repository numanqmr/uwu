// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/supabase", "nuxt-primevue"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "uwu app",
    },
  },

  css: ["~/assets/css/main.css"],
  components: [{ path: "~/components", pathPrefix: false }],
  pages: true,
  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    // Options
  },
  primevue: { options: {} },
});
