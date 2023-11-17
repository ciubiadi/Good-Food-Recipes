import { IState } from "../utils/types";

export function setSearchedMeals(state: IState, meals: any) {
    state.searchedMeals = meals || [];
    state.loading = false;
  }
  export function setMealsByLetter(state: IState, meals: any) {
    state.mealsByLetter = meals || [];
    state.loading = false;
  }
  export function setMealsByIngredients(state: IState, meals: any) {
    state.mealsByIngredient = meals || [];
    state.loading = false;
  }
  export function setIngredient(state: IState, ingredient: any) {
    state.ingredient = ingredient;
    state.loading = false;
  }
  export function setLoading(state: IState, isLoading: boolean) {
    state.loading = isLoading;
  }