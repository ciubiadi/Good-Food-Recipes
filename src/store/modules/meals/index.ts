import mutations from './mutations.ts';
import actions from './actions.ts';
import getters from './getters.ts';

export default {
  namespaced: true,
  state() {
    return {
      searchedMeals: [],
      mealsByLetter: [],
      mealsByIngredient: [],
      pinnedMeals: [],
      ingredient: {},
    }
  },
  mutations,
  actions,
  getters
};