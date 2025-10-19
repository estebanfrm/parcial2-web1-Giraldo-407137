<template>
    <section class="photos" aria-labelledby="photos-ttl">
        <h1 id="photos-ttl">Photos</h1>
        <div class="grid">
            <PhotoItem v-for="n in 12" :key="n" />
        </div>
    </section>
</template>

<script setup>
import PhotoItem from "./PhotoItem.vue";
</script>
