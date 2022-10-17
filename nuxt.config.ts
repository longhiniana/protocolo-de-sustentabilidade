// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: [/echarts/]
  },
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt'],
})