import axiosClient from "../utils/axiosClient";

export function searchMeals({ commit }, keyword: string) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
    })
}