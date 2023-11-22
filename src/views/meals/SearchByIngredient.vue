<script lang="ts">
import { onMounted } from 'vue';
// import store from '../../store';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
import Meals from '../../components/meals/Meals.vue';
// import { IIngredient } from '../../utils/types';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const route = useRoute();
        const meals = computed(() => {
            return store.state.meals.mealsByIngredient;

        });

        onMounted(async () => {
            await store.dispatch("meals/searchMealsByIngredient", route.params.ingredient);
        });
        return {
            meals,
            route
        };
    },
    components: { Meals }
}

</script>

<template>
    <div class="max-w-[1200px] mx-auto">
        <div class="p-8 pb-0">
            <h1 class="text-4xl font-bold mb-4 text-green-500">
                Meals for {{ route.params.ingredient }}
            </h1>
        </div>
        <Meals :meals="meals" />
    </div>
</template>