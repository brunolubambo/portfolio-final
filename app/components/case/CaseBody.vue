<script setup lang="ts">
import type { WorkCollectionItem } from '@nuxt/content'

defineProps<{
  project: WorkCollectionItem
}>()
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-12">
    <ContentRenderer
      :value="project"
      class="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
    />
  </section>
</template>
