<script setup lang="ts">
definePageMeta({ layout: 'minimal' })

const { t } = useLocale()
const year = ref(new Date().getFullYear())

useHead(() => ({
  title: t.value.home.metaTitle,
  meta: [
    { name: 'description', content: t.value.home.metaDescription },
    { property: 'og:title', content: t.value.home.metaTitle },
    { property: 'og:description', content: t.value.home.ogDescription },
    { property: 'og:url', content: 'https://brunolubambo.com' },
    { property: 'og:image', content: '/og-image.jpg' },
  ],
}))

const tools = [
  { id: 'claude',  name: 'Claude' },
  { id: 'figma',   name: 'Figma' },
  { id: 'cursor',  name: 'Cursor' },
  { id: 'xd',      name: 'Adobe XD' },
  { id: 'slack',   name: 'Slack' },
]

let _scrollTriggerInstance: { kill: () => void } | null = null

onMounted(async () => {
  document.body.classList.add('anim-ready')
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { (e.target as HTMLElement).classList.add('in'); io.unobserve(e.target) }
    }),
    { threshold: 0.12 }
  )
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => io.observe(el))

  // Stacked deck flip — triggered only when mouse is over the cards
  if (window.matchMedia('(hover: hover) and (min-width: 1025px)').matches) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    const cards = gsap.utils.toArray<HTMLElement>('.card')
    const cardsEl = document.querySelector<HTMLElement>('.cards')!
    let current = 0
    let animating = false
    let cooldown = false   // absorbs trackpad inertia after last flip

    // Stack: card 0 on top, cards behind slightly smaller
    cards.forEach((card, i) => {
      gsap.set(card, {
        zIndex: cards.length - i,
        transformPerspective: 1000,
        transformOrigin: '50% 0%',
      })
      if (i > 0) gsap.set(card, { scale: 1 - i * 0.03, y: i * 8 })
    })

    const afterFlip = () => {
      animating = false
      cooldown = true
      setTimeout(() => { cooldown = false }, 200) // absorb inertia without blocking next flip
    }

    const goNext = (): boolean => {
      if (current >= cards.length - 1 || animating) return false
      animating = true
      gsap.to(cards[current], { rotateX: -90, opacity: 0, duration: 0.65, ease: 'power2.inOut' })
      current++
      gsap.to(cards[current], { scale: 1, y: 0, duration: 0.65, ease: 'power2.out', onComplete: afterFlip })
      return true
    }

    const goPrev = (): boolean => {
      if (current <= 0 || animating) return false
      animating = true
      gsap.to(cards[current], { scale: 1 - current * 0.03, y: current * 8, duration: 0.65, ease: 'power2.inOut' })
      current--
      gsap.to(cards[current], { rotateX: 0, opacity: 1, duration: 0.65, ease: 'power2.out', onComplete: afterFlip })
      return true
    }

    // Track mouse position to know if it's over the cards area
    let mx = 0, my = 0
    const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMouseMove)

    // Accumulate deltaY so one scroll gesture = one flip
    let acc = 0
    let accTimer: ReturnType<typeof setTimeout> | null = null
    const FLIP_THRESHOLD = 60  // accumulated delta to trigger one flip

    const onWheel = (e: WheelEvent) => {
      const r = cardsEl.getBoundingClientRect()
      const over = mx >= r.left && mx <= r.right && my >= r.top && my <= r.bottom
      if (!over) return

      const goingDown = e.deltaY > 0
      const goingUp   = e.deltaY < 0
      const atEnd     = current >= cards.length - 1
      const atStart   = current <= 0

      // Always block page scroll while inside the deck (except at true boundaries)
      if ((goingDown && (!atEnd || animating || cooldown)) ||
          (goingUp   && (!atStart || animating || cooldown))) {
        e.preventDefault()
      } else {
        return // at boundary + not busy → let page scroll
      }

      if (animating) return // don't accumulate mid-flip

      // Accumulate and reset after 150ms silence (new gesture = fresh start)
      acc += e.deltaY
      if (accTimer) clearTimeout(accTimer)
      accTimer = setTimeout(() => { acc = 0 }, 150)

      if (acc >= FLIP_THRESHOLD) {
        acc = 0
        goNext()
      } else if (acc <= -FLIP_THRESHOLD) {
        acc = 0
        goPrev()
      }
    }

    document.addEventListener('wheel', onWheel, { passive: false })

    _scrollTriggerInstance = {
      kill: () => {
        document.removeEventListener('wheel', onWheel)
        document.removeEventListener('mousemove', onMouseMove)
        ScrollTrigger.getAll().forEach(t => t.kill())
      },
    }
  }
})

onUnmounted(() => {
  if (_scrollTriggerInstance) _scrollTriggerInstance.kill()
})
</script>

<template>
  <div>
    <AppNav active-page="home" />

    <!-- HERO -->
    <header class="hero">
      <div class="wrap">
        <h1 class="hero-title reveal">{{ t.home.heroTitle }}</h1>
        <h2 class="hero-tagline reveal">
          <span v-for="line in t.home.heroTaglines" :key="line" class="hero-tagline-line">
            <span class="spark spin"><svg><use href="#ic-spark" /></svg></span>
            {{ line }}
          </span>
        </h2>
        <p class="hero-sub reveal">
          <a href="mailto:brunolubamboadm@gmail.com">{{ t.home.heroSubPrefix }}</a>
          {{ t.home.heroSubSuffix }}
        </p>
      </div>
    </header>

    <!-- LOGO STRIP — infinite marquee -->
    <section class="logos" :aria-label="t.home.toolsAria">
      <div class="logos-track" aria-hidden="true">

        <!-- set 1 -->
        <template v-for="tool in tools" :key="tool.id">
          <span :class="`logo logo--${tool.id}`">
            <template v-if="tool.id === 'claude'">
              <img src="/images/tools/claude.png" alt="Claude" class="logo-img" />
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
              <img src="/images/tools/cursor.png" alt="Cursor" class="logo-img" />
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
              <img src="/images/tools/claude.png" alt="Claude" class="logo-img" />
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
              <img src="/images/tools/cursor.png" alt="Cursor" class="logo-img" />
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
            {{ t.home.workEyebrow }}
          </span>
          <h2>{{ t.home.workTitle }}</h2>
        </div>

        <div class="cards">
          <!-- card 1 — Dead Space -->
          <article class="card">
            <NuxtLink to="/work/dead-space" class="card-hit" :aria-label="t.home.cases.deadSpace.aria" />
            <div class="card-body">
              <div class="card-meta">
                <span class="chip">2025</span>
                <span class="chip">{{ t.home.cases.deadSpace.chip }}</span>
              </div>
              <h3 class="card-title">{{ t.home.cases.deadSpace.title }}</h3>
              <p class="card-role">{{ t.home.role }} — {{ t.home.cases.deadSpace.role }}</p>
              <span class="card-link">
                {{ t.home.viewCase }}
                <span class="spark arrow"><svg><use href="#ic-arrow" /></svg></span>
              </span>
            </div>
            <div class="card-visual">
              <NuxtImg
                src="/images/work/dead-space/cover.png"
                :alt="t.home.cases.deadSpace.alt"
                class="card-cover-img"
                width="600"
                height="400"
              />
            </div>
          </article>

          <!-- card 2 — Skill Tree Valhalla -->
          <article class="card">
            <NuxtLink to="/work/skill-tree-valhalla" class="card-hit" :aria-label="t.home.cases.skillTreeValhalla.aria" />
            <div class="card-body">
              <div class="card-meta">
                <span class="chip">2026</span>
                <span class="chip">{{ t.home.cases.skillTreeValhalla.chip }}</span>
              </div>
              <h3 class="card-title">{{ t.home.cases.skillTreeValhalla.title }}</h3>
              <p class="card-role">{{ t.home.role }} — {{ t.home.cases.skillTreeValhalla.role }}</p>
              <span class="card-link">
                {{ t.home.viewCase }}
                <span class="spark arrow"><svg><use href="#ic-arrow" /></svg></span>
              </span>
            </div>
            <div class="card-visual" aria-hidden="true">
              <NuxtImg
                src="/images/work/skill-tree-valhalla/cover.png"
                :alt="t.home.cases.skillTreeValhalla.alt"
                class="card-cover-img"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </article>

          <!-- card 3 — Digital Key -->
          <article class="card">
            <NuxtLink to="/work/digital-key" class="card-hit" :aria-label="t.home.cases.digitalKey.aria" />
            <div class="card-body">
              <div class="card-meta">
                <span class="chip">2025</span>
                <span class="chip">{{ t.home.cases.digitalKey.chip }}</span>
              </div>
              <h3 class="card-title">{{ t.home.cases.digitalKey.title }}</h3>
              <p class="card-role">{{ t.home.role }} — {{ t.home.cases.digitalKey.role }}</p>
              <span class="card-link">
                {{ t.home.viewCase }}
                <span class="spark arrow"><svg><use href="#ic-arrow" /></svg></span>
              </span>
            </div>
            <div class="card-visual" aria-hidden="true">
              <NuxtImg src="/images/work/digital-key/iphone-16.png" :alt="t.home.cases.digitalKey.alt" loading="lazy" />
            </div>
          </article>

          <!-- card 4 — HarmonyMind -->
          <article class="card">
            <NuxtLink to="/work/harmonymind" class="card-hit" :aria-label="t.home.cases.harmonymind.aria" />
            <div class="card-body">
              <div class="card-meta">
                <span class="chip">2024</span>
                <span class="chip">{{ t.home.cases.harmonymind.chip }}</span>
              </div>
              <h3 class="card-title">{{ t.home.cases.harmonymind.title }}</h3>
              <p class="card-role">{{ t.home.role }} — {{ t.home.cases.harmonymind.role }}</p>
              <span class="card-link">
                {{ t.home.viewCase }}
                <span class="spark arrow"><svg><use href="#ic-arrow" /></svg></span>
              </span>
            </div>
            <div class="card-visual" aria-hidden="true">
              <NuxtImg src="/images/work/harmonymind/cover.png" :alt="t.home.cases.harmonymind.alt" loading="lazy" />
            </div>
          </article>
        </div>
      </div>
    </main>

    <!-- CONTACT -->
    <footer class="contact">
      <div class="wrap">
        <p class="label reveal">{{ t.home.contactLabel }}</p>
        <a href="mailto:brunolubamboadm@gmail.com" class="email reveal">
          <span class="spark spin"><svg><use href="#ic-spark" /></svg></span>
          <span class="txt">brunolubamboadm@gmail.com</span>
        </a>
        <div class="foot-row reveal">
          <p class="foot-copy">© {{ year }} Bruno Lubambo — {{ t.home.footCopy }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>
