<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Meals from '../../components/meals/Meals.vue';
export default {
    name: "SearchByName",
    setup() {
        const keyword = ref("");
        const route = useRoute();
        const store = useStore();
        const meals = computed(() => store.state.searchedMeals);
        
        const searchSomeMeals = async () => {
            // try {
                console.log('keyword-SearchByName', keyword)
            if (keyword.value) {
                console.log('meals-SearchByName.vue-BEFORE', meals)
                await store.dispatch("meals/searchMeals", keyword.value);
                console.log('meals-SearchByName.vue-AFTER', meals)
            }
            else {
                console.log('meals-SearchByName.vue-BEFORE', meals)
                store.commit("meals/setSearchedMeals", []);
                console.log('meals-SearchByName.vue-AFTER', meals)
            }
            // }
        };
        onMounted(() => {
            // console.log('route-SearchByName-onMounted', route);
            // keyword.value = route.params.name as string;
            // if (keyword.value) {
            //     searchSomeMeals();
            // }
        });
        return {
            keyword,
            route,
            store,
            meals,
            searchSomeMeals,
        };
    },
    components: { Meals }
}
</script>

<template>
    <div class="max-w-[1200px] mx-auto">
        <div class="p-8 pb-0">
            <h1 class="text-4xl font-bold mb-4 text-green-500">
                Search Meals
            </h1>
        </div>
        <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
            <input 
                type="text" 
                class="rounded border-2 bg-white border-gray-200 focus:ring-green-500 focus:border-green-500 w-full"
                placeholder="Search for meals" 
                v-model="keyword"
                @change="searchSomeMeals"
            />
        </div>

        <Meals />
    </div>
</template>