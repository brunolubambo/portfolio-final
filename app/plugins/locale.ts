import { LOCALE_COOKIE, type Locale } from '~/composables/useLocale'

export default defineNuxtPlugin(() => {
  const { locale, setLocale } = useLocale()

  if (import.meta.client) {
    const hasCookie = document.cookie.includes(`${LOCALE_COOKIE}=`)
    if (!hasCookie) {
      const stored = localStorage.getItem('locale')
      if (stored === 'en' || stored === 'pt') {
        setLocale(stored as Locale)
      }
    }

    watch(
      locale,
      (value) => {
        document.documentElement.lang = value === 'pt' ? 'pt-BR' : 'en'
      },
      { immediate: true },
    )
  }

  useHead({
    htmlAttrs: {
      lang: () => (locale.value === 'pt' ? 'pt-BR' : 'en'),
    },
  })
})
