<script setup lang="ts">
import { computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';


const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length">
        There are no meals
    </div>
</template>