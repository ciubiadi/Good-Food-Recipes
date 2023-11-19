<script setup lang="ts">
import { onMounted} from 'vue';
// import DataTable from 'primevue/datatable';
// import Column from 'primevue/column';
import '../style.css'
import { IState } from '../utils/types.ts';
import store from "../store";
import { computed } from '@vue/reactivity';
import TableSidebar from '../components/TableSidebar.vue';
import MealsTableSection from './MealsTableSection.vue';

const meals = computed(() => (store.state as IState).searchedMeals);
// const isLoading = computed(() => (store.state as IState).loading);

// const ingredients = computed(() => {
//   const uniqueIngredients = new Set<string>();

//   meals.value.forEach((meal) => {
//     for (let i = 1; i <= 20; i++) {
//       const ingredient = meal[`strIngredient${i}`];
//       if (ingredient && ingredient.trim() !== '') {
//         uniqueIngredients.add(ingredient);
//       }
//     }
//   });

//   return Array.from(uniqueIngredients);
// });

onMounted(async () => {
    store.dispatch('searchMeals', '') 
    console.log(meals)
})

// const columns = [
//     // { field: 'idMeal', header: 'Id' },
//     { field: 'strMeal', header: 'Meal' },
//     { field: 'strCategory', header: 'Category' },
//     { field: 'strArea', header: 'Area' },
//     { field: 'strTags', header: 'Tags' },
//     { field: 'strTags', header: 'Tags' },
//     // { field: 'strYoutube', header: 'Video' },
// ];

</script>

<template>
    <!-- <div class="container mx-auto">
        <div v-if="isLoading" class="text-center mt-4">
            Loading...
        </div>
        <div class="card">
            <DataTable class="table-auto" :value="meals" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}">
                <template #paginatorstart>
                    <Button type="button" icon="pi pi-refresh" text />
                </template>
                <template #paginatorend>
                    <Button type="button" icon="pi pi-download" text />
                </template>
                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
            </DataTable>
        </div>
    </div> -->
  <div class="flex">
    <TableSidebar class="w-[20%]"/>
    <MealsTableSection class="w-[75%]"/>
  </div>
</template>