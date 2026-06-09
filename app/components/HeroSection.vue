<template>
  <section class="relative mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
    <!-- Subtle background accent -->
    <div
      class="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-accent-muted/40 dark:bg-brand/20 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative">
      <!-- Label -->
      <p class="mb-5 inline-flex items-center gap-2 rounded-full border border-border dark:border-border-dark bg-bg-subtle dark:bg-surface-light px-3 py-1 text-xs font-medium uppercase tracking-widest text-text-secondary dark:text-text-muted">
        <span class="inline-block h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-light" aria-hidden="true" />
        Designer de Produto
      </p>

      <!-- Heading -->
      <h1 class="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-text-primary dark:text-text-inverted md:text-6xl">
        Bruno Lubambo
      </h1>

      <!-- Subheading -->
      <p class="max-w-2xl text-lg leading-relaxed text-text-secondary dark:text-text-muted md:text-xl">
        Designer na interseção entre design e engenharia — construindo produtos digitais
        acessíveis e de alto impacto para os setores público e privado.
      </p>

      <!-- Stats row -->
      <div class="mt-10 flex flex-wrap gap-8 border-t border-border dark:border-border-dark pt-8">
        <div>
          <p class="text-2xl font-bold text-text-primary dark:text-text-inverted">+30%</p>
          <p class="mt-1 text-xs text-text-muted uppercase tracking-wider">Engajamento</p>
        </div>
        <div>
          <p class="text-2xl font-bold text-text-primary dark:text-text-inverted">WCAG AA</p>
          <p class="mt-1 text-xs text-text-muted uppercase tracking-wider">Acessibilidade</p>
        </div>
        <div>
          <p class="text-2xl font-bold text-text-primary dark:text-text-inverted">3</p>
          <p class="mt-1 text-xs text-text-muted uppercase tracking-wider">Estudos de caso</p>
        </div>
        <div>
          <p class="text-2xl font-bold text-text-primary dark:text-text-inverted">Setor público</p>
          <p class="mt-1 text-xs text-text-muted uppercase tracking-wider">Especialização</p>
        </div>
      </div>

      <!-- CTA buttons -->
      <div class="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          class="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Ver trabalhos
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a
          href="/cv-bruno-lubambo.pdf"
          download
          class="inline-flex items-center gap-2 rounded-lg border border-border dark:border-border-dark bg-transparent px-5 py-2.5 text-sm font-medium text-text-primary dark:text-text-inverted hover:border-accent dark:hover:border-accent-light hover:text-accent dark:hover:text-accent-light transition-colors"
        >
          Baixar CV
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
