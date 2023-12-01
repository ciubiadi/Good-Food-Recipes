<script lang="ts">
import { ref, SetupContext } from 'vue';
import BaseCard from '../ui/BaseCard.vue';

  export default {
    setup(_props: unknown, context: SetupContext<['change-filter']>) {
        const filters = ref({
            mexican: true,
            vegan: true,
            indian: true
        });
        
        function setFilter(event: any) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...filters.value,
                [inputId]: isActive
            };
            filters.value = updatedFilters;
            context.emit("change-filter", updatedFilters);
        }

        return {
            filters,
            setFilter,
        };
    },
    components: { BaseCard }
}
  </script>

<template>
  <BaseCard>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="mexican" checked @change="setFilter" />
      <label for="mexican">Mexican</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="vegan" checked @change="setFilter" />
      <label for="vegan">Vegan</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="indian" checked @change="setFilter" />
      <label for="indian">Indian</label>
    </span>
  </BaseCard>
</template>
  
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