<script setup lang="ts">

import {computed, onMounted, ref} from 'vue';
// import axiosClient from '../utils/axiosClient';
import store from '../store';
import { useRoute } from 'vue-router';
import { IState } from '../utils/types';
// import MealItem from '../components/MealItem.vue';
// import YoutubeButton from '../components/YoutubeButton.vue';
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => (store.state as IState).searchedMeals);

const searchMeals = () => {
    // console.log('searchMeals')
    // console.log('keyword ', keyword)
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
    <div class="flex flex-col m-8">
        <input 
            type="text" 
            class="w-full" 
            placeholder="Search for meals" 
            v-model="keyword"
            @change="searchMeals"
        />
    </div>

    <Meals :meals="meals" />
</template>