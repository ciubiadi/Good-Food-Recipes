<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../utils/axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';
import { IMeal } from '../utils/types';

const defaultMeal: IMeal = {
    idIngredient: '',
    strDescription: '',
    strIngredient: '',
    strMealThumb: '',
    strType:'',
    strYoutube: '',
    idMeal:'',
    strMeal: '',
    strCategory: '',
    strArea: '',
    strTags: '',
    strInstructions: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
    strIngredient4: '',
    strIngredient5: '',
    strIngredient6: '',
    strIngredient7: '',
    strIngredient8: '',
    strIngredient9: '',
    strIngredient10: '',
    strIngredient11: '',
    strIngredient12: '',
    strIngredient13: '',
    strIngredient14: '',
    strIngredient15: '',
    strIngredient16: '',
    strIngredient17: '',
    strIngredient18: '',
    strIngredient19: '',
    strIngredient20: '',
    value: '',
    strSource: ''
}

const meal = ref<IMeal>({...defaultMeal});
const route = useRoute();

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({data}) => {
            meal.value = data.meals[0] || defaultMeal;
        })
});

function getIngredient(meal: IMeal, index: number): string | undefined {
  const key = `strIngredient${index}`;
  return meal[key];
}

function getMeasure(meal: IMeal, index: number): string | undefined {
  const key = `strMeasure${index}`;
  return meal[key];
}

</script>

<template>
    <div class="max-w-[800px] mx-auto p-8">
        <!-- <pre>{{ meal }}</pre> -->
        <h1 class="text-4xl font-bold mb-5 text-green-500">{{meal.strMeal}}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]"/>
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
            </div>
        </div>

        <div class="my-3">
            {{ meal.strInstructions}}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(index) of new Array(20)">
                        <li v-if="getIngredient(meal, index + 1)">
                        {{ index + 1}}. {{ getIngredient(meal, index + 1) }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="(index) of new Array(20)">
                        <li v-if="getMeasure(meal, index + 1)">
                        {{ index + 1}}. {{ getMeasure(meal, index + 1) }}
                        </li>
                    </template>
                </ul> 
            </div>
            <div class="mt-4">
                <YoutubeButton :href="meal.strYoutube">YouTube</YoutubeButton>
            </div>
            <div class="mt-4">
                <a 
                    :href="meal.strSource" 
                    class="inline-block px-4 py-2 border-2 border-green-500 rounded-md text-blue-900 hover:bg-green-200 hover:border-green-300 transition-colors text-sm font-medium"
                    target="_blank"
                >
                    
                    View Original Source
                </a>
            </div>
        </div>
    </div>
</template>


