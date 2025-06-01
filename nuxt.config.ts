// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  devtools: {
    enabled: true,
  },

  colorMode: {
    classSuffix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
})
