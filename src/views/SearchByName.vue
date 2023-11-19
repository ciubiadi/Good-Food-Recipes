<script setup lang="ts">

import {computed, onMounted, ref} from 'vue';
// import axiosClient from '../utils/axiosClient';
import store from "../store";
import { useRoute } from 'vue-router';
import { IState } from '../utils/types';
// import MealItem from '../components/MealItem.vue';
// import YoutubeButton from '../components/YoutubeButton.vue';
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => (store.state as IState).searchedMeals);

const searchMeals = () => {
    // axiosClient.get(`seaerch.php?s=${keyword.value}`);
    if(keyword.value){
        store.dispatch('searchMeals', keyword.value)    
    } else {
        store.commit('setSearchedMeals', [])
    }
}

onMounted(() => {
    keyword.value = route.params.name as string;
    if (keyword.value) {
        searchMeals()
    }
})
</script>

<template>
    <div class="max-w-[1200px] mx-auto">
        <div class="p-8 pb-0">
            <h1 class="text-4xl font-bold mb-4 text-green-500">
                Meals by Letter
            </h1>
        </div>
        <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
            <input 
                type="text" 
                class="rounded border-2 bg-white border-gray-200 focus:ring-green-500 focus:border-green-500 w-full"
                placeholder="Search for meals" 
                v-model="keyword"
                @change="searchMeals"
            />
        </div>

        <Meals :meals="meals" />
    </div>
</template>