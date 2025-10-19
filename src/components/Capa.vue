<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import logo from '@/assets/images/logo.png'
import logoPrefeitura from '@/assets/images/logo_prefeitura.png'
import { Button } from '@/components/ui/button'
import router from '@/router'

function fakeLogin() {
  router.push("/home")
}
</script>

<template>
  <section
    class="flex flex-col items-center justify-between min-h-[90dvh] bg-gray-100 px-4 py-6"
  >
    <!-- Card central com grid -->
    <div
      class="bg-white rounded-xl shadow-md p-6 w-full max-w-sm grid grid-rows-[70%_15%_15%] items-center justify-items-center"
      style="height: 70vh;"
    >
      <!-- Logo -->
      <img :src="logo" alt="Logo ReViva Porto Velho" class="w-full h-auto row-span-1" />

      <!-- Texto -->
      <p class="text-sm text-center text-gray-700 leading-relaxed row-span-1">
        Acesse suas informações, consulte seu benefício ou cadastre-se para fazer parte do programa.
      </p>

      <!-- Botão -->
      <Button
        class="w-full bg-blue-600 text-white hover:bg-blue-700 row-span-1"
        @click="fakeLogin"
      >
        Entrar com <span class="font-bold ml-1">gov.br</span>
      </Button>
    </div>

    <!-- Logo da prefeitura -->
    <img
      :src="logoPrefeitura"
      alt="Prefeitura de Porto Velho"
      class="w-28 mt-6"
    />
  </section>
</template>
