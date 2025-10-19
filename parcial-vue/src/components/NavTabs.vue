<template>
    <nav aria-label="Secciones principales">
        <RouterLink to="/muro" class="nav-link" active-class="is-active"
            >Muro</RouterLink
        >
        <RouterLink to="/info" class="nav-link" active-class="is-active"
            >Info</RouterLink
        >
        <RouterLink to="/photos" class="nav-link" active-class="is-active"
            >Photos</RouterLink
        >
        <RouterLink to="/boxes" class="nav-link" active-class="is-active"
            >Boxes</RouterLink
        >
    </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
