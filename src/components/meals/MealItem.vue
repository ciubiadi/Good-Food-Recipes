<script lang="ts">
import { truncateWords } from '../../utils/filters';
import YoutubeButton from '../ui/YoutubeButton.vue';
import { computed } from 'vue';

export default {
    props: ["meal"],
    setup(props) {
        const mealDetail = computed(() => {
            return props.meal;
        });
        const instructions = computed(() => {
            return truncateWords(mealDetail.value.strInstructions, 20)
        })
        return {
            mealDetail,
            instructions
        };
    },
    components: { YoutubeButton }
}
</script>

<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <router-link :to="{name: 'mealDetails', params: {id: mealDetail.idMeal}}">
            <img 
                :src="mealDetail.strMealThumb" 
                :alt="mealDetail.strMeal"
                class="rounded-t-xl w-full h-48 object-cover"
            />
        </router-link>
        <div class="p-3">
            <h3 class="font-bold">{{ mealDetail.strMeal }}</h3>
            <p class="mb-4">
                <!-- {{ truncateWords(meal.strInstructions, 20) + ' (...)' }} -->
                {{ (typeof instructions !== undefined) || (instructions !== undefined) ? instructions + ' (...)' : 'No description available, please open the meal for more details.'}}
            </p> 
            <div class="flex items-center justify-between">
                <YoutubeButton :href="mealDetail.strYoutube">Youtube</YoutubeButton>
            </div>
        </div>
        
        <!-- <router-link to="/">View</router-link> -->
    </div>
</template>