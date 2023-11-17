<script setup lang="ts">
import Navbar from '../components/Navbar.vue'

</script>

<template>
    <Navbar />
    <main>
        <div class="min-w-[100%]">
            <router-view />
        </div>
    </main>
</template>