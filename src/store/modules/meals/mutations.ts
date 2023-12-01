import { IIngredient, IMealValue, IStoreState } from "../../../utils/types";
  export default {
    setSearchedMeals(state: IStoreState, meals: IMealValue[]) {
      state.searchedMeals = meals || [];
      state.loading = false;
    },
    setMealsByLetter(state: IStoreState, meals: IMealValue[]) {
      state.mealsByLetter = meals || [];
      state.loading = false;
    },
    setMealsByIngredients(state: IStoreState, meals: IMealValue[]) {
      state.mealsByIngredient = meals || [];
      state.loading = false;
    },
    setIngredient(state: IStoreState, ingredient: IIngredient) {
      state.ingredient = ingredient;
      state.loading = false;
    },
    setLoading(state: IStoreState, isLoading: boolean) {
      state.loading = isLoading;
    }
  };