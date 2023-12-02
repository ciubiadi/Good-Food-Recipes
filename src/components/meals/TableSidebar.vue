<script lang="ts">
import { computed, onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const isLoading = ref(false);
    const pinnedMeals = computed(() => {
      return store.getters['meals/pinnedMeals'];
    })

    const onUnpin = async (mealId: string) => {
      try {
        store.dispatch('meals/unpinMeal', mealId);
      } catch (error: any) {
        console.error('Failed to unpin meal:', error.message);
      }
    }

    const redirectToMeal = (mealId : string) => {
      router.push(`/meal/${mealId}`);
    }

    async function loadPinnedMeals() {
        isLoading.value = true;
        
        try {
            await store.dispatch('meals/fetchPinnedMeals');
        } catch(error: any){
            error.value = error.message || 'Something failed!';
        }

        isLoading.value = false;
    }

    onMounted(() => {
        loadPinnedMeals();
    })
    
    return {
      pinnedMeals,
      isLoading,
      onUnpin,
      redirectToMeal
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
            <span class="fake-link inline-block cursor-pointer transition-transform transform-gpu hover:text-blue-500 hover:scale-110" @click="redirectToMeal(meal.idMeal)">
              {{ meal.strMeal }}
            </span>
            <a class="bg-green-800 text-white p-1 rounded transition-all hover:scale-110 hover:bg-green-600 hover:text-white" @click="onUnpin(meal.idMeal)">Unpin</a>
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
  min-height: 100vh; 
  height: auto; 
  border-right:1px solid #f5dbff;
  @apply bg-green-50;
    padding-bottom: 3em;
}

.list-meals{
  margin: 2em;
}

.custom-container-sidebar .pinned-meals-title {
  margin-top: 0;
  padding-top: 0.6em;
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

@media only screen and (max-width: 991px) {
  .custom-container-sidebar {
    min-height: 100vh; 
    height: auto; 
    border-right:1px solid #f5dbff;
    @apply bg-green-50;
  } 
  .custom-container-sidebar .map-group {
    margin-bottom: 2em;
  }  
}
</style>