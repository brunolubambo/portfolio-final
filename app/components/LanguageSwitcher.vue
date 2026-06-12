<script setup lang="ts">
import type { Locale } from '~/composables/useLocale'

const { locale, setLocale } = useLocale()

const options: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
]
</script>

<template>
  <div class="lang-switch" role="group" :aria-label="locale === 'pt' ? 'Idioma' : 'Language'">
    <button
      v-for="opt in options"
      :key="opt.code"
      type="button"
      class="lang-btn"
      :class="{ 'is-active': locale === opt.code }"
      :aria-pressed="locale === opt.code"
      @click="setLocale(opt.code)"
    >
      {{ opt.label }}
    </button>
  </div>
</template>
