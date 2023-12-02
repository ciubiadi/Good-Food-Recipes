<script lang="ts">
import MealsTableItem from './MealsTableItem.vue';
import { computed } from 'vue';

export default {
    props: ["meals"],
    setup(props) {
        const mealsList = computed(() => {
            return props.meals;
        });
        return {
            mealsList,
        };
    },
    components: { MealsTableItem }
};
</script>

<template>
    <table class="w-full text-md text-left rtl:text-right" id="webmapMeals">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring">
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">Meal
                    <!-- <i :class="[currentSortDir == 'asc' ? 'fa-solid fa-arrow-down' : 'fa-solid fa-arrow-up' ]"></i> -->
                </th>
                <th scope="col" class="px-6 py-3">Category 
                    <!-- <i :class="[currentSortDir == 'asc' ? 'fa-solid fa-arrow-down' : 'fa-solid fa-arrow-up' ]"></i> -->
                </th>
                <th scope="col" class="px-6 py-3">Area 
                    <!-- <i :class="[currentSortDir == 'asc' ? 'fa-solid fa-arrow-down' : 'fa-solid fa-arrow-up' ]"></i> -->
                </th>
                <th scope="col" class="px-6 py-3">Tags
                    <!-- <i :class="[currentSortDir == 'asc' ? 'fa-solid fa-arrow-down' : 'fa-solid fa-arrow-up' ]"></i> -->
                </th>
                <th scope="col" class="px-6 py-3">Actions</th>
            </tr>   
        </thead>
        <tbody>        
            <tr class="bg-white border-b hover:bg-green-50" 
            :key="meal.idMeal" v-for="meal in meals" >
                <MealsTableItem :meal="meal"/>
            </tr>
        </tbody>
    </table>
</template>