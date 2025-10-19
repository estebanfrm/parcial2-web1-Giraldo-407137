<template>
    <section class="composer">
        <textarea
            v-model="text"
            placeholder="Escribe algo…"
            aria-label="Escribe algo"
        ></textarea>
        <div class="row">
            <span class="chip">Adjuntar</span>
            <button
                class="btn"
                @click="
                    emit('submit', text);
                    text = '';
                "
            >
                Compartir
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["submit"]);
const text = ref("");
</script>
