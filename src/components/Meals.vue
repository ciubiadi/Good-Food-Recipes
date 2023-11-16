<script setup lang="ts">
import { onMounted } from 'vue';
import MealItem from './MealItem.vue';
import { IMeal } from '../utils/types';

const { meals } = defineProps({
    meals: {
        required: true,
        type: Array as () => IMeal[]
    }
})  

onMounted(() => console.log(meals))
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length">
        There are no meals
    </div>
</template>