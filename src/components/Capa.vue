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
  <section class="flex flex-col items-center justify-between min-h-screen bg-gray-100 py-10 px-4">
    <!-- Card central -->
    <div class="bg-white rounded-xl shadow-md p-8 w-full max-w-sm flex flex-col items-center space-y-10">
      <!-- Logo do programa -->
      <img :src="logo" alt="Logo ReViva Porto Velho" class="w-48 h-auto" />

      <!-- Texto explicativo -->
      <p class="text-sm text-center text-gray-700">
        Acesse suas informações, consulte seu benefício ou cadastre-se para fazer parte do programa.
      </p>

      <Button
      class="w-full max-w-sm bg-blue-600 text-white hover:bg-blue-700"
      @click="fakeLogin"
    >
      Entrar com <span class="font-bold ml-1">gov.br</span>
    </Button>
    </div>

    <img :src="logoPrefeitura" alt="Prefeitura de Porto Velho" class="w-32 mt-6" />
  </section>
</template>
