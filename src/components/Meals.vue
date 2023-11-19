<script setup lang="ts">
import MealItem from './MealItem.vue';
import { IMeal } from '../utils/types';

const { meals } = defineProps({
    meals: {
        required: true,
        type: Array as () => IMeal[]
    }
})  
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
        <MealItem v-for="meal of meals" :key="meal.value.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
        There are no meals
    </div>
</template>