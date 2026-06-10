<script setup lang="ts">
let _onMouseMove: ((e: MouseEvent) => void) | null = null

onMounted(() => {
  _onMouseMove = (e: MouseEvent) => {
    document.documentElement.style.setProperty('--mx', e.clientX + 'px')
    document.documentElement.style.setProperty('--my', e.clientY + 'px')
  }
  document.addEventListener('mousemove', _onMouseMove)
})

onUnmounted(() => {
  if (_onMouseMove) document.removeEventListener('mousemove', _onMouseMove)
})
</script>

<template>
  <slot />
</template>
