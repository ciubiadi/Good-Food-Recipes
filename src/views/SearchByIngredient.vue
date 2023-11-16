<script setup lang="ts">
import { onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';
import { computed } from '@vue/reactivity';

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<template>
    <Meals :meals="meals" />
</template>