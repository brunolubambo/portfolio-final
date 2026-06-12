import en from '~/locales/en'
import pt from '~/locales/pt'

export type Locale = 'en' | 'pt'

const messages = { en, pt } as const
export const LOCALE_COOKIE = 'portfolio-locale'

function resolveLocale(value: string | null | undefined): Locale {
  return value === 'pt' ? 'pt' : 'en'
}

export function useLocale() {
  const localeCookie = useCookie<Locale>(LOCALE_COOKIE, {
    default: () => 'en',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })

  const locale = computed(() => resolveLocale(localeCookie.value))

  const t = computed(() => messages[locale.value])

  function setLocale(next: Locale) {
    localeCookie.value = next
    if (import.meta.client) {
      document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en'
    }
  }

  return { locale, t, setLocale }
}
