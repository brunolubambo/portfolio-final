<template>
  <footer class="border-t border-border dark:border-border-dark py-10">
    <div class="mx-auto max-w-5xl px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-sm text-text-muted">
        © {{ new Date().getFullYear() }} Bruno Lubambo. Construído com Nuxt e Tailwind CSS.
      </p>
      <div class="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/brunolubambo"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-text-muted hover:text-accent dark:hover:text-accent-light transition-colors"
          aria-label="LinkedIn de Bruno Lubambo (abre em nova aba)"
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:brunolubambo@gmail.com"
          class="text-sm text-text-muted hover:text-accent dark:hover:text-accent-light transition-colors"
        >
          E-mail
        </a>
      </div>
    </div>
  </footer>
</template>
