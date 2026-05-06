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
    class="group block overflow-hidden rounded-lg border border-[#2A2A2A] dark:border-[#2A2A2A] bg-[#FFFFFF] dark:bg-[#1A1A1A] transition-colors hover:border-[#888888] dark:hover:border-[#888888]"
  >
    <div class="aspect-[16/9] overflow-hidden bg-[#F0F0F0] dark:bg-[#2A2A2A]">
      <NuxtImg
        :src="cover"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        width="800"
        height="450"
      />
    </div>
    <div class="p-6">
      <div class="mb-2 flex items-center gap-3">
        <span class="text-xs font-medium uppercase tracking-widest text-[#888888]">{{ area }}</span>
        <span class="text-xs text-[#888888]">{{ year }}</span>
      </div>
      <h2 class="mb-1 text-lg font-semibold text-[#0D0D0D] dark:text-[#F0F0F0]">{{ title }}</h2>
      <p class="text-sm leading-relaxed text-[#666666] dark:text-[#888888]">{{ tagline }}</p>
    </div>
  </NuxtLink>
</template>
