<script setup lang="ts">
  import { computed } from 'vue';
  import store from '../store';

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
</script>

<template>
  <div class="flex flex-col m-8">
    <input type="text" class="" placeholder="Search for meals" />
    

    <div class="flex justify-center gap-2 mt-2">
      <router-link to='/' v-for="letter of letters">
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>
