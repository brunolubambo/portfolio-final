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
  // #region agent log
  fetch('http://127.0.0.1:7625/ingest/3a04394b-c760-4aad-9ec6-2d17007308db',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'c3f535'},body:JSON.stringify({sessionId:'c3f535',location:'CaseBody.vue:handleClick',message:'click received',data:{targetTag:target?.tagName,imgFound:!!img,containsImg:img?bodyRef.value?.contains(img):false,imgSrc:img?.src?.slice(0,80)},timestamp:Date.now(),hypothesisId:'H2-H4',runId:'post-fix'})}).catch(()=>{});
  // #endregion
  if (!img || !bodyRef.value?.contains(img)) return
  lightboxSrc.value = img.currentSrc || img.src
  lightboxAlt.value = img.alt
  // #region agent log
  fetch('http://127.0.0.1:7625/ingest/3a04394b-c760-4aad-9ec6-2d17007308db',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'c3f535'},body:JSON.stringify({sessionId:'c3f535',location:'CaseBody.vue:handleClick',message:'lightboxSrc set',data:{lightboxSrc:lightboxSrc.value?.slice(0,80)},timestamp:Date.now(),hypothesisId:'H3',runId:'post-fix'})}).catch(()=>{});
  // #endregion
}

onMounted(() => {
  const imgCount = bodyRef.value?.querySelectorAll('img').length ?? 0
  // #region agent log
  fetch('http://127.0.0.1:7625/ingest/3a04394b-c760-4aad-9ec6-2d17007308db',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'c3f535'},body:JSON.stringify({sessionId:'c3f535',location:'CaseBody.vue:onMounted',message:'mounted',data:{bodyRefExists:!!bodyRef.value,imgCount},timestamp:Date.now(),hypothesisId:'H1-H5',runId:'post-fix'})}).catch(()=>{});
  // #endregion
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
