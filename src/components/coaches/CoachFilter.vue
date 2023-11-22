<template>
    <BaseCard>
      <h2>Find Your Coach</h2>
      <span class="filter-option">
        <input type="checkbox" id="mexican" checked @change="setFilter" />
        <label for="mexican">Mexican</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="vegan" @change="setFilter" />
        <label for="vegan">Vegan</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="chinese" @change="setFilter" />
        <label for="chinese">Chinese</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="indian" @change="setFilter" />
        <label for="indian">Indian</label>
      </span>
    </BaseCard>
  </template>
  
  <script lang="ts">
import { ref } from 'vue';
import BaseCard from '../ui/BaseCard.vue';

  export default {
    // emits: ['change-filter'],
    setup({ emit }: any) {
        const filters = ref({
            mexican: true,
            vegan: false,
            chinese: false,
            indian: false
        });
        
        function setFilter(event: any) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...filters.value,
                [inputId]: isActive
            };
            filters.value = updatedFilters;
            emit("change-filter", updatedFilters);
        }

        return {
            filters,
            setFilter,
        };
    },
    components: { BaseCard }
}
  </script>
  
  <style scoped>
  h2 {
    margin: 0.5rem 0;
  }
  
  .filter-option {
    margin-right: 1rem;
  }
  
  .filter-option label,
  .filter-option input {
    vertical-align: middle;
  }
  
  .filter-option label {
    margin-left: 0.25rem;
  }
  
  .filter-option.active label {
    font-weight: bold;
  }
  </style>