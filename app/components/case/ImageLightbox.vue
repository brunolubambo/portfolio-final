<script setup lang="ts">
const props = defineProps<{
  src: string
  alt?: string
}>()

const emit = defineEmits<{ close: [] }>()

const scale = ref(1)
const tx = ref(0)
const ty = ref(0)
const isDragging = ref(false)
const dragOrigin = ref({ x: 0, y: 0 })

const MIN = 1
const MAX = 6
const STEP = 0.5

const imgStyle = computed(() => ({
  transform: `translate(${tx.value}px, ${ty.value}px) scale(${scale.value})`,
  cursor: scale.value > 1 ? (isDragging.value ? 'grabbing' : 'grab') : 'zoom-in',
}))

function clampTranslate() {
  if (scale.value <= 1) { tx.value = 0; ty.value = 0 }
}

function zoomIn() {
  scale.value = Math.min(MAX, +(scale.value + STEP).toFixed(2))
}

function zoomOut() {
  scale.value = Math.max(MIN, +(scale.value - STEP).toFixed(2))
  clampTranslate()
}

function resetZoom() {
  scale.value = 1; tx.value = 0; ty.value = 0
}

function onWheel(e: WheelEvent) {
  e.preventDefault()
  const delta = e.deltaY < 0 ? STEP : -STEP
  scale.value = Math.max(MIN, Math.min(MAX, +(scale.value + delta).toFixed(2)))
  clampTranslate()
}

function onMouseDown(e: MouseEvent) {
  if (scale.value <= 1) return
  e.preventDefault()
  isDragging.value = true
  dragOrigin.value = { x: e.clientX - tx.value, y: e.clientY - ty.value }
}

function onMouseMove(e: MouseEvent) {
  if (!isDragging.value) return
  tx.value = e.clientX - dragOrigin.value.x
  ty.value = e.clientY - dragOrigin.value.y
}

function onMouseUp() { isDragging.value = false }

// Touch pinch-to-zoom
let lastTouchDist = 0
function getTouchDist(e: TouchEvent) {
  const [a, b] = [e.touches[0], e.touches[1]]
  return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY)
}
function onTouchStart(e: TouchEvent) {
  if (e.touches.length === 2) lastTouchDist = getTouchDist(e)
}
function onTouchMove(e: TouchEvent) {
  if (e.touches.length !== 2) return
  e.preventDefault()
  const dist = getTouchDist(e)
  const ratio = dist / lastTouchDist
  scale.value = Math.max(MIN, Math.min(MAX, +(scale.value * ratio).toFixed(2)))
  lastTouchDist = dist
  clampTranslate()
}

function onOverlayClick(e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains('lb-overlay')) emit('close')
}

function onImgClick(e: MouseEvent) {
  e.stopPropagation()
  if (scale.value === 1) zoomIn()
}

onMounted(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') emit('close')
    if (e.key === '+' || e.key === '=') zoomIn()
    if (e.key === '-') zoomOut()
    if (e.key === '0') resetZoom()
  }
  document.addEventListener('keydown', onKey)
  document.body.style.overflow = 'hidden'
  onUnmounted(() => {
    document.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  })
})
</script>

<template>
  <Teleport to="body">
    <div
      class="lb-overlay"
      role="dialog"
      aria-modal="true"
      :aria-label="alt || 'Image viewer'"
      @click="onOverlayClick"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      @mouseleave="onMouseUp"
    >
      <!-- Controls -->
      <div class="lb-controls" @click.stop>
        <button class="lb-btn" title="Zoom in (+)" aria-label="Zoom in" @click="zoomIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
          </svg>
        </button>
        <span class="lb-scale">{{ Math.round(scale * 100) }}%</span>
        <button class="lb-btn" title="Zoom out (-)" aria-label="Zoom out" @click="zoomOut">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M8 11h6" />
          </svg>
        </button>
        <button class="lb-btn" title="Reset (0)" aria-label="Reset zoom" @click="resetZoom">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3.51 9a9 9 0 1 1-.49 3.1M3 4v5h5" />
          </svg>
        </button>
        <button class="lb-btn lb-close" title="Close (Esc)" aria-label="Close" @click="emit('close')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </div>

      <!-- Image -->
      <div class="lb-stage" @wheel.prevent="onWheel">
        <img
          :src="src"
          :alt="alt"
          class="lb-img"
          :style="imgStyle"
          draggable="false"
          @mousedown="onMouseDown"
          @click="onImgClick"
          @touchstart.passive="onTouchStart"
          @touchmove.prevent="onTouchMove"
        />
      </div>

      <!-- Hint -->
      <p class="lb-hint">Scroll to zoom · Drag to pan · Esc to close</p>
    </div>
  </Teleport>
</template>
