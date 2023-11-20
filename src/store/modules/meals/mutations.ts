import { IIngredient, IMealValue, IStoreState } from "../../../utils/types";
  export default {
    setSearchedMeals(state: IStoreState, meals: IMealValue[]) {
      console.log('setSearchedMeals-mutations.ts:STATE', state)
      console.log('setSearchedMeals-mutations.ts:MEALS', meals)
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