<template>
    <section class="card profile" aria-labelledby="perfil-ttl">
        <div class="avatar" aria-hidden="true"></div>
        <h2 id="perfil-ttl" class="name">Nombre</h2>

        <nav class="sidebar-list" aria-label="Perfil">
            <RouterLink to="/info">Información</RouterLink>
            <RouterLink to="/info">Email</RouterLink>
            <RouterLink to="/info">Teléfono</RouterLink>
            <RouterLink to="/info">Intereses</RouterLink>
            <RouterLink to="/info">Situación sentimental</RouterLink>
            <a href="#">Ver todos</a>
        </nav>

        <div class="friends" aria-label="Amigos">
            <span class="friend" aria-hidden="true"></span>
            <span class="friend" aria-hidden="true"></span>
            <span class="friend" aria-hidden="true"></span>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
