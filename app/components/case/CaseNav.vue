<script setup lang="ts">
const props = defineProps<{
  currentOrder: number
}>()

const projects = [
  { order: 1, slug: 'harmonymind', title: 'HarmonyMind' },
  { order: 2, slug: 'e-leve', title: 'e-Leve' },
  { order: 3, slug: 'sigrh', title: 'SIGRH' },
]

const prev = computed(() => projects.find(p => p.order === props.currentOrder - 1))
const next = computed(() => projects.find(p => p.order === props.currentOrder + 1))
</script>

<template>
  <nav class="mx-auto max-w-5xl border-t border-[#2A2A2A] dark:border-[#2A2A2A] px-6 py-12">
    <div class="flex items-center justify-between">
      <div>
        <NuxtLink
          v-if="prev"
          :to="`/work/${prev.slug}`"
          class="group flex flex-col gap-1"
        >
          <span class="text-xs font-medium uppercase tracking-widest text-[#888888]">← Previous</span>
          <span class="text-sm text-[#0D0D0D] dark:text-[#F0F0F0] group-hover:text-accent dark:group-hover:text-accent transition-colors">
            {{ prev.title }}
          </span>
        </NuxtLink>
      </div>
      <div class="text-right">
        <NuxtLink
          v-if="next"
          :to="`/work/${next.slug}`"
          class="group flex flex-col items-end gap-1"
        >
          <span class="text-xs font-medium uppercase tracking-widest text-[#888888]">Next →</span>
          <span class="text-sm text-[#0D0D0D] dark:text-[#F0F0F0] group-hover:text-accent dark:group-hover:text-accent transition-colors">
            {{ next.title }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
