<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const isLinkActive = (path: string) => {
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
                class="text-center inline-flex items-center h-full px-5 transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/')}"
            >
                Home
            </router-link>
            <router-link
                :to="{ name: 'mealsData' }"
                class="text-center inline-flex items-center px-2 h-full transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/meals-data')}"
            >
                Meals Table
            </router-link>
            <router-link
                :to="{ name: 'byName' }"
                class="text-center inline-flex items-center px-2 h-full transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/by-name')}"  
            >
                Search Meals
            </router-link>
            <router-link
                :to="{ name: 'byLetter' }"
                class="text-center inline-flex items-center px-2 h-full transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/by-letter')}"  
            >
                Meals By Letter
            </router-link>
            <router-link
                :to="{ name: 'ingredients' }"
                class="text-center inline-flex items-center px-2 h-full transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/ingredients')}"
            >
                Meals By Ingredients
            </router-link>
            <router-link
                :to="{ name: 'coaches' }"
                class="text-center inline-flex items-center px-2 h-full transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/coaches')}"
            >
                Coaches
            </router-link>
            <router-link
                :to="{ name: 'requests' }"
                class="text-center inline-flex items-center px-2 h-full transition-colors hover:bg-green-300 hover:text-white"
                :class="{ 'active-link': isLinkActive('/requests')}"
            >
                Requests
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