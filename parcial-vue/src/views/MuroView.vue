<template>
    <section aria-labelledby="muro-ttl">
        <h1 id="muro-ttl" class="sr-only">Muro</h1>
        <Composer @submit="addPost" />
        <PostList :posts="posts" />
    </section>
</template>

<script setup>
import { ref } from "vue";
import Composer from '../components/Composer.vue'
import PostList from '../components/PostList.vue'

const posts = ref([
    { id: 1, author: "Brayan Martinez", time: "Lunes 8:45pm", text: "Me encanta esta red social." },
    { id: 2, author: "Valeroa Gomez", time: "Lunes 9:12pm", text: "Scrollear genera mucha dopamina" },
    { id: 3, author: "Felipe Henao", time: "Lunes 11:46pm", text: "Holaa" },
]);

function addPost(text) {
    if (!text?.trim()) return;
    posts.value.unshift({
        id: Date.now(),
        author: "Nombre",
        time: new Date().toLocaleTimeString(),
        text,
    });
}
</script>
