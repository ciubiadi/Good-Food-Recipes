import axiosClient from "../../../utils/axiosClient";

// export function searchMeals({ commit } : any, keyword: string) {
//   commit('setLoading', true);
//   axiosClient.get(`search.php?s=${keyword}`)
//     .then(({ data }) => {
//       commit('setSearchedMeals', data.meals)
//     })
//     .finally(() => {
//       commit('setLoading', false)
//     })
// }
// export function searchMealsByLetter({ commit } : any, letter: string) {
//   commit('setLoading', true);
//   axiosClient.get(`search.php?f=${letter}`)
//     .then(({ data }) => {
//       commit('setMealsByLetter', data.meals)
//     })
//     .finally(() => {
//       commit('setLoading', false)
//     })
// }
// export function searchMealsByIngredient({ commit } : any, ingredient: string) {
//   commit('setLoading', true);
//   axiosClient.get(`filter.php?i=${ingredient}`)
//     .then(({ data }) => {
//       commit('setMealsByIngredients', data.meals)
//     })
//     .finally(() => {
//       commit('setLoading', false)
//     })
// }

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
  async searchMealsByIngredient({ commit } : any, ingredient: string) {
    console.log('searchMealsByIngredient-actions.ts:ingredient', ingredient);
    commit('setLoading', true);
    axiosClient.get(`filter.php?i=${ingredient}`)
      .then(({ data }) => {
        console.log('searchMealsByIngredient-actions.ts:DATA', data)
        commit('setMealsByIngredients', data.meals)
      })
      .finally(() => {
        commit('setLoading', false)
      })
  },
  async getMealDetails({ commit } : any, mealId: number){
    commit('setLoading', true);
    axiosClient.get(`'lookup.php?i=${mealId}`)
      .then(({data}) => {
        console.log('data getDetails', data)
      })
      .finally(() => {
        commit('setLoading', false);
      })
  }
}