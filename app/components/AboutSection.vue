<template>
  <section id="about" class="mx-auto max-w-5xl px-6 py-16">
    <div class="border-t border-[#2A2A2A] dark:border-[#2A2A2A] pt-16">
      <h2 class="mb-10 text-xs font-medium uppercase tracking-widest text-[#888888]">
        About
      </h2>
      <div class="grid gap-12 md:grid-cols-2">
        <div>
          <p class="text-base leading-relaxed text-[#666666] dark:text-[#888888]">
            Product designer with a background in frontend development, specializing in accessible, data-driven interfaces for the public and private sector. Based in Portugal.
          </p>
          <p class="mt-4 text-base leading-relaxed text-[#666666] dark:text-[#888888]">
            I work at the intersection of design systems, accessibility (WCAG AA/AAA), and engineering — bridging the gap between design intent and implementation quality.
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <a
            href="/cv-bruno-lubambo.pdf"
            download
            class="inline-flex w-fit items-center gap-2 rounded border border-[#2A2A2A] dark:border-[#2A2A2A] px-4 py-2 text-sm text-[#0D0D0D] dark:text-[#F0F0F0] transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
