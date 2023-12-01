<script lang="ts">
import { computed } from 'vue';

export default {
  props: ['type', 'title'],
  setup(props){
    const text = computed(() => props.title.toUpperCase());

    return {
      text,
      type: props.type
    }
  }
}
</script>

<template>
    <span class="badge" :class="type.toLowerCase()">
      {{ text }}
    </span>
  </template>
  
  <style scoped>
  .badge {
    background-color: #ccc;
    color: #252525;
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    margin-right: 0.5rem;
  }
  
  .vegan {
    background-color: #93ba05;
    color: white;
  }
  
  /* .chinese {
    background-color: #139f00ae;
    color: white;
  } */
  
  .indian {
    background-color: #05baa8;
    color: white;
  }
  .mexican {
    background-color: #209862;
    color: white;
  }
  </style>