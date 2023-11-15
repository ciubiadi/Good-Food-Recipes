<script setup lang="ts">
</script>

<template>
  <div>
    <header>
      <router-link to="/home">
        Home test
      </router-link>
      <div>
        <router-link to="/by-name">
          Search Recipes
        </router-link>
        <router-link to="/by-letter">
          Recipes By Letter
        </router-link>
        <router-link to="/by-ingredient">
          Recipes By Ingredients
        </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>

</style>
