<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      'data-domain': 'brunolubambo.com',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-bg text-text-primary dark:bg-bg-dark dark:text-text-inverted transition-colors duration-200">
    <AppHeader />
    <main id="main-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
