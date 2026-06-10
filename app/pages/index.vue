<script setup lang="ts">
definePageMeta({ layout: 'minimal' })

useHead({
  title: 'Bruno Lubambo — Product Designer',
  meta: [
    { name: 'description', content: 'Bruno Lubambo — product designer at the intersection of design and engineering.' },
    { property: 'og:title', content: 'Bruno Lubambo — Product Designer' },
    { property: 'og:description', content: 'Product designer, design systems and mobile apps.' },
    { property: 'og:url', content: 'https://brunolubambo.com' },
    { property: 'og:image', content: '/og-image.jpg' },
  ],
})

const year = ref(new Date().getFullYear())

const tools = [
  { id: 'claude',  name: 'Claude' },
  { id: 'figma',   name: 'Figma' },
  { id: 'cursor',  name: 'Cursor' },
  { id: 'xd',      name: 'Adobe XD' },
  { id: 'slack',   name: 'Slack' },
]

onMounted(() => {
  document.body.classList.add('anim-ready')
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { (e.target as HTMLElement).classList.add('in'); io.unobserve(e.target) }
    }),
    { threshold: 0.12 }
  )
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => io.observe(el))
})
</script>

<template>
  <div>
    <AppNav active-page="home" />

    <!-- HERO -->
    <header class="hero">
      <div class="texture" aria-hidden="true" />
      <div class="wrap">
        <h1 class="reveal">
          Bruno Lubambo <span class="spark"><svg><use href="#ic-spark" /></svg></span>
          ux/ui designer <span class="spark"><svg><use href="#ic-spark" /></svg></span>
          design systems <span class="spark"><svg><use href="#ic-spark" /></svg></span>
          mobile apps
        </h1>
        <p class="hero-sub reveal">
          <a href="mailto:brunolubamboadm@gmail.com">Get in touch here</a>
          if you'd like to collaborate — or check out my work below.
        </p>
      </div>
    </header>

    <!-- LOGO STRIP — infinite marquee -->
    <section class="logos" aria-label="Tools I use">
      <div class="logos-track" aria-hidden="true">

        <!-- set 1 -->
        <template v-for="tool in tools" :key="tool.id">
          <span :class="`logo logo--${tool.id}`">
            <template v-if="tool.id === 'claude'">
              <span class="spark"><svg><use href="#ic-spark" /></svg></span>
            </template>
            <template v-else-if="tool.id === 'figma'">
              <svg viewBox="0 0 38 57" fill="none">
                <path d="M19 28.5a9.5 9.5 0 1 1 9.5 9.5H19V28.5Z" fill="#9b9b9c" />
                <path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5a9.5 9.5 0 0 0 0 19Z" fill="#838385" />
                <path d="M9.5 38H19V19H9.5a9.5 9.5 0 0 0 0 19Z" fill="#9b9b9c" />
                <path d="M9.5 19H19V0H9.5a9.5 9.5 0 0 0 0 19Z" fill="#838385" />
                <path d="M28.5 19H19V0h9.5a9.5 9.5 0 0 1 0 19Z" fill="#9b9b9c" />
              </svg>
            </template>
            <template v-else-if="tool.id === 'cursor'">
              <svg viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="5" fill="#9b9b9c" />
                <path d="M7 5h4.5L17 11.5V17l-3-3H7V5Z" fill="#1a1a1c" />
                <path d="M13.5 14l3.5 3.5" stroke="#1a1a1c" stroke-width="2" stroke-linecap="round" />
              </svg>
            </template>
            <template v-else-if="tool.id === 'xd'">
              <svg viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="5" fill="#9b9b9c" />
                <text x="3.5" y="17" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1a1a1c">Xd</text>
              </svg>
            </template>
            <template v-else-if="tool.id === 'slack'">
              <svg viewBox="0 0 24 24" fill="#9b9b9c">
                <path d="M5 15a2 2 0 1 1-2-2h2v2Zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5Z" />
                <path d="M9 5a2 2 0 1 1 2 2H9V5Zm0 1a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4h5Z" />
                <path d="M19 9a2 2 0 1 1 2 2h-2V9Zm-1 0a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0v5Z" />
                <path d="M15 19a2 2 0 1 1-2-2h2v2Zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5Z" />
              </svg>
            </template>
            {{ tool.name }}
          </span>
          <span class="logo-sep" aria-hidden="true">✦</span>
        </template>

        <!-- set 2 — seamless clone -->
        <template v-for="tool in tools" :key="`clone-${tool.id}`">
          <span :class="`logo logo--${tool.id}`">
            <template v-if="tool.id === 'claude'">
              <span class="spark"><svg><use href="#ic-spark" /></svg></span>
            </template>
            <template v-else-if="tool.id === 'figma'">
              <svg viewBox="0 0 38 57" fill="none">
                <path d="M19 28.5a9.5 9.5 0 1 1 9.5 9.5H19V28.5Z" fill="#9b9b9c" />
                <path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5a9.5 9.5 0 0 0 0 19Z" fill="#838385" />
                <path d="M9.5 38H19V19H9.5a9.5 9.5 0 0 0 0 19Z" fill="#9b9b9c" />
                <path d="M9.5 19H19V0H9.5a9.5 9.5 0 0 0 0 19Z" fill="#838385" />
                <path d="M28.5 19H19V0h9.5a9.5 9.5 0 0 1 0 19Z" fill="#9b9b9c" />
              </svg>
            </template>
            <template v-else-if="tool.id === 'cursor'">
              <svg viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="5" fill="#9b9b9c" />
                <path d="M7 5h4.5L17 11.5V17l-3-3H7V5Z" fill="#1a1a1c" />
                <path d="M13.5 14l3.5 3.5" stroke="#1a1a1c" stroke-width="2" stroke-linecap="round" />
              </svg>
            </template>
            <template v-else-if="tool.id === 'xd'">
              <svg viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="5" fill="#9b9b9c" />
                <text x="3.5" y="17" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1a1a1c">Xd</text>
              </svg>
            </template>
            <template v-else-if="tool.id === 'slack'">
              <svg viewBox="0 0 24 24" fill="#9b9b9c">
                <path d="M5 15a2 2 0 1 1-2-2h2v2Zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5Z" />
                <path d="M9 5a2 2 0 1 1 2 2H9V5Zm0 1a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4h5Z" />
                <path d="M19 9a2 2 0 1 1 2 2h-2V9Zm-1 0a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0v5Z" />
                <path d="M15 19a2 2 0 1 1-2-2h2v2Zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5Z" />
              </svg>
            </template>
            {{ tool.name }}
          </span>
          <span class="logo-sep" aria-hidden="true">✦</span>
        </template>

      </div>
    </section>

    <!-- WORK -->
    <main class="work">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="eyebrow">
            <span class="spark"><svg><use href="#ic-spark" /></svg></span>
            Selected work
          </span>
          <h2>Case studies</h2>
        </div>

        <div class="cards">
          <!-- card 1 — HarmonyMind -->
          <article class="card reveal">
            <NuxtLink to="/work/harmonymind" class="card-hit" aria-label="View case study: HarmonyMind" />
            <div class="card-body">
              <div class="card-meta">
                <span class="chip">2024</span>
                <span class="chip">product design</span>
              </div>
              <h3 class="card-title">HarmonyMind — reducing access barriers to public mental health services.</h3>
              <p class="card-role">Role — UX Designer & Researcher</p>
              <span class="card-link">
                View case study
                <span class="spark arrow"><svg><use href="#ic-arrow" /></svg></span>
              </span>
            </div>
            <div class="card-visual" aria-hidden="true">
              <NuxtImg src="/images/work/harmonymind/cover.png" alt="HarmonyMind app screens" loading="lazy" />
            </div>
          </article>

          <!-- card 2 — Dead Space -->
          <article class="card reveal">
            <NuxtLink to="/work/dead-space" class="card-hit" aria-label="View case study: Dead Space Diegetic UI Analysis" />
            <div class="card-body">
              <div class="card-meta">
                <span class="chip">2025</span>
                <span class="chip">ux research</span>
              </div>
              <h3 class="card-title">How Dead Space eliminated the HUD to become one of gaming's most terrifying experiences.</h3>
              <p class="card-role">Role — UX Researcher</p>
              <span class="card-link">
                View case study
                <span class="spark arrow"><svg><use href="#ic-arrow" /></svg></span>
              </span>
            </div>
            <div class="card-visual">
              <NuxtImg
                src="/images/work/dead-space/cover.png"
                alt="Dead Space — Diegetic UI Analysis"
                class="card-cover-img"
                width="600"
                height="400"
              />
            </div>
          </article>

          <!-- card 3 — Digital Key -->
          <article class="card reveal">
            <NuxtLink to="/work/digital-key" class="card-hit" aria-label="View case study: Digital Key NFT Acquisition" />
            <div class="card-body">
              <div class="card-meta">
                <span class="chip">2025</span>
                <span class="chip">product design</span>
              </div>
              <h3 class="card-title">Simplifying digital key (NFT) acquisition for an urban mobility service.</h3>
              <p class="card-role">Role — UX/Product Designer</p>
              <span class="card-link">
                View case study
                <span class="spark arrow"><svg><use href="#ic-arrow" /></svg></span>
              </span>
            </div>
            <div class="card-visual" aria-hidden="true">
              <NuxtImg src="/images/work/digital-key/iphone-pro.png" alt="Digital Key — VIP Key purchase flow on iPhone" loading="lazy" />
            </div>
          </article>

          <!-- card 5 — Polícia Civil -->
          <article class="card reveal">
            <NuxtLink to="/work/policia-civil" class="card-hit" aria-label="View case study: Polícia Civil PB Portal" />
            <div class="card-body">
              <div class="card-meta">
                <span class="chip">2025</span>
                <span class="chip">gov · ux/ui</span>
              </div>
              <h3 class="card-title">Redesigning the digital infrastructure of law enforcement in Paraíba.</h3>
              <p class="card-role">Role — UX/UI Designer at CODATA</p>
              <span class="card-link">
                View case study
                <span class="spark arrow"><svg><use href="#ic-arrow" /></svg></span>
              </span>
            </div>
            <div class="card-visual" aria-hidden="true">
              <NuxtImg src="/images/work/policia-civil/cover.png" alt="Polícia Civil portal — document management interface" loading="lazy" />
            </div>
          </article>
        </div>
      </div>
    </main>

    <!-- CONTACT -->
    <footer class="contact">
      <div class="texture" aria-hidden="true" />
      <div class="wrap">
        <p class="label reveal">Get in touch at</p>
        <a href="mailto:brunolubamboadm@gmail.com" class="email reveal">
          <span class="spark spin"><svg><use href="#ic-spark" /></svg></span>
          <span class="txt">brunolubamboadm@gmail.com</span>
        </a>
        <div class="foot-row reveal">
          <div class="foot-socials">
            <a href="https://www.linkedin.com/in/brunolubambo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.behance.net/brunolubambo92" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="https://read.cv/brunolubambo" target="_blank" rel="noopener noreferrer">Read.cv</a>
          </div>
          <p class="foot-copy">© {{ year }} Bruno Lubambo — made with care.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
