<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineProps } from 'vue'

interface BreadcrumbItem {
  name: string
  href?: string // se não tiver href, será apenas texto
}

const { items } = defineProps<{ items: BreadcrumbItem[] }>()

</script>

<template>
  <nav class="flex text-sm text-gray-600" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2">
      <li v-for="(item, index) in items" :key="index" class="inline-flex items-center">
        <template v-if="item.href">
          <a :href="item.href" class="text-blue-600 hover:underline">
            {{ item.name }}
          </a>
        </template>
        <template v-else>
          <span class="text-gray-500">{{ item.name }}</span>
        </template>

        <!-- Separador, exceto no último item -->
        <svg
          v-if="index < items.length - 1"
          class="w-4 h-4 mx-1 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </li>
    </ol>
  </nav>
</template>
