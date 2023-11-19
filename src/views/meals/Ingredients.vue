<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../../utils/axiosClient';
import { useRouter } from 'vue-router';
import store from '../../store';
import { IIngredient } from '../../utils/types';

const router = useRouter();
const keyword = ref("");
const ingredients = ref<IIngredient[]>([]);

const computedIngredients = computed(() => {
//   if (!computedIngredients) return ingredients;
  return ingredients.value
    .filter((item: IIngredient | never) => typeof item !== 'undefined')
    .filter((item: IIngredient) => 
        item.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient: IIngredient) {
  store.commit('setIngredient', ingredient)
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<template>
    <div class="max-w-[1200px] mx-auto">
        <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-green-500">Ingredients</h1>
        </div>
        <div class="px-8">
        <input
            type="text"
            v-model="keyword"
            class="rounded border-2 bg-white border-gray-200 focus:ring-green-500 focus:border-green-500 mb-3 w-full"
            placeholder="Search for Ingredients"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="#"
            @click.prevent="openIngredient(ingredient)"
            v-for="ingredient of computedIngredients"
            :key="ingredient.idIngredient"
            class="block bg-white rounded p-3 mb-3 shadow"
            >
            <h3 class="block bg-white rounded p-3 mb-3 shadow">{{ ingredient.strIngredient }}</h3>
            </a>
        </div>
        </div>
    </div>
  </template>
