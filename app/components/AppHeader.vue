<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggleColorMode() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[#2A2A2A] dark:border-[#2A2A2A] bg-[#FAFAFA]/95 dark:bg-[#0D0D0D]/95 backdrop-blur-sm">
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="text-sm font-semibold tracking-tight text-[#0D0D0D] dark:text-[#F0F0F0] hover:text-accent dark:hover:text-accent transition-colors"
      >
        Bruno Lubambo
      </NuxtLink>

      <!-- Desktop nav -->
      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="text-sm text-[#666666] dark:text-[#888888] hover:text-[#0D0D0D] dark:hover:text-[#F0F0F0] transition-colors"
        >
          {{ link.label }}
        </NuxtLink>

        <!-- Dark/light toggle -->
        <button
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="flex h-8 w-8 items-center justify-center rounded text-[#666666] dark:text-[#888888] hover:text-[#0D0D0D] dark:hover:text-[#F0F0F0] transition-colors"
          @click="toggleColorMode"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
          <!-- Moon icon (shown in light mode) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>
        </button>
      </div>

      <!-- Mobile: toggle + hamburger -->
      <div class="flex items-center gap-3 md:hidden">
        <button
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="flex h-8 w-8 items-center justify-center rounded text-[#666666] dark:text-[#888888]"
          @click="toggleColorMode"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>
        </button>

        <button
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          class="flex h-8 w-8 items-center justify-center rounded text-[#666666] dark:text-[#888888]"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile drawer -->
    <div v-if="mobileMenuOpen" class="border-t border-[#2A2A2A] bg-[#FAFAFA] dark:bg-[#0D0D0D] px-6 py-4 md:hidden">
      <ul class="flex flex-col gap-4">
        <li v-for="link in navLinks" :key="link.href">
          <NuxtLink
            :to="link.href"
            class="text-sm text-[#666666] dark:text-[#888888] hover:text-[#0D0D0D] dark:hover:text-[#F0F0F0] transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
