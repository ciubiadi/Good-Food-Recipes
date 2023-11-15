<script setup lang="ts">

import {computed, ref} from 'vue';
import axiosClient from '../utils/axiosClient';
import store from '../store';
import { IState } from '../utils/types';

const keyword = ref('');
const meals = computed(() => (store.state as IState).searchedMeals);

const searchMeals = () => {
    console.log('searchMeals')
    console.log('keyword ', keyword)
    axiosClient.get(`seaerch.php?s=${keyword.value}`);
    store.dispatch('searchMeals', keyword.value)    
}
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

    <div>
        <pre>
            {{ meals }}
        </pre>
    </div>
</template>