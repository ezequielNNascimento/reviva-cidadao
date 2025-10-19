<script setup lang="ts">
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';
</script>


  <template>
  <div class="flex flex-col h-screen">
    <Header class="shrink-0" />
    <AppHeader/>
    <main class="flex-1 overflow-y-auto">
      <RouterView />
    </main>
    <footer>
      <AppFooter v-if="$route.path !== '/'" />
    </footer>
  </div>
</template>

<style scoped></style>
