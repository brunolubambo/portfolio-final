<script setup lang="ts">
const props = defineProps<{
  activePage?: 'home' | 'about' | 'work'
}>()

const mobileMenuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<template>
  <div>
    <!-- SVG symbols -->
    <svg width="0" height="0" style="position:absolute" aria-hidden="true">
      <symbol id="ic-spark" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 0c.7 6.1 5.2 10.6 11.3 11.3v1.4C17.2 13.4 12.7 17.9 12 24c-.7-6.1-5.2-10.6-11.3-11.3v-1.4C6.8 10.6 11.3 6.1 12 0Z" />
        <path fill="currentColor" d="M19.5 1.8c.3 2.6 2.1 4.4 4.7 4.7v.5c-2.6.3-4.4 2.1-4.7 4.7h-.5c-.3-2.6-2.1-4.4-4.7-4.7v-.5c2.6-.3 4.4-2.1 4.7-4.7Z" opacity=".55" />
      </symbol>
      <symbol id="ic-arrow" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M9 6h9v9" />
      </symbol>
      <symbol id="ic-menu" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 8h16M4 16h16" />
      </symbol>
      <symbol id="ic-close" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6l12 12M18 6l-12 12" />
      </symbol>
    </svg>

    <!-- NAV -->
    <div class="nav-shell">
      <nav class="nav">
        <!-- Desktop links (hidden on mobile) -->
        <div class="nav-left">
          <NuxtLink to="/" :class="['nav-link', { 'is-active': activePage === 'home' }]">Home</NuxtLink>
          <NuxtLink to="/about" :class="['nav-link', { 'is-active': activePage === 'about' }]">About</NuxtLink>
        </div>

        <!-- Toggle (mobile only) — placed before brand in DOM so it appears first on mobile -->
        <button
          class="nav-toggle"
          aria-label="Open menu"
          @click="mobileMenuOpen = true"
        >
          <svg><use href="#ic-menu" /></svg>
        </button>

        <!-- Brand -->
        <NuxtLink to="/" class="nav-brand">
          <span class="spark spin"><svg><use href="#ic-spark" /></svg></span>
          Bruno Lubambo
        </NuxtLink>

        <!-- CTA -->
        <div class="nav-right">
          <a href="mailto:brunolubamboadm@gmail.com" class="btn-cta">
            Let's talk
            <span class="spark"><svg><use href="#ic-spark" /></svg></span>
          </a>
        </div>
      </nav>
    </div>

    <!-- Drawer overlay -->
    <div
      class="drawer-overlay"
      :class="{ open: mobileMenuOpen }"
      aria-hidden="true"
      @click="mobileMenuOpen = false"
    />

    <!-- Drawer lateral esquerdo -->
    <nav class="drawer" :class="{ open: mobileMenuOpen }" aria-label="Mobile navigation">
      <div class="drawer-head">
        <span class="spark spin" style="font-size:20px"><svg><use href="#ic-spark" /></svg></span>
        <span class="drawer-brand">Bruno Lubambo</span>
        <button
          class="drawer-close"
          aria-label="Close menu"
          @click="mobileMenuOpen = false"
        >
          <svg><use href="#ic-close" /></svg>
        </button>
      </div>
      <div class="drawer-links">
        <NuxtLink to="/" :class="['drawer-link', { 'is-active': activePage === 'home' }]" @click="mobileMenuOpen = false">Home</NuxtLink>
        <NuxtLink to="/about" :class="['drawer-link', { 'is-active': activePage === 'about' }]" @click="mobileMenuOpen = false">About</NuxtLink>
      </div>
      <div class="drawer-footer">
        <a href="mailto:brunolubamboadm@gmail.com" class="btn-cta" @click="mobileMenuOpen = false">
          Let's talk
          <span class="spark"><svg><use href="#ic-spark" /></svg></span>
        </a>
      </div>
    </nav>
  </div>
</template>
