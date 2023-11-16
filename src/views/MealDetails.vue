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
                    <template v-for="(index) of new Array(20)">
                        <li v-if="getIngredient(meal, index + 1)">
                        {{ index + 1}}. {{ getIngredient(meal, index + 1) }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2>Measures</h2>
                <ul>
                    <template v-for="(index) of new Array(20)">
                        <li v-if="getMeasure(meal, index + 1)">
                        {{ index + 1}}. {{ getMeasure(meal, index + 1) }}
                        </li>
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


