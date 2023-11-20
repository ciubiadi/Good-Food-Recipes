<script lang="ts">
export default {
  name: 'MealsTableItem',
  // props: {
  //   meal: {
  //     type: Object as PropType<IMeal>,
  //     required: true,
  //   },
  // },
  props: ['meal'],
  setup(props) {
    const onDetails = () => {
      // Implement your logic for handling details button click
      console.log('Details clicked for meal:', props.meal);
    };

    return {
      onDetails,
    };
  },
};
</script>
<template>
    <td>{{meal.value.strMeal}}</td>
    <td>{{meal.value.strCategory}}</td>
    <td>{{meal.value.strArea}}</td>
    <td>{{meal.value.strTags}}</td>
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