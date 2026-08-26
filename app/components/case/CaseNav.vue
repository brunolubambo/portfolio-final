<script setup lang="ts">
const props = defineProps<{
  currentOrder: number
}>()

const { t } = useLocale()

const projects = computed(() => [
  { order: 1, slug: 'digital-key', title: t.value.case.projects.digitalKey },
  { order: 2, slug: 'dead-space', title: t.value.case.projects.deadSpace },
  { order: 3, slug: 'harmonymind', title: t.value.case.projects.harmonymind },
  { order: 4, slug: 'skill-tree-valhalla', title: t.value.case.projects.skillTreeValhalla },
])

const prev = computed(() => projects.value.find(p => p.order === props.currentOrder - 1))
const next = computed(() => projects.value.find(p => p.order === props.currentOrder + 1))
</script>

<template>
  <nav class="case-nav" aria-label="Case study navigation">
    <div class="case-nav-row">
      <div>
        <NuxtLink
          v-if="prev"
          :to="`/work/${prev.slug}`"
          class="case-nav-link"
          :aria-label="`${t.case.previous} ${prev.title}`"
        >
          <span class="case-nav-label">{{ t.case.previous }}</span>
          <span class="case-nav-title">{{ prev.title }}</span>
        </NuxtLink>
      </div>

      <NuxtLink to="/" class="case-nav-all">{{ t.case.allWork }}</NuxtLink>

      <div>
        <NuxtLink
          v-if="next"
          :to="`/work/${next.slug}`"
          class="case-nav-link case-nav-link--next"
          :aria-label="`${t.case.next} ${next.title}`"
        >
          <span class="case-nav-label">{{ t.case.next }}</span>
          <span class="case-nav-title">{{ next.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
