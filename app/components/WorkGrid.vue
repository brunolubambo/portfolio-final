<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('work').order('order', 'ASC').all()
)
</script>

<template>
  <section id="work" class="mx-auto max-w-5xl px-6 py-16">
    <h2 class="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
      Trabalhos Selecionados
    </h2>
    <p class="mb-10 text-sm text-text-secondary dark:text-text-muted max-w-xl">
      Estudos de caso com narrativa completa — contexto, processo e resultado mensurável.
    </p>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WorkCard
        v-for="project in projects"
        :key="project.slug ?? project.path"
        :title="project.title"
        :tagline="project.tagline"
        :year="project.year"
        :area="project.area"
        :cover="project.cover ?? '/images/work/placeholder.jpg'"
        :slug="project.slug ?? project.path?.split('/').pop() ?? ''"
      />
    </div>
  </section>
</template>
