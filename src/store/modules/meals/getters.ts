import { IMealsState } from "../../../utils/types";

export default {
    searchedMeals(state: IMealsState) {
        return state.searchedMeals;
    },
    mealsByLetter(state: IMealsState) {
        return state.mealsByLetter
    },
    mealsByIngredient(state: IMealsState) {
        return state.mealsByIngredient
    },
    pinnedMeals(state: IMealsState) {
        return state.pinnedMeals
    },
    ingredient(state: IMealsState) {
        return state.ingredient
    },
    loading(state: IMealsState) {
        return state.loading
    }
};