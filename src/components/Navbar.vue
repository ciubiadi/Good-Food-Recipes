<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const isLinkActive = (path: string) => {
  console.log('route.path', route.path)
  console.log('path', path)
  console.log(path == route.path)
  return path == route.path;
};

</script>

<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
        <div class="inline-flex items-center h-full px-5 text-green-800 font-bold">
            GoodFood<span class="text-green-500 font-bold">:)</span>Recipes
        </div>
        <div class="flex items-center gap-1">
            <router-link
                :to="{ name: 'home' }"
                class="inline-flex items-center h-full px-5 transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/')}"
            >
                Home
            </router-link>
            <router-link
                :to="{ name: 'mealsTable' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/meals-table')}"
            >
                Meals Table
            </router-link>
            <router-link
                :to="{ name: 'byName' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/by-name')}"  
            >
                Search Meals
            </router-link>
            <router-link
                :to="{ name: 'byLetter' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/by-letter')}"  
            >
                Meals By Letter
            </router-link>
            <router-link
                :to="{ name: 'ingredients' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/ingredients')}"
            >
                Meals By Ingredients
            </router-link>
        </div>
  </header>
</template>

<style scoped>
.active-link {
  color: green;
  font-weight: bolder;
}
</style>