<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IMeal } from '../utils/types';

export default defineComponent({
  name: 'MealsTableItem',
  props: {
    meal: {
      type: Object as PropType<IMeal>,
      required: true,
    },
  },
  setup(props) {
    const onDetails = () => {
      // Implement your logic for handling details button click
      console.log('Details clicked for meal:', props.meal);
    };

    return {
      onDetails,
    };
  },
});
</script>
<template>
    <td>{{meal.strMeal}}</td>
    <td>{{meal.strCategory}}</td>
    <td>{{meal.strArea}}</td>
    <td>{{meal.strTags}}</td>
    <!-- <td>
        <a href="#" class="btn btn-primary" style="background-color: #5D3F6A" 
        >
           <i class="fas fa-thumbtack"></i> &nbsp; Pin
        </a>
    </td> -->
    <td>
      <button @click="onDetails">Details</button>
    </td>
</template>