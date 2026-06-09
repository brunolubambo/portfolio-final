<template>
  <section id="contact" class="mx-auto max-w-5xl px-6 py-16">
    <div class="border-t border-border dark:border-border-dark pt-16 pb-8">
      <h2 class="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
        Contato
      </h2>
      <p class="mb-10 text-sm text-text-secondary dark:text-text-muted max-w-xl">
        Aberto a oportunidades de trabalho e colaborações. Respondo em até 48 horas.
      </p>

      <div class="grid gap-8 md:grid-cols-2">
        <!-- Links -->
        <div class="flex flex-col gap-4">
          <a
            href="mailto:brunolubambo@gmail.com"
            class="group flex items-center gap-4 rounded-xl border border-border dark:border-border-dark bg-bg-card dark:bg-bg-card-dark p-4 hover:border-accent/40 dark:hover:border-accent-light/30 transition-all"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted dark:bg-brand/30 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent dark:text-accent-light" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-text-muted uppercase tracking-wider mb-0.5">E-mail</p>
              <p class="text-sm font-medium text-text-primary dark:text-text-inverted group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                brunolubambo@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/brunolubambo"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 rounded-xl border border-border dark:border-border-dark bg-bg-card dark:bg-bg-card-dark p-4 hover:border-accent/40 dark:hover:border-accent-light/30 transition-all"
            aria-label="LinkedIn de Bruno Lubambo (abre em nova aba)"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted dark:bg-brand/30 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent dark:text-accent-light" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-text-muted uppercase tracking-wider mb-0.5">LinkedIn</p>
              <p class="text-sm font-medium text-text-primary dark:text-text-inverted group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                linkedin.com/in/brunolubambo ↗
              </p>
            </div>
          </a>
        </div>

        <!-- Message -->
        <div class="flex items-start">
          <blockquote class="border-l-2 border-accent dark:border-accent-light pl-4">
            <p class="text-base leading-relaxed text-text-secondary dark:text-text-muted italic">
              "Estou disponível para projetos de médio a longo prazo, com foco especial em
              interfaces de serviços públicos, sistemas de design e projetos onde a
              acessibilidade é requisito, não opcional."
            </p>
            <footer class="mt-3 text-xs text-text-muted">— Bruno Lubambo</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
