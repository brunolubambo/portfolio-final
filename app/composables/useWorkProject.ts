import type { WorkCollectionItem } from '@nuxt/content'

export async function useWorkProject(slug: string) {
  const { locale } = useLocale()

  const { data: variants, pending } = await useAsyncData(
    () => `work-${slug}-${locale.value}`,
    () =>
      queryCollection('work')
        .where('slug', '=', slug)
        .all(),
    { watch: [locale] },
  )

  const project = computed<WorkCollectionItem | null>(() => {
    const items = variants.value ?? []
    return (
      items.find((item) => item.locale === locale.value)
      ?? items.find((item) => item.locale === 'en')
      ?? items[0]
      ?? null
    )
  })

  return { project, pending }
}

export type { WorkCollectionItem }
