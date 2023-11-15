<script setup lang="ts">
</script>

<template>
    <header class="flex justify-between">
        <router-link to="/home">
            Home
        </router-link>
        <div>
            <router-link to="/by-name">
                Search Recipes
            </router-link>
            <router-link to="/by-letter">
                Recipes By Letter
            </router-link>
            <router-link to="/by-ingredient">
                Recipes By Ingredients
            </router-link>
        </div>
    </header>
</template>