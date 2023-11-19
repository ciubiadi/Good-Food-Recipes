<script lang="ts">
import store from '../store';
import { IMeal, IState } from '../utils/types';
import { computed, onMounted } from 'vue';
import MealsTableItem from './MealsTableItem.vue';

interface IMeals {
    meals: IMeal[]
}

// Define types for methods
// interface SidebarMethods {
//   onUnpin: (meal: IMeal) => void;
// }

// Export component options with TypeScript types
export default {
    setup(): IMeals {
        // Declare reactive state using ref
        const meals = computed(() => (store.state as IState).searchedMeals);
        // const isLoading = computed(() => (store.state as IState).loading);
        // const ingredients = computed(() => {
        //   const uniqueIngredients = new Set<string>();
        //   meals.value.forEach((meal) => {
        //     for (let i = 1; i <= 20; i++) {
        //       const ingredient = meal[`strIngredient${i}`];
        //       if (ingredient && ingredient.trim() !== '') {
        //         uniqueIngredients.add(ingredient);
        //       }
        //     }
        //   });
        //   return Array.from(uniqueIngredients);
        // });
        onMounted(async () => {
            store.dispatch("searchMeals", "");
            console.log(meals);
        });
        // Method to increment the count
        // const onUnpin = () => {
        //   console.log('unpin');
        // };
        // Return reactive state and methods
        return {
            meals: meals.value,
        };
    },
    components: { MealsTableItem }
};
</script>

<template>
    <table class="table table-bordered table-sm table-hover table-striped" id="webmapMeals">
        <thead>
            <tr>
                <!-- <th class="text-center" style="width:10%">
                    <input type="checkbox"
                        name="toggleCheckboxes"
                        id="toggleCheckboxes" 
                    
                    >
                </th> -->
                <!-- <th class="text-center">
                    <div class="between:flex">
                        <span>Map</span>
                    </div>
                </th> -->
                <th class="text-center">Meal
                    <!-- <i :class="[currentSortDir == 'asc' ? 'fa-solid fa-arrow-down' : 'fa-solid fa-arrow-up' ]"></i> -->
                </th>
                <th class="text-center">Category 
                    <!-- <i :class="[currentSortDir == 'asc' ? 'fa-solid fa-arrow-down' : 'fa-solid fa-arrow-up' ]"></i> -->
                </th>
                <th class="text-center">Area 
                    <!-- <i :class="[currentSortDir == 'asc' ? 'fa-solid fa-arrow-down' : 'fa-solid fa-arrow-up' ]"></i> -->
                </th>
                <th class="text-center">Tags
                    <!-- <i :class="[currentSortDir == 'asc' ? 'fa-solid fa-arrow-down' : 'fa-solid fa-arrow-up' ]"></i> -->
                </th>
                <th class="text-center">Actions</th>
            </tr>   
        </thead>
        <tbody>        
            <tr :key="meal.value.idMeal" v-for="meal in meals" >
                <MealsTableItem :meal="meal"/>
            </tr>
        </tbody>
    </table>
</template>