<script lang="ts">
import { onMounted } from 'vue';
// import { computed } from '@vue/reactivity';
// import { useStore } from 'vuex';
import TableSidebar from '../../components/meals/TableSidebar.vue';
import MealsTableSection from './MealsTableSection.vue';

export default {
    setup() {
        // const store = useStore();
        // const meals = computed(() => store.state.searchedMeals);
        
        onMounted(() => {
            // store.dispatch("meals/searchMeals", "");
        });

        return {
            // meals
        };
    },
    components: { TableSidebar, MealsTableSection }
}

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
    <TableSidebar class="w-[30%]"/>
    <MealsTableSection class="w-[70%]"/>
  </div>
</template>