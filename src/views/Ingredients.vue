<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../utils/axiosClient';
import { useRouter } from 'vue-router';
import store from '../store';
import { IIngredient } from '../utils/types';

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
    <div>
      <h1>Ingredients</h1>
    </div>
    <div>
      <input
        type="text"
        v-model="keyword"
        placeholder="Search for Ingredients"
      />
      <div>
        <a href="#"
          @click.prevent="openIngredient(ingredient)"
          v-for="ingredient of computedIngredients"
          :key="ingredient.idIngredient"
        >
          <h3>{{ ingredient.strIngredient }}</h3>
        </a>
      </div>
    </div>
  </template>
