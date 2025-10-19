<template>
    <ul class="feed" aria-label="Publicaciones">
        <PostItem
            v-for="p in posts"
            :key="p.id"
            :author="p.author"
            :time="p.time"
            :text="p.text"
            @like="$emit('like', p.id)"
            @comment="$emit('comment', p.id)"
            @share="$emit('share', p.id)"
        />
    </ul>
</template>

<script setup>
import PostItem from "./PostItem.vue";
defineProps({ posts: { type: Array, required: true } });
defineEmits(["like", "comment", "share"]);
</script>
