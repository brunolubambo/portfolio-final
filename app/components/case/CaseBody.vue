<script setup lang="ts">
import type { WorkCollectionItem } from '@nuxt/content'
import CaseImageLightbox from '~/components/case/ImageLightbox.vue'

defineProps<{ project: WorkCollectionItem }>()

const lightboxSrc = ref<string | null>(null)
const lightboxAlt = ref('')
const bodyRef = ref<HTMLElement | null>(null)

function handleClick(e: MouseEvent) {
  const target = e.target as HTMLElement | null
  const img = target?.closest('img') as HTMLImageElement | null
  if (!img || !bodyRef.value?.contains(img)) return
  lightboxSrc.value = img.currentSrc || img.src
  lightboxAlt.value = img.alt
}

onMounted(() => {
  bodyRef.value?.addEventListener('click', handleClick)
})
onBeforeUnmount(() => {
  bodyRef.value?.removeEventListener('click', handleClick)
})
</script>

<template>
  <div>
    <div ref="bodyRef" class="case-body">
      <ContentRenderer :value="project" />
    </div>
    <CaseImageLightbox
      v-if="lightboxSrc"
      :src="lightboxSrc"
      :alt="lightboxAlt"
      @close="lightboxSrc = null"
    />
  </div>
</template>
