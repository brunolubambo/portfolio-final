<script setup lang="ts">
definePageMeta({ layout: 'minimal' })

useHead({
  title: 'About — Bruno Lubambo',
  meta: [
    { name: 'description', content: 'UX/UI Designer with 4 years of experience. Copywriting background, specialised in user research, prototyping and design systems for the public sector.' },
    { property: 'og:title', content: 'About — Bruno Lubambo' },
    { property: 'og:description', content: 'UX/UI Designer with 4 years of experience, autonomously leading 60+ government portals at CODATA.' },
  ],
})

const year = ref(new Date().getFullYear())

const skills = [
  'UX Design', 'UI Design', 'User Research', 'Prototyping',
  'Design Systems', 'Wireframing', 'Usability Testing',
  'Accessibility (WCAG)', 'Figma', 'Adobe XD', 'OutSystems',
  'Wix Studio', 'WordPress', 'Copywriting', 'Government Digital',
]

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
      <div class="texture" aria-hidden="true" />
      <div class="wrap">
        <div>
          <span class="eyebrow reveal">
            <span class="spark"><svg><use href="#ic-spark" /></svg></span>
            Product Designer
          </span>
          <h1 class="reveal">Hi, I'm<br>Bruno Lubambo</h1>
          <p class="reveal">
            UX/UI Designer with 4 years of experience and a background in copywriting.
            Specialised in user research, prototyping and design systems —
            with a focus on accessibility and public sector interfaces.
          </p>
        </div>
        <div class="about-portrait reveal">
          <img
            src="/images/portrait.jpg"
            alt="Bruno Lubambo"
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
          <p class="l">Years of experience</p>
        </div>
        <div class="stat">
          <p class="n">60+</p>
          <p class="l">Government portals led</p>
        </div>
        <div class="stat">
          <p class="n">WCAG AA</p>
          <p class="l">Accessibility standard</p>
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
              About me
            </span>
            <h3 class="reveal">My journey</h3>
          </div>
          <div class="about-body">
            <p class="reveal">
              My design journey started with copywriting and advertising — which gave me a rare lens:
              designs that are not only visually engaging but also easy to understand.
              I learned to build experiences that communicate, not just look good.
            </p>
            <p class="reveal">
              Over the years I've worked across user research, wireframing, prototyping and
              usability testing using Figma, Adobe XD, Wix Studio and WordPress.
              At KREATIVSTORM, I sharpened the ability to design with users at the centre of every decision.
            </p>
            <p class="reveal">
              Since June 2025, I've been operating autonomously at <strong>CODATA</strong> (Paraíba, Brazil),
              leading UX/UI implementation and optimisation across 60+ government portals.
              I ensure alignment with official digital standards, bridge design and front-end development teams,
              and strategically use Figma as the foundation for scalable design systems.
            </p>
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
              Experience
            </span>
            <h3 class="reveal">Career</h3>
          </div>
          <div>
            <div class="exp-list">
              <div class="exp-item reveal">
                <span class="yr">Jun 2025 — present</span>
                <span class="role">UX/UI Designer</span>
                <span class="org">CODATA</span>
              </div>
              <div class="exp-item reveal">
                <span class="yr">2024</span>
                <span class="role">UX/UI Designer</span>
                <span class="org">ASCENDYnamic</span>
              </div>
              <div class="exp-item reveal">
                <span class="yr">2023</span>
                <span class="role">UX/UI Designer</span>
                <span class="org">Freelance</span>
              </div>
              <div class="exp-item reveal">
                <span class="yr">2022 — 2023</span>
                <span class="role">UX/UI Design Training</span>
                <span class="org">KREATIVSTORM</span>
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
              Skills
            </span>
            <h3 class="reveal">Toolbox</h3>
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
