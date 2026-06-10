<script setup lang="ts">
definePageMeta({ layout: 'minimal' })

const route = useRoute()
const slug = route.params.slug as string

const { data: project } = await useAsyncData(`work-${slug}`, () =>
  queryCollection('work').where('slug', '=', slug).first()
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useHead({
  title: `${project.value.title} — Bruno Lubambo`,
  meta: [
    { name: 'description', content: project.value.tagline },
    { property: 'og:title', content: `${project.value.title} — Bruno Lubambo` },
    { property: 'og:description', content: project.value.tagline },
    { property: 'og:image', content: project.value.cover ?? '/og-image.jpg' },
    { property: 'og:url', content: `https://brunolubambo.com/work/${slug}` },
  ],
})

</script>

<template>
  <div v-if="project">
    <AppNav active-page="work" />

    <CaseHero
      :title="project.title"
      :tagline="project.tagline"
      :cover="project.cover ?? '/images/work/placeholder.jpg'"
      :year="project.year"
      :area="project.area"
      :cover-dark="project.coverDark ?? false"
    />
    <CaseBody :project="project" />
    <CaseNav :current-order="project.order ?? 1" />
  </div>
</template>
