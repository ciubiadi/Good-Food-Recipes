<script lang="ts">
export default {

}
</script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
  
<style scoped>
  .card {
    /* border-radius: 12px; */
    @apply rounded-md;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
  }
</style>  