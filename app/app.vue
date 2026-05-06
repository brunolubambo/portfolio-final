<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null)
const isTouchDevice = ref(false)

const GLOW_RADIUS = 120

let animFrameId = 0
let mouseX = 0
let mouseY = 0
let renderX = 0
let renderY = 0
let mouseActive = false

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 2 + Math.random() * 3,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 20 + Math.random() * 25,
  delay: Math.random() * -30,
  driftX: -30 + Math.random() * 60,
  driftY: -40 + Math.random() * 80,
  opacity: 0.15 + Math.random() * 0.3,
  color: ['#6366f1', '#818cf8', '#93c5fd', '#a5b4fc', '#c7d2fe'][Math.floor(Math.random() * 5)],
}))

function onMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
  if (!mouseActive) mouseActive = true
}

function onMouseLeave() {
  mouseActive = false
}

function drawGlow() {
  const canvas = canvasRef.value
  if (!canvas) {
    animFrameId = requestAnimationFrame(drawGlow)
    return
  }

  const ctx = canvas.getContext('2d')
  if (!ctx) {
    animFrameId = requestAnimationFrame(drawGlow)
    return
  }

  if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  renderX += (mouseX - renderX) * 0.15
  renderY += (mouseY - renderY) * 0.15

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (mouseActive) {
    const glow = ctx.createRadialGradient(
      renderX, renderY, 0,
      renderX, renderY, GLOW_RADIUS,
    )
    glow.addColorStop(0, 'rgba(99, 102, 241, 0.18)')
    glow.addColorStop(0.3, 'rgba(129, 140, 248, 0.10)')
    glow.addColorStop(0.6, 'rgba(147, 197, 253, 0.04)')
    glow.addColorStop(1, 'rgba(99, 102, 241, 0)')

    ctx.beginPath()
    ctx.arc(renderX, renderY, GLOW_RADIUS, 0, Math.PI * 2)
    ctx.fillStyle = glow
    ctx.fill()
  }

  animFrameId = requestAnimationFrame(drawGlow)
}

onMounted(() => {
  isTouchDevice.value = window.matchMedia('(hover: none)').matches

  if (!isTouchDevice.value) {
    window.addEventListener('mousemove', onMouseMove)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    animFrameId = requestAnimationFrame(drawGlow)
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.documentElement.removeEventListener('mouseleave', onMouseLeave)
  cancelAnimationFrame(animFrameId)
})
</script>

<template>
  <div class="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">

    <!-- Cursor glow -->
    <canvas
      v-if="!isTouchDevice"
      ref="canvasRef"
      class="cursor-canvas"
    />

    <!-- Floating particles -->
    <div v-if="!isTouchDevice" class="particles-container" aria-hidden="true">
      <div
        v-for="p in particles"
        :key="p.id"
        class="particle"
        :style="{
          width: `${p.size}px`,
          height: `${p.size}px`,
          left: `${p.x}%`,
          top: `${p.y}%`,
          backgroundColor: p.color,
          opacity: p.opacity,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
          '--drift-x': `${p.driftX}px`,
          '--drift-y': `${p.driftY}px`,
        }"
      />
    </div>

    <!-- HEADER -->
    <header class="flex justify-between items-center py-6 px-8 md:px-16 max-w-7xl mx-auto relative z-10">
      <div class="font-bold text-xl tracking-tight">Bruno Lubambo</div>
      
      <nav class="hidden md:flex gap-8 text-sm font-medium text-slate-500">
        <a href="#work" class="hover:text-slate-900 transition-colors">Work</a>
        <a href="#about" class="hover:text-slate-900 transition-colors">About</a>
        <a href="#contact" class="hover:text-slate-900 transition-colors">Contact</a>
      </nav>
      
      <a href="#contact" class="bg-[#6366f1] hover:bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors">
        Let's talk
      </a>
    </header>

    <!-- HERO SECTION -->
    <main class="px-8 md:px-16 mt-20 md:mt-32 max-w-7xl mx-auto relative z-10">
      
      <!-- Eyebrow -->
      <p class="text-[#6366f1] font-bold tracking-widest text-xs mb-6 uppercase">
        UX/UI Designer &mdash; 4 years of experience
      </p>
      
      <!-- Headline -->
      <h1 class="text-6xl md:text-8xl font-black leading-[1.05] tracking-tight mb-8 max-w-4xl">
        Design that<br>
        works<br>
        in Figma<br>
        <span class="text-[#6366f1]">and in code.</span>
      </h1>
      
      <!-- Subheadline -->
      <p class="text-slate-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
        I lead UX/UI for 60+ government portals at CODATA, working across the full cycle &mdash; user research, wireframes, design systems, prototyping, and front-end development with a focus on accessibility and usability.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 mb-16">
        <a href="#work" class="bg-[#6366f1] hover:bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors text-center">
          See my work
        </a>
        <a href="#about" class="border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
          About me <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <!-- Tech Stack Pills -->
      <div class="flex gap-3 flex-wrap">
        <span class="border border-slate-200 px-5 py-1.5 rounded-full text-sm font-medium text-slate-500">Figma</span>
        <span class="border border-slate-200 px-5 py-1.5 rounded-full text-sm font-medium text-slate-500">User Research</span>
        <span class="border border-slate-200 px-5 py-1.5 rounded-full text-sm font-medium text-slate-500">Prototyping</span>
        <span class="border border-slate-200 px-5 py-1.5 rounded-full text-sm font-medium text-slate-500">Design Systems</span>
        <span class="border border-slate-200 px-5 py-1.5 rounded-full text-sm font-medium text-slate-500">OutSystems</span>
        <span class="border border-slate-200 px-5 py-1.5 rounded-full text-sm font-medium text-slate-500">WCAG AA</span>
      </div>

    </main>

    <!-- WORK SECTION -->
    <section id="work" class="px-8 md:px-16 py-24 md:py-32 max-w-7xl mx-auto relative z-10">
      <p class="text-[#6366f1] font-bold tracking-widest text-xs mb-4 uppercase">Selected Work</p>
      <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-16">Projects &amp; Experience</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- CODATA -->
        <div class="group border border-slate-200 rounded-2xl p-8 hover:border-[#6366f1]/30 hover:shadow-lg transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-3 h-3 rounded-full bg-[#6366f1]"></span>
            <span class="text-xs font-bold tracking-widest text-slate-400 uppercase">Jun 2025 &mdash; Present</span>
          </div>
          <h3 class="text-2xl font-bold mb-2">CODATA &mdash; Governo da Para&iacute;ba</h3>
          <p class="text-sm text-[#6366f1] font-semibold mb-4">UX/UI Designer</p>
          <p class="text-slate-500 leading-relaxed mb-6">
            Leading UX/UI design and implementation for 60+ government portals with full autonomy. Responsible for alignment with official digital standards, design system strategy in Figma, front-end integration, and a strong focus on accessibility, usability, and mobile optimization.
          </p>
          <div class="flex gap-2 flex-wrap">
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">Figma</span>
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">Design Systems</span>
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">OutSystems</span>
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">WCAG AA</span>
          </div>
        </div>

        <!-- ASCENDYnamic -->
        <div class="group border border-slate-200 rounded-2xl p-8 hover:border-[#6366f1]/30 hover:shadow-lg transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-3 h-3 rounded-full bg-[#818cf8]"></span>
            <span class="text-xs font-bold tracking-widest text-slate-400 uppercase">Previous Role</span>
          </div>
          <h3 class="text-2xl font-bold mb-2">ASCENDYnamic</h3>
          <p class="text-sm text-[#6366f1] font-semibold mb-4">UX/UI Designer</p>
          <p class="text-slate-500 leading-relaxed mb-6">
            Built platforms connecting startups and freelancers, focusing on creating experiences that feel natural and intuitive. Designed end-to-end user flows from research to high-fidelity prototypes, ensuring seamless onboarding and engagement.
          </p>
          <div class="flex gap-2 flex-wrap">
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">User Research</span>
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">Prototyping</span>
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">Figma</span>
          </div>
        </div>

        <!-- KREATIVSTORM -->
        <div class="group border border-slate-200 rounded-2xl p-8 hover:border-[#6366f1]/30 hover:shadow-lg transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-3 h-3 rounded-full bg-[#93c5fd]"></span>
            <span class="text-xs font-bold tracking-widest text-slate-400 uppercase">Training</span>
          </div>
          <h3 class="text-2xl font-bold mb-2">KREATIVSTORM</h3>
          <p class="text-sm text-[#6366f1] font-semibold mb-4">UX Design Program</p>
          <p class="text-slate-500 leading-relaxed mb-6">
            Intensive training that sharpened my ability to design with users in mind. Deepened expertise in user-centered design methodologies, usability testing, and translating research insights into actionable design decisions.
          </p>
          <div class="flex gap-2 flex-wrap">
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">UX Design</span>
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">Usability Testing</span>
          </div>
        </div>

        <!-- Freelance -->
        <div class="group border border-slate-200 rounded-2xl p-8 hover:border-[#6366f1]/30 hover:shadow-lg transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-3 h-3 rounded-full bg-[#a5b4fc]"></span>
            <span class="text-xs font-bold tracking-widest text-slate-400 uppercase">Ongoing</span>
          </div>
          <h3 class="text-2xl font-bold mb-2">Freelance Projects</h3>
          <p class="text-sm text-[#6366f1] font-semibold mb-4">UX/UI &amp; Web Design</p>
          <p class="text-slate-500 leading-relaxed mb-6">
            Delivering cross-industry design solutions that blend innovation and practicality. From landing pages to full web apps, each project pushes creative limits while focusing on real user needs and business goals.
          </p>
          <div class="flex gap-2 flex-wrap">
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">Wix Studio</span>
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">WordPress</span>
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">Adobe XD</span>
            <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">Webflow</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="px-8 md:px-16 py-24 md:py-32 max-w-7xl mx-auto relative z-10">
      <div class="grid md:grid-cols-5 gap-16 items-start">
        <div class="md:col-span-3">
          <p class="text-[#6366f1] font-bold tracking-widest text-xs mb-4 uppercase">About Me</p>
          <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-8">I'm Bruno Lubambo</h2>
          <div class="space-y-6 text-slate-500 text-lg leading-relaxed">
            <p>
              Experienced UI/UX Designer with 4 years of practice and a copywriting background, proficient in user research, prototyping, Figma, and OutSystems. Since June 2025, I've autonomously led UX/UI for over 60 government portals at CODATA, ensuring digital standards and integration.
            </p>
            <p>
              My design journey started with advertising and copywriting, which helped me develop a knack for crafting designs that are not only visually engaging but also easy to use. At ASCENDYnamic, I helped build platforms that make it easier for startups and freelancers to connect, always focusing on experiences that feel natural and intuitive.
            </p>
            <p>
              Currently at CODATA in Para&iacute;ba, Brazil, I operate with significant autonomy &mdash; leading design and user experience for government portals, ensuring alignment with official digital patterns, facilitating integration between design and front-end teams, and strategically transforming Figma into a tool for design systems.
            </p>
          </div>
        </div>

        <div class="md:col-span-2 space-y-8">
          <div>
            <h3 class="font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Skills</h3>
            <div class="flex gap-2 flex-wrap">
              <span class="bg-[#6366f1]/10 text-[#6366f1] px-4 py-2 rounded-lg text-sm font-semibold">UX Design</span>
              <span class="bg-[#6366f1]/10 text-[#6366f1] px-4 py-2 rounded-lg text-sm font-semibold">User Research</span>
              <span class="bg-[#6366f1]/10 text-[#6366f1] px-4 py-2 rounded-lg text-sm font-semibold">Prototyping</span>
              <span class="bg-[#6366f1]/10 text-[#6366f1] px-4 py-2 rounded-lg text-sm font-semibold">Wireframing</span>
              <span class="bg-[#6366f1]/10 text-[#6366f1] px-4 py-2 rounded-lg text-sm font-semibold">Usability Testing</span>
              <span class="bg-[#6366f1]/10 text-[#6366f1] px-4 py-2 rounded-lg text-sm font-semibold">Design Systems</span>
            </div>
          </div>

          <div>
            <h3 class="font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Tools</h3>
            <div class="flex gap-2 flex-wrap">
              <span class="border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600">Figma</span>
              <span class="border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600">Adobe XD</span>
              <span class="border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600">OutSystems</span>
              <span class="border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600">Wix Studio</span>
              <span class="border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600">WordPress</span>
              <span class="border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600">Webflow</span>
            </div>
          </div>

          <div>
            <h3 class="font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Focus Areas</h3>
            <ul class="space-y-3 text-slate-500">
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-2 shrink-0"></span>
                Accessibility &amp; WCAG compliance
              </li>
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-2 shrink-0"></span>
                Mobile-first optimization
              </li>
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-2 shrink-0"></span>
                Design &amp; dev team integration
              </li>
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-2 shrink-0"></span>
                Government digital standards
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="px-8 md:px-16 py-24 md:py-32 max-w-7xl mx-auto relative z-10">
      <div class="bg-[#6366f1] rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center">
        <h2 class="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
          Let's talk about design
        </h2>
        <p class="text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Have a project you think I can help with? I'm always open to new challenges in interface design and user experience.
        </p>
        <a
          href="mailto:bruno.lubambo@gmail.com"
          class="inline-block bg-white text-[#6366f1] px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="px-8 md:px-16 py-8 max-w-7xl mx-auto relative z-10 border-t border-slate-200">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <p>&copy; 2025 Bruno Lubambo. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="https://www.linkedin.com/in/brunolubambo/" target="_blank" rel="noopener" class="hover:text-slate-900 transition-colors">LinkedIn</a>
          <a href="https://gelatinous-nitrogen-9db.notion.site/UX-PORTFOLIO-943fecdce86448d49b1cca61563214b8" target="_blank" rel="noopener" class="hover:text-slate-900 transition-colors">Notion Portfolio</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.cursor-canvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
}

.particles-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: particleFloat linear infinite;
  will-change: transform;
}

@keyframes particleFloat {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(calc(var(--drift-x) * 0.5), calc(var(--drift-y) * -1));
  }
  50% {
    transform: translate(var(--drift-x), calc(var(--drift-y) * -0.3));
  }
  75% {
    transform: translate(calc(var(--drift-x) * -0.3), calc(var(--drift-y) * 0.6));
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
