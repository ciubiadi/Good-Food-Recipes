<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axiosClient from '../utils/axiosClient'
    
const ingredients = ref({});

onMounted(() => {
    axiosClient.get(`list.php?i=list`)
        .then(({data}) => {
            ingredients.value = data.meals;
        })
});
</script>

<template>
    <div>
        <!-- <pre>{{ ingredients }}</pre> -->
        <router-link 
            v-for="ingredient of ingredients"
            :key="ingredient.idIngredient"
            :to="{
                name: 'byIngredient',
                params: { ingredient: ingredient.idIngredient },
            }"
        >
            <h3>{{ ingredient.strIngredient }}</h3>
            <div>{{ ingredient.strDescription }}</div>
            <br/>
            <hr />
        </router-link>
    </div>
</template>