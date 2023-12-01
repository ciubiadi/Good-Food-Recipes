<script lang="ts">
import { computed, onMounted } from 'vue';
import MealsTableItem from './MealsTableItem.vue';
import { useStore } from 'vuex';

// interface SidebarMethods {
//   onUnpin: (meal: IMeal) => void;
// }

export default {
    setup() {
        const store = useStore();

        const meals = computed(() => {
            console.log('store-MealsTable', store)
            return store.state.searchedMeals
        });

        onMounted(async () => {
            await store.dispatch("meals/searchMeals", '');
        });

        return {
            meals,
        };
    },
    components: { MealsTableItem }
};
</script>

<template>
    <table class="table table-bordered table-sm table-hover table-striped" id="webmapMeals">
        <thead>
            <tr>
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
            <tr :key="meal.idMeal" v-for="meal in meals" >
                <MealsTableItem :meal="meal"/>
            </tr>
        </tbody>
    </table>
</template>