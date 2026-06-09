<script setup lang="ts">
const props = defineProps<{
  currentOrder: number
}>()

const projects = [
  { order: 1, slug: 'harmonymind', title: 'HarmonyMind' },
  { order: 2, slug: 'dead-space', title: 'Dead Space — Diegetic UI' },
  { order: 3, slug: 'digital-key', title: 'Digital Key' },
  { order: 4, slug: 'policia-civil', title: 'Polícia Civil PB' },
]

const prev = computed(() => projects.find(p => p.order === props.currentOrder - 1))
const next = computed(() => projects.find(p => p.order === props.currentOrder + 1))
</script>

<template>
  <nav class="case-nav" aria-label="Case study navigation">
    <div class="case-nav-row">
      <!-- Previous -->
      <div>
        <NuxtLink
          v-if="prev"
          :to="`/work/${prev.slug}`"
          class="case-nav-link"
          :aria-label="`Previous case study: ${prev.title}`"
        >
          <span class="case-nav-label">← Previous</span>
          <span class="case-nav-title">{{ prev.title }}</span>
        </NuxtLink>
      </div>

      <!-- Back to all work -->
      <NuxtLink to="/" class="case-nav-all">All work</NuxtLink>

      <!-- Next -->
      <div>
        <NuxtLink
          v-if="next"
          :to="`/work/${next.slug}`"
          class="case-nav-link case-nav-link--next"
          :aria-label="`Next case study: ${next.title}`"
        >
          <span class="case-nav-label">Next →</span>
          <span class="case-nav-title">{{ next.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
