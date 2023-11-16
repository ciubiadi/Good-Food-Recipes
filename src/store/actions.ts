import axiosClient from "../utils/axiosClient";

export function searchMeals({ commit } : any, keyword: string) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
    })
}
export function searchMealsByLetter({ commit } : any, letter: string) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
        console.log('data in searchMealsByLetter', data.meals)
      commit('setMealsByLetter', data.meals)
    })
}
export function searchMealsByIngredient({ commit } : any, ingredient: string) {
  axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => {
      commit('setMealsByIngredients', data.meals)
    })
}