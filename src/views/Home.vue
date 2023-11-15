<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import store from '../store';
  import axiosClient from '../utils/axiosClient.ts'

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  
  onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list');
    console.log('response ', response.data)
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
