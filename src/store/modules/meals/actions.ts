import axiosClient from "../../../utils/axiosClient";
import { IMealValue } from "../../../utils/types";

export default {
  async searchMeals({ commit } : any, keyword: string) {
    commit('setLoading', true);
    await axiosClient.get(`search.php?s=${keyword}`)
      .then(({ data }) => {
        commit('setSearchedMeals', data.meals)
      })
      .finally(() => {
        commit('setLoading', false)
      })
  },
  async searchMealsByLetter({ commit } : any, letter: string) {
    commit('setLoading', true);
    await axiosClient.get(`search.php?f=${letter}`)
      .then(({ data }) => {
        commit('setMealsByLetter', data.meals)
      })
      .finally(() => {
        commit('setLoading', false)
      })
  },
  async searchMealsByIngredient({ commit }: any, ingredient: string) {
    commit('setLoading', true);
    try {
      const { data } = await axiosClient.get(`filter.php?i=${ingredient}`);
      const mealPromises = data.meals.map(async (meal: IMealValue) => {
        const response = await axiosClient.get(`lookup.php?i=${meal.idMeal}`);
        meal.strInstructions = response.data.meals[0].strInstructions;
        return meal;
      });
  
      const updatedMeals = await Promise.all(mealPromises);

      commit('setMealsByIngredients', updatedMeals);
    } catch (error: any) {
      console.error(error, error.message)
    } finally {
      commit('setLoading', false);
    }
  },
  async pinMeal(context: any, payload: any) {
    const newPinnedMeal = {...payload};

    if(context.rootGetters.userId != null){
      // Check if the meal with the same idMeal is already pinned
      if (context.state.pinnedMeals.some((meal: any) => meal.idMeal === newPinnedMeal.idMeal)) {
        alert('This meal is already pinned!');
        return; // Stop further execution
      }

      const response = await fetch(
        `https://vuemealsandcooks-default-rtdb.europe-west1.firebasedatabase.app/pinnedMeals/${context.rootGetters.userId}/${newPinnedMeal.idMeal}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(newPinnedMeal),
        }
      );
  
      const responseData = await response.json();
  
      if (!response.ok) {
        const error = new Error(responseData.name || 'Failed to send request.');
        throw error;
      }
      // newPinnedMeal.id = responseData.name;    
      context.commit('addPinnedMeal', newPinnedMeal);
    } else {
      alert('You need to login in order to pin a meal!');
    }
  },
  async unpinMeal(context: any, mealId: string) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
  
    if (coachId && token) {
      const response = await fetch(
        `https://vuemealsandcooks-default-rtdb.europe-west1.firebasedatabase.app/pinnedMeals/${coachId}/${mealId}.json?auth=` +
        token,
        {
          method: 'DELETE',
        }
      );
  
      const responseData = await response.json();
  
      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to send request.');
        throw error;
      }
      context.commit('removePinnedMeal', mealId);
    } else {
      alert('You need to login in order to unpin a meal!');
    }
  },
  async fetchPinnedMeals(context: any) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    if(coachId && token){
      const response = await fetch(
        `https://vuemealsandcooks-default-rtdb.europe-west1.firebasedatabase.app/pinnedMeals/${coachId}.json?auth=` +
          token
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to fetch requests.'
        );
        throw error;
      }
  
      const pinnedMeals: any = [];
  
      for (const key in responseData) {
        const pinnedMeal: any = {...responseData[key]};
        pinnedMeals.push(pinnedMeal);
      }
      context.commit('setPinnedMeals', pinnedMeals);
    } else {
      alert('You need to login to see your pinned meals!');
    }
  },
}