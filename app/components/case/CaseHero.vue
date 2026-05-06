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
  <section class="mx-auto max-w-5xl px-6 pt-16 pb-8">
    <div class="mb-6 flex items-center gap-3">
      <span class="text-xs font-medium uppercase tracking-widest text-[#888888]">{{ area }}</span>
      <span class="text-xs text-[#888888]">{{ year }}</span>
    </div>
    <h1 class="mb-4 text-4xl font-bold leading-tight tracking-tight text-[#0D0D0D] dark:text-[#F0F0F0] md:text-5xl">
      {{ title }}
    </h1>
    <p class="mb-10 max-w-2xl text-lg leading-relaxed text-[#666666] dark:text-[#888888]">
      {{ tagline }}
    </p>
    <div class="aspect-[16/9] overflow-hidden rounded-lg bg-[#F0F0F0] dark:bg-[#2A2A2A]">
      <NuxtImg
        :src="cover"
        :alt="title"
        class="h-full w-full object-cover"
        width="1200"
        height="675"
        priority
      />
    </div>
  </section>
</template>
