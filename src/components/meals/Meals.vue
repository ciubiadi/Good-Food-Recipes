<script lang="ts">
import { computed } from 'vue';
import MealItem from './MealItem.vue';
// import { useStore } from 'vuex';
// import { IMeal, IMealValue } from '../../utils/types';

// const { meals } = defineProps({
//     meals: {
//         required: true,
//         type: Array as () => any[]
//     }
// })  
export default {
    props: ["meals"],
    setup(props) {
        // const store = useStore();
        const mealsList = computed(() => { 
            return props.meals;
            // console.log('store-Meals.vue', store)
            // return store.state.meals.searchedMeals;
        });
        return {
            mealsList,
        };
    },
    components: { MealItem }
}

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 mb-[3em]">
        <MealItem v-for="meal of mealsList" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!mealsList.length" class="flex justify-center text-gray-600 p-8">
        There are no meals
    </div>
</template>