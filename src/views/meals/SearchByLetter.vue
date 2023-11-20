<script lang="ts">
import { computed, onMounted, watch } from 'vue';
// import store from "../../store";
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Meals from '../../components/meals/Meals.vue';
 
export default {
    setup() {
        const store = useStore();
        const route = useRoute();
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        const meals = computed(() => {console.log('store-letter', store); return store.state.meals.mealsByLetter});
        watch(route, () => {
            console.log('BEFORE: SearchByLetter-watch:MEALS', meals)
            console.log('SearchByLetter-watch:STORE', store)
            store.dispatch("meals/searchMealsByLetter", route.params.letter);
            console.log('AFTER: SearchByLetter-watch:MEALS', meals)
            console.log('SearchByLetter-watch:STORE', store)
        });
        onMounted(() => {
            console.log('BEFORE: SearchByLetter-mounted:MEALS', meals)
            console.log('SearchByLetter-mounted:STORE', store)
            store.dispatch("meals/searchMealsByLetter", route.params.letter);
            console.log('AFTER: SearchByLetter-mounted:MEALS', meals)
            console.log('SearchByLetter-mounted:STORE', store)
        });
        return {
            letters,
            meals,
        };
    },
    components: { Meals }
}
</script>

<template>
    <div class="max-w-[1200px] mx-auto">
        <div class="p-8 pb-0">
            <h1 class="text-4xl font-bold mb-4 text-green-500">
                Meals by Letter
            </h1>
        </div>
        <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
            <router-link 
                :to="{name: 'byLetter', params: {letter}}" 
                v-for="letter of letters"
                :key="letter"
                class="w-2 h-2 flex items-center justify-center hover:text-green-500 hover:scale-150 transition-all"
            >
                {{ letter }}
            </router-link>
        </div>

        <Meals :meals="meals" />
    </div>
</template>