<script setup lang="ts">
import { computed } from 'vue';
import store from '../store';

const meals = computed(() => store.state.meals);
</script>

<template>
  <pre>{{meals}}</pre>
</template>
