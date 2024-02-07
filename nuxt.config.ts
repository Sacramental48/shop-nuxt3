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
    // 'nuxt-lazy-load',
    '@nuxt/image',
  ],
//   lazyLoad: {
//     // These are the default values
//     images: true,
//     videos: true,
//     audios: true,
//     iframes: true,
//     native: false,
//     directiveOnly: false,
    
//     // Default image must be in the public folder
//     defaultImage: '/default-image.png',
//   },
  image: {
    inject: true,
    quality: 40,
  }
})
