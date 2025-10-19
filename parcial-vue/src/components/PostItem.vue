<template>
    <li class="post">
        <div class="ph" aria-hidden="true"></div>
        <div>
            <strong>{{ author }}</strong>
            <div class="meta">{{ time }} · Me gusta</div>
            <p v-if="text" style="margin: 8px 0 0">{{ text }}</p>

            <div class="actions">
                <button class="btn secondary" @click="$emit('like')">
                    👍 Me gusta
                </button>
                <button class="btn secondary" @click="$emit('comment')">
                    💬 Comentar
                </button>
                <button class="btn secondary" @click="$emit('share')">
                    ↗ Compartir
                </button>
            </div>
        </div>
    </li>
</template>

<script setup>
defineProps({
    author: { type: String, required: true },
    time: { type: String, required: true },
    text: { type: String, default: "" },
});
defineEmits(["like", "comment", "share"]);
</script>
