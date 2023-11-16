import { IMeal, IState } from "../utils/types";

export function setSearchedMeals(state: IState, meals: any) {
    state.searchedMeals = meals || []
  }
  export function setMealsByLetter(state: IState, meals: any) {
    state.mealsByLetter = meals || []
  }
  export function setMealsByIngredients(state: IState, meals: any) {
    state.mealsByIngredient = meals || []
  }
  export function setIngredient(state: IState, ingredient: any) {
    state.ingredient = ingredient
  }