<script setup lang="ts">
import type { WorkCollectionItem } from '@nuxt/content'

defineProps<{
  project: WorkCollectionItem
}>()
</script>

<template>
  <div class="case-body">
    <ContentRenderer :value="project" />
  </div>
</template>
