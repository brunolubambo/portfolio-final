export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/a11y',
    '@nuxtjs/color-mode',
    'nuxt-schema-org',
    '@nuxtjs/sitemap',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
        },
      },
    },
  },

  site: {
    url: 'https://brunolubambo.com',
  },

  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  sitemap: {
    urls: [
      '/',
      '/work/harmonymind',
      '/work/e-leve',
      '/work/sigrh',
    ],
  },
})
