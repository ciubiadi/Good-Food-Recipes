<script setup lang="ts">
  import { onMounted, ref } from 'vue';
import { IMeal } from '../utils/types';
import axiosClient from '../utils/axiosClient';
import Meals from '../components/meals/Meals.vue';

  const meals = ref<IMeal[]>([]);

  onMounted(async () => {
    for (let i = 0; i < 10; i++) {
      axiosClient
        .get(`random.php`)
        .then(({ data }) => meals.value.push(data.meals[0]));
    }
  });
</script>

<template>
  <div class="max-w-[1200px] mx-auto">
    <div class="p-8 pb-0 text-green-500">
        <h1 class="text-4xl font-bold mb-4">Some Meals</h1>
    </div>
    <Meals :meals="meals" />
  </div>
</template>
