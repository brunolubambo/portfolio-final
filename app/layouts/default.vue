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
  <div class="min-h-screen bg-[#FAFAFA] text-[#0D0D0D] dark:bg-[#0D0D0D] dark:text-[#F0F0F0] transition-colors duration-200">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
