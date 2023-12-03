<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import MealsTable from '../../components/meals/MealsTable.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';

export default {
  setup() {
    const keyword = ref("");
    const store = useStore();
    const currentPage = ref(1);
    const isLoading = ref(false);
    const itemsPerPage = ref(10); 
    const entriesPerPageOptions = [5, 10, 15, 25]; 
    const paginatedMeals = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = Math.min(startIndex + itemsPerPage.value - 1, meals.value.length - 1);
      return meals.value.slice(startIndex, endIndex + 1);
    });

    const meals = computed(() => {
      return store.state.meals.searchedMeals;
    });

    const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
    const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage.value - 1, meals.value.length - 1));
    const totalPages = computed(() => Math.ceil(meals.value.length / itemsPerPage.value));

    const searchSomeMeals = () => {
      isLoading.value = true;
      if (keyword.value) {
        store.dispatch("meals/searchMeals", keyword.value);
      } else {
        store.dispatch("meals/searchMeals", '');
      }
      isLoading.value = false;
    };

    const changePage = (page: number) => {
      currentPage.value = page;
    };

    const updatePage = () => {
      currentPage.value = 1; // Reset to the first page when changing items per page
    };

    onMounted(() => {
      isLoading.value = true;
      store.dispatch("meals/searchMeals", '');
      isLoading.value = false;

    });

    return {
      keyword,
      meals,
      searchSomeMeals,
      paginatedMeals,
      currentPage,
      itemsPerPage,
      startIndex,
      endIndex,
      changePage,
      updatePage,
      totalPages,
      entriesPerPageOptions,
      isLoading
    };
  },
  components: { MealsTable, BaseDialog, BaseSpinner },
};
</script>
<template>
    <BaseDialog :show="isLoading" title="Loading Meals..." fixed>
        <BaseSpinner></BaseSpinner>
    </BaseDialog>
    <div class="col-span-10 sm:col-span-12 container-main-table">
    <!-- INPUT SEARCH FILTER -->
    <br />
      <div>
          <h1 class="text-4xl font-bold mb-4 text-green-500">
              Search Meals
          </h1>
      </div>
      <div class="flex flex-wrap justify-center mb-6">
          <input 
              type="text" 
              class="rounded border-2 bg-white border-gray-200 focus:ring-green-500 focus:border-green-500 w-full"
              placeholder="Search for meals" 
              v-model="keyword"
              @keyup="searchSomeMeals"
          />
      </div>
    <br />

    <!-- <div class="filters-section">
      <h3>Filters</h3>
      <div class="filters flex justify-between">
        <div class="filter-tabs">
          <button class="btn btn-primary" >
            All
          </button>
          <button
            class="btn btn-secondary"

          >
            Tag
          </button>
        </div>
        <div class="create-group">
          <button class="btn btn-success" >
            Create Group
          </button>
        </div>
      </div>
    </div> -->

    <!-- TABLE -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <MealsTable :meals="paginatedMeals" />
      <nav class="flex items-center justify-between p-4" aria-label="Table navigation">
        <div class="">
          <label for="entriesPerPage">Show entries per page : </label>
          <select id="entriesPerPage" v-model="itemsPerPage" @change="updatePage">
            <option v-for="option in entriesPerPageOptions" :key="option" :value="option">{{ option }}</option>
          </select>
        </div>
        <span class="text-md font-normal italic text-gray-500 m-auto">
          Showing {{ startIndex + 1 }} - {{ endIndex + 1 }} of {{ meals.length }} meals
        </span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li v-if="currentPage > 1">
            <button @click="changePage(currentPage - 1)" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-green-100 hover:text-green-700">
              Previous
            </button>
          </li>
          <li v-for="page in totalPages" :key="page">
            <button @click="changePage(page)" :class="{ ' text-green-800 bg-green-50 ' : page === currentPage }" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-green-100 hover:text-green-700">
              {{ page }}
            </button>
          </li>
          <li v-if="currentPage < totalPages">
            <button @click="changePage(currentPage + 1)" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-green-100 hover:text-green-700">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
#searchMeal {
  width:50%;
  margin: auto;
}

.container-main-table {
  width:100%;
  margin: 2em
}

.filters-section {
  padding:0.8em 0;
}

.filters .filter-tabs .btn {
    margin: 0.3em 0.3em 0.3em 0;
    border-radius: 30px;
}

.pagination-buttons .btn {
    margin-right: 0.5em;
}
.create-group .btn{
    margin-left: 0.5em;
    /* border-radius:15px; */
}

#entriesPerPage {
  background: white;
  border: 1px solid #ccc;
  padding: 0.5em;
  border-radius: 0.25em;
  font-size: 1em;
  cursor: pointer;
}

/* Style to match the button style */
#entriesPerPage:hover {
  background-color: #f7fafc;
  border-color: #a0aec0;
}

#entriesPerPage:focus {
  box-shadow: 0 0 0 2px #4fd1c5;
}

/* Style when an option is selected */
#entriesPerPage:active,
#entriesPerPage:visited {
  background-color: #f7fafc;
  border-color: #a0aec0;
}

@media only screen and (max-width: 991px) {
    .container-main-table {
        margin: 2em 0;
    }
}

</style>
