import { defineNuxtModule } from '@nuxt/kit';

// PWA Config
const title = "Your SEO Title"
const shortTitle = "Your SEO Title"
const description = "Your SEO Description"
const image = "https://yourdomain.com/your-image.png"
const url = "https://yourdomain.com"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: title,
      titleTemplate: '%s - Your Website',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: url },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
        // Twitter
        {
          hid: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: url,
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: image,
        },
      ],
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@wattanx/style-resources',
    '@vite-pwa/nuxt',
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: title,
      short_name: shortTitle,
      theme_color: '#ffffff',
      icons: [],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
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
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
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
