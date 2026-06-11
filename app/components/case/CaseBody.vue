<script setup lang="ts">
import type { WorkCollectionItem } from '@nuxt/content'

defineProps<{ project: WorkCollectionItem }>()

const lightboxSrc = ref<string | null>(null)
const lightboxAlt = ref('')
const bodyRef = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    bodyRef.value?.querySelectorAll<HTMLImageElement>('img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxSrc.value = img.src
        lightboxAlt.value = img.alt
      })
    })
  })
})
</script>

<template>
  <div>
    <div ref="bodyRef" class="case-body">
      <ContentRenderer :value="project" />
    </div>
    <ClientOnly>
      <ImageLightbox
        v-if="lightboxSrc"
        :src="lightboxSrc"
        :alt="lightboxAlt"
        @close="lightboxSrc = null"
      />
    </ClientOnly>
  </div>
</template>
