import { defineNuxtModule } from '@nuxt/kit';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
  ],
  devtools: {
    enabled: true,
    vscode: {

    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classPrefix: '',
  },
  googleFonts: {
    preload: true,
    families: {
      // Roboto: true,
      BebasNeue: true,
      // Lato: true,
      Montserrat: true,
      // Raleway: [100, 300],
      // OpenSans: {
      //  wght: [400, 700],
      // ital: [100], 
      //}
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  pages: true,
});
