<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: project } = await useAsyncData(`work-${slug}`, () =>
  queryCollection('work').where('slug', '==', slug).first()
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useHead({
  title: `${project.value.title} — Bruno Lubambo`,
  meta: [
    { name: 'description', content: project.value.tagline },
  ],
})
</script>

<template>
  <div v-if="project">
    <CaseHero
      :title="project.title"
      :tagline="project.tagline"
      :cover="project.cover ?? '/images/work/placeholder.jpg'"
      :year="project.year"
      :area="project.area"
    />
    <CaseBody :project="project" />
    <CaseNav :current-order="project.order ?? 1" />
  </div>
</template>
