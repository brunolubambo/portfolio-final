export default defineNuxtConfig({
  css: ['~/assets/css/portfolio.css'],

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

  image: {
    domains: ['images.unsplash.com'],
    format: ['webp', 'jpg'],
  },

  site: {
    url: 'https://brunolubambo.com',
    name: 'Bruno Lubambo',
    description: 'Product Designer at the intersection of design and engineering.',
    defaultLocale: 'en',
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/work/digital-key',
        '/work/dead-space',
        '/work/harmonymind',
        '/work/policia-civil',
      ],
      failOnError: false,
    },
  },

  sitemap: {
    urls: [
      '/',
      '/about',
      '/work/harmonymind',
      '/work/dead-space',
      '/work/digital-key',
      '/work/policia-civil',
    ],
  },
})
