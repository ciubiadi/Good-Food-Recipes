<script setup lang="ts">
const props = defineProps({
    href: String,
})
</script>

<template>
    <a class="btn border-4" :href="href" target="_blank">
        <slot></slot>
    </a>
</template>