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
}