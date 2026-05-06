<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: '%s — Bruno Lubambo',
  meta: [
    { name: 'description', content: 'Product Designer at the intersection of design and engineering. Building accessible, high-impact digital products.' },
    { property: 'og:site_name', content: 'Bruno Lubambo' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
  ],
})

// Schema.org Person
useSchemaOrg([
  definePerson({
    name: 'Bruno Lubambo',
    url: '/',
    email: 'brunolubambo@gmail.com',
    sameAs: ['https://www.linkedin.com/in/brunolubambo'],
    jobTitle: 'Product Designer',
  }),
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
