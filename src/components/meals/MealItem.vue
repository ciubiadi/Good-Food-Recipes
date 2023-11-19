<script setup lang="ts">
import YoutubeButton from '../ui/YoutubeButton.vue';


const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
}) 

function truncateWords(str: string, count: number) {
    if (!str) return str;
    return str.split(" ").slice(0, count).join(" ")
  }
</script>

<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
            <img 
                :src="meal.strMealThumb" 
                :alt="meal.strMeal"
                class="rounded-t-xl w-full h-48 object-cover"
            />
        </router-link>
        <div class="p-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p class="mb-4">
                {{ truncateWords(meal.strInstructions, 20) + ' (...)' }}
            </p>
            <div class="flex items-center justify-between">
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
            </div>
        </div>
        
        <!-- <router-link to="/">View</router-link> -->
    </div>
    <!-- <pre>
        {{ meals }}
    </pre> -->
</template>