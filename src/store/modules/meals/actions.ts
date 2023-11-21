import axiosClient from "../../../utils/axiosClient";
import { IMealValue } from "../../../utils/types";

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
  async searchMealsByIngredient({ commit, dispatch } : any, ingredient: string) {
    console.log('searchMealsByIngredient-actions.ts:ingredient', ingredient);
    commit('setLoading', true);
    await axiosClient.get(`filter.php?i=${ingredient}`)
      .then(({ data }) => {
        console.log('searchMealsByIngredient-actions.ts:DATA', data)
          data.meals.forEach((meal : IMealValue) => {
            dispatch('mealInstructionsChanger', meal)
              .then((response : any) => meal = response)     
            console.log('meal yes', meal);
            // axiosClient.get(`lookup.php?i=${meal.idMeal}`)
            //   .then(({data}) => {
            // //     console.log('data getDetails', data.meals)
            // //     // return data.meals[0];
            //     if(typeof data.meals[0].strInstructions == undefined)
            //       meal.strInstructions = data.meals[0].strInstructions;
            // //     // return data.meals[0];
            // //     // return meal.strInstructinos = data.meals[0].strInstructinos
            //   })
          })
        console.log('data.meals', data.meals)
        // commit('setMealsByIngredients', newMeals)
        commit('setMealsByIngredients', data.meals)
      })
      .finally(() => {
        commit('setLoading', false)
      })
  },

  async mealInstructionsChanger(context: any, payload: any){
    const mealInfo = payload;
    await axiosClient.get(`lookup.php?i=${payload.idMeal}`)
      .then(({data}) => {
        if(typeof data.meals[0].strInstructions == undefined)
          mealInfo.strInstructions = data.meals[0].strInstructions;
        return mealInfo;  
      })
      console.log('mealInfo', mealInfo)
    return mealInfo;
  }
  // async getMealDetails(context : any, payload: any){
  //   // console.log('context', context)
  //   await axiosClient.get(`lookup.php?i=${payload.idMeal}`)
  //       .then(({data}) => {
  //         console.log('data getDetails', data)
  //         return payload.strInstructions = data.meals[0].strInstructions;
  //         // return data.meals[0];
  //       })
  // }
  // async getMealDetails({ commit, getters } : any, mealId: number){
  //   // get mealsByIngredient and for each meal, 
  //   // get the meal details with the below fetch
  //   // and commit setMealsByIngredients mutation after all
  //   // meals are changed and have the strInstructions
  //   // property added from the mealDetails
  //   // Check if you can use getters in actions to retrieve
  //   // the mealsByIngredient
  //   commit('setLoading', true);
  //   getters.mealsByIngredient.forEach((meal) => {
  //     axiosClient.get(`lookup.php?i=${mealId}`)
  //     .then(({data}) => {
  //       console.log('data getDetails', data)
  //       // return data.meals[0];
  //     })
  //     .finally(() => {
  //       commit('setLoading', false);
  //     })
  //   })
    
  // }
}