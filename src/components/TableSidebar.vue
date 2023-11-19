<script lang="ts">
import { computed } from '@vue/reactivity';
import store from '../store/index.js';
import { IMeal, IState } from '../utils/types.js';

interface PinnedMeals {
    pinnedMeals: IMeal[]
}

// Define types for methods
interface SidebarMethods {
  onUnpin: (meal: IMeal) => void;
}

// Export component options with TypeScript types
export default {
  setup(): PinnedMeals & SidebarMethods {
    // Declare reactive state using ref
    const pinnedMeals = computed(() => (store.state as IState).searchedMeals);

    // Method to increment the count
    const onUnpin = () => {
      console.log('unpin');
    };

    // Return reactive state and methods
    return {
        pinnedMeals: pinnedMeals.value,
        onUnpin,
    };
  },
};
</script>

<template>
    <div class="custom-container-sidebar">
      <div class="pinned-meals-list">
        <h2 class="pinned-meals-title text-center">Pinned Meals <small>({{ pinnedMeals.length }})</small></h2>
        <ul class="list-meals" v-if="pinnedMeals.length !== 0">
          <li class="flex justify-between items-center my-2" :key="meal.value.idMeal" v-for="meal in pinnedMeals">
            <span>{{ meal.value.strMeal }}</span>
            <a class="bg-green-800 text-white p-1 rounded" @click="onUnpin(meal)">Unpin</a>
          </li>
        </ul>
        <div v-else class="no-records-found">
          No Pinned Meals Found.
        </div>
      </div>
    </div>
</template>

<style scoped>
.custom-container-sidebar {
    height: 100vh; 
    border-right:1px solid #f5dbff;
    @apply bg-green-50;
     padding-bottom: 3em;
}

.list-meals{
    margin: 2em
}

.custom-container-sidebar .pinned-meals-title {
    margin-top: 0;
    padding-top: 0.6em;
}

@media only screen and (max-width: 991px) {
    .custom-container-sidebar {
        height: 100vh; 
        border-right:1px solid #f5dbff;
        @apply bg-green-50;
    } 
    .custom-container-sidebar .map-group {
        margin-bottom: 2em;
    }  
}
.pinned-meals-list {
    border-bottom: 1px solid gray;
    margin-bottom: 0.4em;
    padding-bottom: 0.4em;
}

.no-records-found {
    text-align: center;
    font-weight: bold;
    font-style: italic;
    margin: 0.7em;
}
</style>