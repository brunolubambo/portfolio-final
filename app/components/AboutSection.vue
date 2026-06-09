<template>
  <section id="about" class="mx-auto max-w-5xl px-6 py-16">
    <div class="border-t border-border dark:border-border-dark pt-16">
      <h2 class="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
        Sobre
      </h2>
      <p class="mb-10 text-sm text-text-secondary dark:text-text-muted max-w-xl">
        Background, especialização e o que me move como designer.
      </p>

      <div class="grid gap-12 md:grid-cols-2">
        <!-- Bio -->
        <div>
          <p class="text-base leading-relaxed text-text-secondary dark:text-text-muted">
            Designer de produto com experiência em desenvolvimento frontend, especializado em
            interfaces acessíveis e orientadas a dados para os setores público e privado.
            Baseado em Portugal.
          </p>
          <p class="mt-4 text-base leading-relaxed text-text-secondary dark:text-text-muted">
            Trabalho na interseção entre sistemas de design, acessibilidade (WCAG AA/AAA) e
            engenharia — conectando intenção de design e qualidade de implementação.
            Tenho experiência direta com conformidade LGPD e projetos de governo digital.
          </p>
          <p class="mt-4 text-base leading-relaxed text-text-secondary dark:text-text-muted">
            Acredito que o portfólio mais honesto de um designer é o próprio site —
            onde processo, decisão e execução estão visíveis para quem quiser inspecionar.
          </p>

          <!-- Skills tags -->
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="skill in skills"
              :key="skill"
              class="rounded-full border border-border dark:border-border-dark px-3 py-1 text-xs text-text-secondary dark:text-text-muted"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Actions + Highlights -->
        <div class="flex flex-col gap-6">
          <!-- CTA buttons -->
          <div class="flex flex-col gap-3">
            <a
              href="/cv-bruno-lubambo.pdf"
              download
              class="inline-flex w-fit items-center gap-2 rounded-lg border border-border dark:border-border-dark px-4 py-2.5 text-sm font-medium text-text-primary dark:text-text-inverted hover:border-accent dark:hover:border-accent-light hover:text-accent dark:hover:text-accent-light transition-colors"
            >
              Baixar CV
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/brunolubambo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-fit items-center gap-2 rounded-lg border border-border dark:border-border-dark px-4 py-2.5 text-sm font-medium text-text-primary dark:text-text-inverted hover:border-accent dark:hover:border-accent-light hover:text-accent dark:hover:text-accent-light transition-colors"
              aria-label="Perfil no LinkedIn (abre em nova aba)"
            >
              LinkedIn ↗
            </a>
          </div>

          <!-- Highlights -->
          <div class="mt-2 grid grid-cols-2 gap-4">
            <div
              v-for="highlight in highlights"
              :key="highlight.label"
              class="rounded-lg border border-border dark:border-border-dark bg-bg-subtle dark:bg-surface-light p-4"
            >
              <p class="text-xl font-bold text-accent dark:text-accent-light">{{ highlight.value }}</p>
              <p class="mt-1 text-xs text-text-muted leading-snug">{{ highlight.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  'Product Design', 'UX Research', 'Design Systems',
  'WCAG AA/AAA', 'Figma', 'Vue / Nuxt',
  'Tailwind CSS', 'Governo Digital', 'LGPD',
]

const highlights = [
  { value: '+30%', label: 'Aumento de engajamento na ASCENDynamics' },
  { value: 'WCAG AA', label: 'Conformidade de acessibilidade nos projetos' },
  { value: '3+', label: 'Anos em design para o setor público' },
  { value: '100%', label: 'Score de acessibilidade no Lighthouse (meta)' },
]
</script>
