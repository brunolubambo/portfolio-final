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

const mobileMenuOpen = ref(false)
</script>

<template>
  <div v-if="project">
    <!-- SVG symbols -->
    <svg width="0" height="0" style="position:absolute" aria-hidden="true">
      <symbol id="ic-spark" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 0c.7 6.1 5.2 10.6 11.3 11.3v1.4C17.2 13.4 12.7 17.9 12 24c-.7-6.1-5.2-10.6-11.3-11.3v-1.4C6.8 10.6 11.3 6.1 12 0Z" />
        <path fill="currentColor" d="M19.5 1.8c.3 2.6 2.1 4.4 4.7 4.7v.5c-2.6.3-4.4 2.1-4.7 4.7h-.5c-.3-2.6-2.1-4.4-4.7-4.7v-.5c2.6-.3 4.4-2.1 4.7-4.7Z" opacity=".55" />
      </symbol>
      <symbol id="ic-menu" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 8h16M4 16h16" />
      </symbol>
    </svg>

    <!-- NAV -->
    <div class="nav-shell">
      <nav class="nav">
        <div class="nav-left">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        </div>
        <NuxtLink to="/" class="nav-brand">
          <span class="spark spin"><svg><use href="#ic-spark" /></svg></span>
          Bruno Lubambo
        </NuxtLink>
        <div class="nav-right">
          <a href="mailto:brunolubamboadm@gmail.com" class="btn-cta">
            Let's talk
            <span class="spark"><svg><use href="#ic-spark" /></svg></span>
          </a>
          <button class="nav-toggle" aria-label="Menu" @click="mobileMenuOpen = !mobileMenuOpen">
            <svg><use href="#ic-menu" /></svg>
          </button>
        </div>
      </nav>
      <div :class="['mobile-menu', { open: mobileMenuOpen }]">
        <NuxtLink to="/" @click="mobileMenuOpen = false">Home</NuxtLink>
        <NuxtLink to="/about" @click="mobileMenuOpen = false">About</NuxtLink>
        <a href="mailto:brunolubamboadm@gmail.com">Let's talk</a>
      </div>
    </div>

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
