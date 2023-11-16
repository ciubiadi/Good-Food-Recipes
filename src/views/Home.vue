<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  // import store from '../store';
  import axiosClient from '../utils/axiosClient.ts'

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  const ingredients = ref<any>([]);
  
  onMounted(async () => {
    try {
      const response = await axiosClient.get<{ data: string[] }>('/list.php?i=list');
      console.log('response ', response.data);
      ingredients.value = response.data;
    } catch (error) {
      console.error('Error fetching ingredients:', error);
    }
  })
</script>

<template>
  <div class="flex flex-col m-8">
    <input type="text" class="" placeholder="Search for meals" />
    

    <div class="flex justify-center gap-2 mt-2">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters">
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>
