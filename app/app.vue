<script setup lang="ts">
useHead(() => ({
  titleTemplate: (title) => title?.endsWith('Bruno Lubambo') ? title : `${title} — Bruno Lubambo`,
  meta: [
    { name: 'description', content: 'Product Designer at the intersection of design and engineering. Portfolio of HarmonyMind, e-Leve and SIGRH.' },
    { property: 'og:site_name', content: 'Bruno Lubambo' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'theme-color', content: '#1E3A8A' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
  ],
}))

useSchemaOrg([
  definePerson({
    name: 'Bruno Lubambo',
    url: 'https://brunolubambo.com',
    email: 'brunolubambo@gmail.com',
    sameAs: ['https://www.linkedin.com/in/brunolubambo'],
    jobTitle: 'Product Designer',
  }),
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage :key="locale" />
  </NuxtLayout>
</template>
