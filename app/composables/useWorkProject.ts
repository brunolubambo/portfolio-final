import type { WorkCollectionItem } from '@nuxt/content'

export async function useWorkProject(slug: string) {
  const { locale } = useLocale()

  const { data: project, pending } = await useAsyncData(
    () => `work-${slug}-${locale.value}`,
    async () => {
      const localized = await queryCollection('work')
        .where('slug', '=', slug)
        .where('locale', '=', locale.value)
        .first()

      if (localized) return localized

      return queryCollection('work')
        .where('slug', '=', slug)
        .where('locale', '=', 'en')
        .first()
    },
    { watch: [locale] },
  )

  return { project, pending }
}

export type { WorkCollectionItem }
