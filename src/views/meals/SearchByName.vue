<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import BaseDialog from '../../components/ui/BaseDialog.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';
import Meals from '../../components/meals/Meals.vue';

export default {
    name: "SearchByName",
    setup() {
        const keyword = ref("");
        const loading = ref(false);
        const store = useStore();
        const meals = computed(() => { return store.state.meals.searchedMeals});
        
        const searchSomeMeals = async () => {
            loading.value = true;
            if (keyword.value) {
                loading.value = true;
                await store.dispatch("meals/searchMeals", keyword.value);
                loading.value = false;
            }
            else {
                store.commit("meals/setSearchedMeals", '');
                loading.value = false;
            }
        };
        onMounted(() => {
            loading.value = true;
            store.dispatch("meals/searchMeals", '');
            loading.value = false;
        });
        return {
            keyword,
            meals,
            searchSomeMeals,
            loading
        };
    },
    components: { Meals, BaseDialog, BaseSpinner }
}
</script>

<template>
    <BaseDialog :show="loading" title="Loading..." fixed>
        <BaseSpinner></BaseSpinner>
    </BaseDialog>
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

        <Meals :meals="meals" :loading="loading"/>
    </div>
</template>