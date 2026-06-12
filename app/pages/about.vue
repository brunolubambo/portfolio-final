<script setup lang="ts">
definePageMeta({ layout: 'minimal' })

const { t } = useLocale()
const year = ref(new Date().getFullYear())

const skills = [
  'UX Design', 'UI Design', 'User Research', 'Prototyping',
  'Design Systems', 'Wireframing', 'Usability Testing',
  'Accessibility (WCAG)', 'Figma', 'Adobe XD', 'OutSystems',
  'Wix Studio', 'WordPress', 'Copywriting', 'Government Digital',
]

useHead(() => ({
  title: t.value.about.metaTitle,
  meta: [
    { name: 'description', content: t.value.about.metaDescription },
    { property: 'og:title', content: t.value.about.metaTitle },
    { property: 'og:description', content: t.value.about.ogDescription },
  ],
}))

onMounted(() => {
  document.body.classList.add('anim-ready')
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { (e.target as HTMLElement).classList.add('in'); io.unobserve(e.target) }
    }),
    { threshold: 0.1 }
  )
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => io.observe(el))
})
</script>

<template>
  <div>
    <AppNav active-page="about" />

    <!-- HERO -->
    <header class="about-hero">
      <div class="wrap">
        <div>
          <span class="eyebrow reveal">
            <span class="spark"><svg><use href="#ic-spark" /></svg></span>
            {{ t.about.eyebrow }}
          </span>
          <h1 class="reveal">
            <template v-for="(line, i) in t.about.title.split('\n')" :key="i">
              <template v-if="i > 0"><br></template>{{ line }}
            </template>
          </h1>
          <p class="reveal">
            {{ t.about.intro }}
          </p>
        </div>
        <div class="about-portrait reveal">
          <img
            src="/images/portrait.jpg"
            :alt="t.about.portraitAlt"
            class="portrait-img"
          />
        </div>
      </div>
    </header>

    <!-- STATS -->
    <section class="wrap" style="padding-bottom:0">
      <div class="about-stats reveal">
        <div class="stat">
          <p class="n">4</p>
          <p class="l">{{ t.about.stats.years }}</p>
        </div>
        <div class="stat">
          <p class="n">60+</p>
          <p class="l">{{ t.about.stats.portals }}</p>
        </div>
        <div class="stat">
          <p class="n">WCAG AA</p>
          <p class="l">{{ t.about.stats.accessibility }}</p>
        </div>
      </div>
    </section>

    <!-- BIO -->
    <section class="about-section">
      <div class="wrap">
        <div class="about-grid">
          <div>
            <span class="eyebrow reveal">
              <span class="spark"><svg><use href="#ic-spark" /></svg></span>
              {{ t.about.journeyEyebrow }}
            </span>
            <h3 class="reveal">{{ t.about.journeyTitle }}</h3>
          </div>
          <div class="about-body">
            <p class="reveal">{{ t.about.journeyP1 }}</p>
            <p class="reveal">{{ t.about.journeyP2 }}</p>
            <p class="reveal">{{ t.about.journeyP3 }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="about-section">
      <div class="wrap">
        <div class="about-grid">
          <div>
            <span class="eyebrow reveal">
              <span class="spark"><svg><use href="#ic-spark" /></svg></span>
              {{ t.about.experienceEyebrow }}
            </span>
            <h3 class="reveal">{{ t.about.experienceTitle }}</h3>
          </div>
          <div>
            <div class="exp-list">
              <div
                v-for="(item, i) in t.about.experience"
                :key="i"
                class="exp-item reveal"
              >
                <span class="yr">{{ item.yr }}</span>
                <span class="role">{{ item.role }}</span>
                <span class="org">{{ item.org }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="about-section">
      <div class="wrap">
        <div class="about-grid">
          <div>
            <span class="eyebrow reveal">
              <span class="spark"><svg><use href="#ic-spark" /></svg></span>
              {{ t.about.skillsEyebrow }}
            </span>
            <h3 class="reveal">{{ t.about.skillsTitle }}</h3>
          </div>
          <div class="reveal">
            <div class="skills">
              <span v-for="skill in skills" :key="skill" class="chip">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT FOOTER -->
    <footer class="contact">
      <div class="texture" aria-hidden="true" />
      <div class="wrap">
        <p class="label reveal">{{ t.home.contactLabel }}</p>
        <a href="mailto:brunolubamboadm@gmail.com" class="email reveal">
          <span class="spark spin"><svg><use href="#ic-spark" /></svg></span>
          <span class="txt">brunolubamboadm@gmail.com</span>
        </a>
        <div class="foot-row reveal">
          <div class="foot-socials">
            <a href="https://www.linkedin.com/in/brunolubambo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.behance.net/brunolubambo92" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="/Bruno_Lubambo_CV_ATS.pdf" target="_blank" rel="noopener noreferrer">Read.cv</a>
          </div>
          <p class="foot-copy">© {{ year }} Bruno Lubambo — {{ t.home.footCopy }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>
