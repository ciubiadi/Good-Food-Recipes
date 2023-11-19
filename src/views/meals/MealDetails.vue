<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../../utils/axiosClient.js';
import { IMealValue } from '../../utils/types.js';
import YoutubeButton from '../../components/ui/YoutubeButton.vue';
// import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute();
const meal = ref<IMealValue | null>(null);

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || null;
    });
});

const getIngredient = (index: number): string | undefined => {
  const key = `strIngredient${index}` as keyof IMealValue;
  const value = meal.value ? meal.value[key] : undefined;
  return value !== null ? value : undefined as string | undefined;
};

const getMeasure = (index: number): string | undefined => {
  const key = `strMeasure${index}` as keyof IMealValue;
  const value = meal.value ? meal.value[key] : undefined;
  return value !== null ? value : undefined as string | undefined;
};
</script>

<template>
    <div class="max-w-[800px] mx-auto p-8" v-if="meal">
        <h1 class="text-4xl font-bold mb-5 text-green-500">
            {{ meal?.strMeal }}
        </h1>
        <img :src="(meal as IMealValue).strMealThumb" :alt="(meal as IMealValue).strMeal" class="max-w-[100%]">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong> {{ (meal as IMealValue).strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong> {{ (meal as IMealValue).strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong> {{ (meal as IMealValue).strTags }}
            </div>
        </div>

        <div class="my-3">
            {{ (meal as IMealValue).strInstructions }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">
                    Ingredients
                </h2>
                <ul>
                    <template v-for="ind in 20">
                        <li v-if="getIngredient(ind)">
                            {{ ind }}. {{ getIngredient(ind) }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">
                    Measures
                </h2>
                <ul>
                    <template v-for="ind in 20">
                        <li v-if="getMeasure(ind)">
                            {{ ind }}. {{ getMeasure(ind) }}
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
    <div v-else>
        Loading...
    </div>
</template>


