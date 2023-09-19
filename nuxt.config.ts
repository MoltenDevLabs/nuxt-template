// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/supabase",
    "nuxt-icons",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
  ],
  app: {
    head: {
      title: "Nuxt template",
      meta: [
        {
          name: "Nuxt template",
          content:
            "Nuxt, tailwind, google fonts, supabase, nuxt icons, color mode, device",
          charset: "UTF-8",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com/",
          crossorigin: "anonymous",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  googleFonts: {
    families: {
      Lato: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      Merriweather: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
    display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    preconnect: true,
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  tailwindcss: {
    cssPath: "@/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  device: {
    refreshOnResize: true,
  },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pages: true,
  supabase: {
    redirect: false,
  },
});
