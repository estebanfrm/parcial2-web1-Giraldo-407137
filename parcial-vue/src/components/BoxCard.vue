<template>
    <article class="box">
        <h3 class="box-title">{{ title }}</h3>
        <div class="box-body">
            <slot />
        </div>
    </article>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
});
</script>
