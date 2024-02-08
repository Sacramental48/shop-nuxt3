// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./assets/scss/_colors.scss";',
        },
      },
    },
  },
  modules: [
    'vue3-carousel-nuxt',
    '@nuxt/image',
  ],
  carousel: {
    prefix: 'Swiper'
  },
  image: {
    inject: true,
    quality: 40,
  }
})
