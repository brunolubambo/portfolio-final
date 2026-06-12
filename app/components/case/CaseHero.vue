<script setup lang="ts">
const props = defineProps<{
  title: string
  tagline: string
  cover: string
  year: number | string
  area: string
  coverDark?: boolean
}>()

const { t } = useLocale()
const coverAlt = computed(() => t.value.case.coverAlt.replace('{title}', props.title))
</script>

<template>
  <section class="case-hero">
    <div class="wrap">
      <!-- Breadcrumb -->
      <nav class="case-breadcrumb" aria-label="Breadcrumb">
        <NuxtLink to="/">{{ t.case.home }}</NuxtLink>
        <span aria-hidden="true">/</span>
        <NuxtLink to="/">{{ t.case.work }}</NuxtLink>
        <span aria-hidden="true">/</span>
        <span>{{ title }}</span>
      </nav>

      <!-- Meta row -->
      <div class="case-meta">
        <span class="case-chip">{{ area }}</span>
        <span class="case-year">{{ year }}</span>
      </div>

      <!-- Title -->
      <h1>{{ title }}</h1>

      <!-- Tagline -->
      <p class="case-tagline">{{ tagline }}</p>

      <!-- Cover -->
      <div class="case-cover" :class="{ 'case-cover--dark': coverDark }">
        <NuxtImg
          :src="cover"
          :alt="coverAlt"
          width="1200"
          height="675"
          priority
        />
      </div>
    </div>
  </section>
</template>
