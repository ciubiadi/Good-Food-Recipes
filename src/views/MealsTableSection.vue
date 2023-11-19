<script lang="ts">
import { computed } from '@vue/reactivity';
import store from "../store";
import { IMeal, IState } from '../utils/types.ts';
import MealsTable from '../components/MealsTable.vue';

interface IMeals {
    meals: IMeal[]
}

// Define types for methods
// interface SidebarMethods {
//   onUnpin: (meal: IMeal) => void;
// }

// Export component options with TypeScript types
export default {
    setup(): IMeals {
        // Declare reactive state using ref
        const meals = computed(() => (store.state as IState).searchedMeals);
        // Method to increment the count
        // const onUnpin = () => {
        //   console.log('unpin');
        // };
        // Return reactive state and methods
        return {
            meals: meals.value,
        };
    },
    // components: { MealsTable }
};
</script>
<template>
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
          />
      </div>
    <br />

    <div class="filters-section">
      <h3>Filters</h3>
      <div class="filters flex justify-between">
        <div class="filter-tabs">
          <button class="btn btn-primary" >
            All
          </button>
          <button
            class="btn btn-secondary"

          >
            <!-- {{ office }} -->
            Tag
          </button>
        </div>
        <div class="create-group">
          <button class="btn btn-success" >
            Create Group
          </button>
        </div>
      </div>
    </div>
    <div class="number-of-entries">
      <i>There are {{ meals.length }} total meals</i>
      <p></p>
    </div>

    <!-- TABLE -->
    <div class="panel panel-default">
      <div class="table-responsive">
        <MealsTable />
      </div>
    </div>
    <div class="footer flex justify-between">
      <div class="page-size">
        Show
        <select id="selectNumbeOfEntries">
          <option value="5">5</option>
          <option value="10" selected>10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        entries
      </div>
      <div class="page-number">
        Page 
        <!-- {{ this.currentPage }}/{{ this.rows.length / this.pageSize % 1 != 0
          ? Math.trunc(meals.length / this.pageSize) + 1
          : Math.round(meals.length / this.pageSize) }} -->
      </div>
      <div class="pagination-buttons">
        <button class="btn btn-info" >Previous</button>
        <button class="btn btn-info" >Next</button>
      </div>
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

.container-main-table .form-group {
    text-align: center;
    margin: auto;
}

.table .map-groups-rows {
    border:2px solid black
}
.table .map-groups-rows .map-group-item {
    /* background-color:#d0badb;  */
    background-color:#d2c3d9; 
    color:black; 
    font-weight: bold;
}

.table .map-groups-rows-generalAdminGroup {
    border:2px solid #5D3F6A;
}

.table .map-groups-rows-generalAdminGroup .map-group-item-generalAdminGroup {
    background-color:#b19eba; 
    color:#fff; 
    font-weight: bolder;
}

@media only screen and (max-width: 991px) {
    .container-main-table {
        margin: 2em 0;
    }

    .container-main-table .form-group {
        text-align: center;
    }
}

</style>