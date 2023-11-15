import axiosClient from "../utils/axiosClient";

export function searchMeals({ commit } : any, keyword: string) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
    })
}