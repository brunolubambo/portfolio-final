<script setup lang="ts">
defineProps<{
  title: string
  tagline: string
  cover: string
  year: number | string
  area: string
}>()
</script>

<template>
  <section class="case-hero">
    <div class="wrap">
      <!-- Breadcrumb -->
      <nav class="case-breadcrumb" aria-label="Breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span aria-hidden="true">/</span>
        <NuxtLink to="/">Work</NuxtLink>
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
      <div class="case-cover">
        <NuxtImg
          :src="cover"
          :alt="`Cover image for ${title}`"
          width="1200"
          height="675"
          priority
        />
      </div>
    </div>
  </section>
</template>
