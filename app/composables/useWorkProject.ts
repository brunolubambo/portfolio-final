import type { WorkCollectionItem } from '@nuxt/content'

export async function useWorkProject(slug: string) {
  const { locale } = useLocale()

  const { data: variants, pending } = await useAsyncData(
    `work-${slug}`,
    () =>
      queryCollection('work')
        .where('slug', '=', slug)
        .all(),
    { server: true },
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
