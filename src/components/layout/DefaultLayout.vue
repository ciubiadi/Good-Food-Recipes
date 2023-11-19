<script setup lang="ts">
import Navbar from './Navbar.vue';


</script>

<template>
    <Navbar />
    <main>
        <div class="min-w-[100%]">
            <router-view />
        </div>
    </main>
</template>