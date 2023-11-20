<script setup lang="ts">
import { onMounted } from 'vue';
// import store from '../../store';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
import Meals from '../../components/meals/Meals.vue';
// import { IIngredient } from '../../utils/types';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
// const ingredient = computed(() => { return store.state.meals.ingredient as IIngredient})
const meals = computed(() => {
    console.log('searchByIngredient-store', store); 
    // return store.state.meals.mealsByIngredient.map(meal => {
    //     console.log('meal-state', meal);
    //     return meal.strDescription = getMealDescriptionById(meal.idMeal)
    // })
    return store.state.meals.mealsByIngredient.map((meal) : Object => {
        console.log('meal finessse', meal)
        
        if(meal.strInstructions == undefined)
            meal.strInstructions = 'No description available in this view, please open the meal for more details';
        return meal;
    });
})

// const getMealDescriptionById = async (id: string) => {
//     const mealDetails = await store.dispatch('meals/getMealDetails', id);
//     return mealDetails.strDescription;
// }


onMounted(async () => {
    console.log('mounted-ingr-route', route);
    console.log('mounted-ingr-store', store);
    console.log('mounted-ingr-meals', meals);
    await store.dispatch('meals/searchMealsByIngredient', route.params.ingredient);
    await store.commit('meals/setMealsByIngredients', meals.value)
    // await meals.value.forEach((item) : any => item.strDescription = store.dispatch('meals/getMealDetails', item.idMeal))// await store.dispatch('meals/getMealDetails', )
    // console.log('meals fin', meals)
})
</script>

<template>
    <div class="max-w-[1200px] mx-auto">
        <div class="p-8 pb-0">
            <h1 class="text-4xl font-bold mb-4 text-green-500">Meals for {{ route.params.ingredient }}</h1>
        </div>
        <Meals :meals="meals" />
    </div>
</template>