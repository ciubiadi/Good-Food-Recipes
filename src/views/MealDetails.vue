<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../utils/axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';

const meal = ref({});
const route = useRoute();

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({data}) => {
            meal.value = data.meals[0] || {};
        })
});
</script>

<template>
    <div class="flex flex-col justify-center max-w-[70%] m-auto">
        <!-- <pre>{{ meal }}</pre> -->
        <h1>{{meal.strMeal}}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" />
        <div class="flex justify-around">
            <div>
                <strong>Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong>Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong>Tags:</strong> {{ meal.strTags }}
            </div>
        </div>

        <div>
            {{ meal.strInstructions}}
        </div>

        <div class="border-4 flex justify-between">
            <div>
                <h2>Ingredients</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                            {{ index + 1}}. {{ meal[`strIngredient${index + 1}`] }}</li>
                    </template>
                </ul>
            </div>
            <div>
                <h2>Measures</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strMeasure${index + 1}`]">
                            {{ index + 1}}. {{ meal[`strMeasure${index + 1}`] }}</li>
                    </template>
                </ul> 
            </div>
            <div>
                <YoutubeButton :href="meal.strYoutube">YouTube</YoutubeButton>
                <a 
                    :href="meal.strSource" 
                    class="text-gray-700 bg-green-400 hover:bg-blue-300"
                    target="_blank"
                >
                    
                    View Original Source
                </a>
            </div>
        </div>
    </div>
</template>


