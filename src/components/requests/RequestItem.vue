<script lang="ts">
import { computed } from 'vue';

export default {
  props: ['email', 'message'],
  setup(props) {
    const emailLink = computed(() => 'mailto:' + props.email);

    return {
      emailLink,
    };
  },
};
</script>

<template>
    <li>
      <div>
        <a :href="emailLink">{{ email }}</a>
      </div>
      <p>{{ message }}</p>
    </li>
</template>
  
<style scoped>
  li {
    margin: 1rem 0;
    border: 1px solid #ccc;
    padding: 1rem;
  }
  
  a {
    color: #008d28;
    text-decoration: none;
    font-weight: bold;
  }
  
  a:hover,
  a:active {
    color: #008d28;
  }
  
  p {
    margin: 0.5rem 0 0 0;
  }
</style>
  