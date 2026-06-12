import en from '~/locales/en'
import pt from '~/locales/pt'

export type Locale = 'en' | 'pt'

const messages = { en, pt } as const
const LOCALE_COOKIE = 'portfolio-locale'

function resolveLocale(value: string | null | undefined): Locale {
  return value === 'pt' ? 'pt' : 'en'
}

export function useLocale() {
  const localeCookie = useCookie<Locale>(LOCALE_COOKIE, {
    default: () => 'en',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })

  const locale = useState<Locale>('locale', () => resolveLocale(localeCookie.value))

  if (localeCookie.value && localeCookie.value !== locale.value) {
    locale.value = resolveLocale(localeCookie.value)
  }

  const t = computed(() => messages[locale.value])

  function setLocale(next: Locale) {
    locale.value = next
    localeCookie.value = next
    if (import.meta.client) {
      localStorage.setItem('locale', next)
      document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en'
    }
  }

  function initLocale() {
    if (!import.meta.client) return
    const stored = localStorage.getItem('locale')
    if (stored === 'en' || stored === 'pt') {
      setLocale(stored)
      return
    }
    document.documentElement.lang = locale.value === 'pt' ? 'pt-BR' : 'en'
  }

  return { locale, t, setLocale, initLocale }
}
