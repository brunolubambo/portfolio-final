<script setup lang="ts">
defineProps<{
  activePage?: 'home' | 'about' | 'work'
}>()

const { t } = useLocale()
const mobileMenuOpen = ref(false)
const mobileLinksOpen = ref(false)
const route = useRoute()

const externalLinks = [
  { id: 'linkedin' as const, href: 'https://www.linkedin.com/in/brunolubambo/' },
  { id: 'behance' as const, href: 'https://www.behance.net/brunolubambo92' },
  { id: 'readcv' as const, href: '/Bruno_Lubambo_CV_ATS.pdf' },
]

watch(() => route.path, () => {
  mobileMenuOpen.value = false
  mobileLinksOpen.value = false
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
      <div class="nav-bar-row">
        <nav class="nav">
          <!-- Desktop links (hidden on mobile) -->
          <div class="nav-left">
            <NuxtLink to="/" :class="['nav-link', { 'is-active': activePage === 'home' }]">{{ t.nav.home }}</NuxtLink>
            <NuxtLink to="/about" :class="['nav-link', { 'is-active': activePage === 'about' }]">{{ t.nav.about }}</NuxtLink>
            <div class="nav-dropdown">
              <button
                type="button"
                class="nav-link nav-dropdown-trigger"
                aria-haspopup="true"
                :aria-label="t.nav.links"
              >
                {{ t.nav.links }}
              </button>
              <div class="nav-dropdown-menu" role="menu">
                <a
                  v-for="link in externalLinks"
                  :key="link.id"
                  :href="link.href"
                  class="nav-dropdown-item"
                  role="menuitem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ t.nav[link.id] }}
                </a>
              </div>
            </div>
          </div>

          <!-- Toggle (mobile only) -->
          <button
            class="nav-toggle"
            :aria-label="t.nav.openMenu"
            @click="mobileMenuOpen = true"
          >
            <svg><use href="#ic-menu" /></svg>
          </button>

          <!-- Brand -->
          <NuxtLink to="/" class="nav-brand">
            <span class="spark spin"><svg><use href="#ic-spark" /></svg></span>
            Bruno Lubambo
          </NuxtLink>

          <!-- CTA inside menu bar -->
          <div class="nav-right">
            <a href="mailto:brunolubamboadm@gmail.com" class="btn-cta">
              {{ t.nav.cta }}
              <span class="spark"><svg><use href="#ic-spark" /></svg></span>
            </a>
          </div>
        </nav>

        <!-- Language — outside menu bar -->
        <LanguageSwitcher class="nav-lang-outside" />
      </div>
    </div>

    <!-- Drawer overlay -->
    <div
      class="drawer-overlay"
      :class="{ open: mobileMenuOpen }"
      aria-hidden="true"
      @click="mobileMenuOpen = false"
    />

    <!-- Drawer lateral esquerdo -->
    <nav class="drawer" :class="{ open: mobileMenuOpen }" :aria-label="t.nav.mobileNav">
      <div class="drawer-head">
        <span class="spark spin" style="font-size:20px"><svg><use href="#ic-spark" /></svg></span>
        <span class="drawer-brand">Bruno Lubambo</span>
        <button
          class="drawer-close"
          :aria-label="t.nav.closeMenu"
          @click="mobileMenuOpen = false"
        >
          <svg><use href="#ic-close" /></svg>
        </button>
      </div>
      <div class="drawer-links">
        <NuxtLink to="/" :class="['drawer-link', { 'is-active': activePage === 'home' }]" @click="mobileMenuOpen = false">{{ t.nav.home }}</NuxtLink>
        <NuxtLink to="/about" :class="['drawer-link', { 'is-active': activePage === 'about' }]" @click="mobileMenuOpen = false">{{ t.nav.about }}</NuxtLink>
        <div class="drawer-links-group">
          <button
            type="button"
            class="drawer-link drawer-links-toggle"
            :aria-expanded="mobileLinksOpen"
            @click="mobileLinksOpen = !mobileLinksOpen"
          >
            {{ t.nav.links }}
            <span class="drawer-chevron" :class="{ open: mobileLinksOpen }" aria-hidden="true">›</span>
          </button>
          <div v-show="mobileLinksOpen" class="drawer-sublinks">
            <a
              v-for="link in externalLinks"
              :key="link.id"
              :href="link.href"
              class="drawer-sublink"
              target="_blank"
              rel="noopener noreferrer"
              @click="mobileMenuOpen = false"
            >
              {{ t.nav[link.id] }}
            </a>
          </div>
        </div>
      </div>
      <div class="drawer-footer">
        <LanguageSwitcher />
        <a href="mailto:brunolubamboadm@gmail.com" class="btn-cta" @click="mobileMenuOpen = false">
          {{ t.nav.cta }}
          <span class="spark"><svg><use href="#ic-spark" /></svg></span>
        </a>
      </div>
    </nav>
  </div>
</template>
