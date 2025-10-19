<template>
    <section class="section">
        <h1>Boxes</h1>

        <!-- Grid de tarjetas -->
        <BoxGrid :items="items" />
    </section>
</template>

<script setup>
import BoxGrid from "../components/BoxGrid.vue";

const items = [
    { title: "Sobre mí", text: "Estudiante de ingeniería de sistemas" },
    { title: "Amigos", text: "256 amigos" },
    {
        title: "Intereses",
        text: "Bachata, videojuegos, tiktok, musica, programacion",
    },
    { title: "Habilidades", text: "JavaScript, HTML, CSS, Python" },
];
</script>
