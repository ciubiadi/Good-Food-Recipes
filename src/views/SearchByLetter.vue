<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';
 
  const route = useRoute();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  const meals = computed(() => store.state.mealsByLetter);

  watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
  })

  onMounted(() => {
    console.log('meals in SeachByLetter', meals)
    console.log('route from SeachByLetter', route)
    store.dispatch('searchMealsByLetter', route.params.letter);
  })
</script>

<template>
    <div class="flex justify-center gap-2 mt-2">
        <router-link 
            :to="{name: 'byLetter', params: {letter}}" 
            v-for="letter of letters"
            :key="letter"
        >
            {{ letter }}
        </router-link>
    </div>
    <Meals :meals="meals" />
</template>