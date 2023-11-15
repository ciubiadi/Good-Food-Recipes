<script setup lang="ts">

import {computed, onMounted, ref} from 'vue';
import axiosClient from '../utils/axiosClient';
import store from '../store';
import { useRoute } from 'vue-router';
import { IState } from '../utils/types';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => (store.state as IState).searchedMeals);

const searchMeals = () => {
    console.log('searchMeals')
    console.log('keyword ', keyword)
    axiosClient.get(`seaerch.php?s=${keyword.value}`);
    store.dispatch('searchMeals', keyword.value)    
}

onMounted(() => {
    keyword.value = route.params.name as string;
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

    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <div v-for="meal of meals" :key="meal.idMeal">
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}"></router-link>
            <img :src="meal.strMealThumb" :alt="meal.strMeal"/>
            <h3>{{ meal.strMeal }}</h3>
            <div>
                <a :href="meal.strYoutube" target="_blank">YouTube</a>
                <router-link to="/">View</router-link>
            </div>
        </div>
        <pre>
            {{ meals }}
        </pre>
    </div>
</template>