<script lang="ts">
import { computed } from 'vue';
import BaseButton from '../ui/BaseButton.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


export default {
    props: ["meal"],
    setup(props) {
      const store = useStore();
      const router = useRouter();

      const meal = computed(() => {
          return props.meal;
      });
      const onDetails = () => {
          router.push(`/meal/${props.meal.idMeal}`);
      };
      const onPinMeal = () => {
        if(store.getters['meals/pinnedMeals'].length == 5)
          alert('You can pin maximum 5 meal recipes!');
        else 
          store.dispatch('meals/pinMeal', meal.value);
      }
      return {
          meal,
          onDetails,
          onPinMeal
      };
    },
    components: { BaseButton }
};
</script>
<template>
    <td class="w-4 p-4">
        <div class="flex items-center">
            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2">
            <label for="checkbox-table-1" class="sr-only">checkbox</label>
        </div>
    </td>
    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
      {{meal.strMeal}}
    </td>
    <td class="px-6 py-4">{{meal.strCategory}}</td>
    <td class="px-6 py-4">{{meal.strArea}}</td>
    <td class="px-6 py-4">{{meal.strTags}}</td>
    <td class="px-6 py-4">
      <BaseButton mode="flat" @click="onPinMeal">Pin</BaseButton>
      <BaseButton mode="flat" @click="onDetails">
        View
      </BaseButton>
    </td>
</template>