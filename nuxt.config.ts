// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase"],

  css: ["~/assets/css/main.css"],
  pages: true,
  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    // Options
  },
});
