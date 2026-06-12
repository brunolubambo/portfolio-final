export default defineNuxtPlugin(() => {
  const { locale, initLocale } = useLocale()

  if (import.meta.client) {
    initLocale()
  } else {
    useHead({
      htmlAttrs: { lang: locale.value === 'pt' ? 'pt-BR' : 'en' },
    })
  }
})
