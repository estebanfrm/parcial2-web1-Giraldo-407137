<!-- src/App.vue -->
<template>
  <!-- Encabezado con logo, tabs y buscador -->
  <HeaderBar />

  <!-- Layout principal -->
  <div class="app">
    <aside class="sidebar">
      <SidebarProfile />
    </aside>

    <main class="content" aria-live="polite">
      <!-- Aquí se renderizan las vistas: Muro, Info, Photos, Boxes -->
      <RouterView />
    </main>
  </div>

  <footer class="site-footer">
    <small>&copy; 2025 Parcial Web · Vue 3</small>
  </footer>
</template>

<script setup>
import { RouterView } from 'vue-router'

// Componentes de layout (los crearemos en /src/components)
import HeaderBar from './components/HeaderBar.vue'
import SidebarProfile from './components/SidebarProfile.vue'
</script>
