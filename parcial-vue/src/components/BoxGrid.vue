<template>
    <div class="boxes">
        <BoxCard v-for="(b, i) in items" :key="i" :title="b.title">
            <p>{{ b.text }}</p>
        </BoxCard>
    </div>
</template>

<script setup>
import BoxCard from "./BoxCard.vue";

defineProps({
    items: { type: Array, required: true },
});
</script>
