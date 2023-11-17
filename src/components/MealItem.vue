<script setup lang="ts">
import YoutubeButton from './YoutubeButton.vue';

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
}) 
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, omnis?
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