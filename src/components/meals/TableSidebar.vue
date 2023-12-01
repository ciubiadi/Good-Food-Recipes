<script lang="ts">
// import store from '../../store/';
import { IMealValue } from '../../utils/types';
import { onMounted, ref } from 'vue';
import axiosClient from '../../utils/axiosClient';

// interface PinnedMeals {
//     pinnedMeals: IMeal[]
// }

// // Define types for methods
// interface SidebarMethods {
//   onUnpin: (meal: IMeal) => void;
// }

// Export component options with TypeScript types
export default {
  // setup(): PinnedMeals & SidebarMethods {
  setup() {
    // const store = useStore();
    // // Declare reactive state using ref
    // const pinnedMeals = computed(() => { console.log('sstore', store); return store.state.searchedMeals});
    const pinnedMeals = ref<IMealValue[]>([]);
    // Method to increment the count
    const onUnpin = (meal: IMealValue) => {
      console.log('TableSidebar-onUnpin-meal', meal)
    };

    onMounted(async () => {
      for (let i = 0; i < 10; i++) {
        axiosClient
          .get(`random.php`)
          .then(({ data }) => { 
            return pinnedMeals.value.push(data.meals[0])
          });
      }
    })

    // Return reactive state and methods
    return {
        pinnedMeals,
        onUnpin
    };
  },
};
</script>

<template>
    <div class="custom-container-sidebar">
      <div class="pinned-meals-list">
        <h2 class="pinned-meals-title text-center">Pinned Meals <small>({{ pinnedMeals.length }})</small></h2>
        <ul class="list-meals" v-if="pinnedMeals.length !== 0">
          <li class="flex justify-between items-center my-2" :key="meal.idMeal" v-for="meal in pinnedMeals">
            <span>{{ meal.strMeal }}</span>
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