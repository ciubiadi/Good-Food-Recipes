<script lang="ts">
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<template>
    <span class="badge" :class="type">
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
  
  .frontend {
    background-color: #008d21;
    color: white;
  }
  
  .backend {
    background-color: #008d1f;
    color: white;
  }
  
  .career {
    background-color: #008d28;
    color: white;
  }
  </style>