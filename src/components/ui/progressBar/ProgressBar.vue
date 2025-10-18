<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'blue',
  },
})

const colorMap = {
  green: 'bg-green-500',
  amber: 'bg-amber-400',
  blue: 'bg-blue-600',
}

const bgColor = colorMap[props.color] || 'bg-blue-600'
</script>

<template>
  <div class="w-full bg-gray-200 rounded h-2 overflow-hidden">
    <div :class="['h-full', bgColor]" :style="{ width: '100%' }"></div>
  </div>
</template>


