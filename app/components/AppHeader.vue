<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggleColorMode() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Trabalhos', href: '/#work' },
  { label: 'Sobre', href: '/#about' },
  { label: 'Contato', href: '/#contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border dark:border-border-dark bg-bg/95 dark:bg-bg-dark/95 backdrop-blur-sm">
    <nav
      class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      aria-label="Navegação principal"
    >
      <NuxtLink
        to="/"
        class="text-sm font-semibold tracking-tight text-text-primary dark:text-text-inverted hover:text-accent dark:hover:text-accent-light transition-colors"
        aria-label="Bruno Lubambo — página inicial"
      >
        Bruno Lubambo
      </NuxtLink>

      <!-- Desktop nav -->
      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="text-sm text-text-secondary dark:text-text-muted hover:text-text-primary dark:hover:text-text-inverted transition-colors"
        >
          {{ link.label }}
        </NuxtLink>

        <button
          :aria-label="isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'"
          class="flex h-8 w-8 items-center justify-center rounded text-text-secondary dark:text-text-muted hover:text-text-primary dark:hover:text-text-inverted transition-colors"
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
      </div>

      <!-- Mobile controls -->
      <div class="flex items-center gap-3 md:hidden">
        <button
          :aria-label="isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'"
          class="flex h-8 w-8 items-center justify-center rounded text-text-secondary dark:text-text-muted"
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
          :aria-label="mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'"
          class="flex h-8 w-8 items-center justify-center rounded text-text-secondary dark:text-text-muted"
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
    <Transition name="slide-down">
      <div
        v-if="mobileMenuOpen"
        class="border-t border-border dark:border-border-dark bg-bg dark:bg-bg-dark px-6 py-4 md:hidden"
      >
        <ul class="flex flex-col gap-4">
          <li v-for="link in navLinks" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="text-sm text-text-secondary dark:text-text-muted hover:text-text-primary dark:hover:text-text-inverted transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
