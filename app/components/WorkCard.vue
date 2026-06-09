<script setup lang="ts">
defineProps<{
  title: string
  tagline: string
  year: number | string
  area: string
  cover: string
  slug: string
}>()
</script>

<template>
  <NuxtLink
    :to="`/work/${slug}`"
    class="group block overflow-hidden rounded-xl border border-border dark:border-border-dark bg-bg-card dark:bg-bg-card-dark transition-all duration-200 hover:border-accent/40 dark:hover:border-accent-light/30 hover:shadow-lg hover:shadow-accent/5 dark:hover:shadow-brand/20"
    :aria-label="`Ver estudo de caso: ${title}`"
  >
    <!-- Cover image -->
    <div class="aspect-[16/9] overflow-hidden bg-bg-subtle dark:bg-surface-light">
      <NuxtImg
        :src="cover"
        :alt="`Capa do projeto ${title}`"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        width="800"
        height="450"
        loading="lazy"
      />
    </div>

    <!-- Card body -->
    <div class="p-6">
      <div class="mb-3 flex items-center gap-3">
        <span class="rounded-full bg-accent-muted dark:bg-brand/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-widest text-accent dark:text-accent-light">
          {{ area }}
        </span>
        <span class="text-xs text-text-muted">{{ year }}</span>
      </div>
      <h2 class="mb-1.5 text-lg font-semibold text-text-primary dark:text-text-inverted leading-snug">
        {{ title }}
      </h2>
      <p class="text-sm leading-relaxed text-text-secondary dark:text-text-muted">
        {{ tagline }}
      </p>
      <span class="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent dark:text-accent-light opacity-0 group-hover:opacity-100 transition-opacity">
        Ver estudo de caso
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </div>
  </NuxtLink>
</template>
