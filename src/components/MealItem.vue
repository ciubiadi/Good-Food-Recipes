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
    <div>
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
            <img :src="meal.strMealThumb" :alt="meal.strMeal"/>
        </router-link>
        <h3>{{ meal.strMeal }}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, omnis?</p>
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        <!-- <router-link to="/">View</router-link> -->
    </div>
    <!-- <pre>
        {{ meals }}
    </pre> -->
</template>