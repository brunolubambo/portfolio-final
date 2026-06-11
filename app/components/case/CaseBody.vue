<script setup lang="ts">
import type { WorkCollectionItem } from '@nuxt/content'

defineProps<{
  project: WorkCollectionItem
}>()

const lightboxSrc = ref<string | null>(null)
const lightboxAlt = ref('')

function onBodyClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (target.tagName !== 'IMG') return
  const img = target as HTMLImageElement
  lightboxSrc.value = img.src
  lightboxAlt.value = img.alt
}
</script>

<template>
  <div class="case-body" @click="onBodyClick">
    <ContentRenderer :value="project" />
  </div>

  <ImageLightbox
    v-if="lightboxSrc"
    :src="lightboxSrc"
    :alt="lightboxAlt"
    @close="lightboxSrc = null"
  />
</template>
