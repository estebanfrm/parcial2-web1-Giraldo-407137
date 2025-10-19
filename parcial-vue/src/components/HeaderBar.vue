<template>
    <header class="site-header">
        <div class="brand" id="logo">
            <div class="logo" aria-hidden="true">f</div>
            <h1 class="app-title">facebook</h1>
        </div>

        <NavTabs class="primary-nav" />

        <form class="search" role="search" @submit.prevent>
            <label class="sr-only" for="q">Buscar</label>
            <input id="q" type="search" placeholder="Buscar en Facebook" />
            <button type="submit" aria-label="Buscar">🔍</button>
        </form>
    </header>
</template>

<script setup>
import NavTabs from "./NavTabs.vue";
</script>
