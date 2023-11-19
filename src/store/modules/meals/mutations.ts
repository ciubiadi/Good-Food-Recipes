import { IState } from "../../../utils/types";
  export default {
    setSearchedMeals(state: IState, meals: any) {
      state.searchedMeals = meals || [];
      state.loading = false;
    },
    setMealsByLetter(state: IState, meals: any) {
      state.mealsByLetter = meals || [];
      state.loading = false;
    },
    setMealsByIngredients(state: IState, meals: any) {
      state.mealsByIngredient = meals || [];
      state.loading = false;
    },
    setIngredient(state: IState, ingredient: any) {
      state.ingredient = ingredient;
      state.loading = false;
    },
    setLoading(state: IState, isLoading: boolean) {
      state.loading = isLoading;
    }
  };