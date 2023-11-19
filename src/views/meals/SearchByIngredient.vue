<script setup lang="ts">
import { onMounted } from 'vue';
import store from '../../store';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
import { IIngredient, IState } from '../../utils/types.js';
import Meals from '../../components/meals/Meals.vue';

const route = useRoute();
const ingredient = computed(() => (store.state as IState).ingredient as IIngredient)
const meals = computed(() => (store.state as IState).mealsByIngredient)
onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<template>
    <div class="max-w-[1200px] mx-auto">
        <div class="p-8 pb-0">
            <h1 class="text-4xl font-bold mb-4 text-green-500">Meals for {{ ingredient.strIngredient }}</h1>
        </div>
        <Meals :meals="meals" />
    </div>
</template>