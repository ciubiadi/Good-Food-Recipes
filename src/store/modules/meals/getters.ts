export default {
    searchedMeals(state: any) {
        return state.searchedMeals;
    },
    mealsByLetter(state: any) {
        return state.mealsByLetter
    },
    mealsByIngredient(state: any) {
        return state.mealsByIngredient
    },
    pinnedMeals(state: any) {
        return state.pinnedMeals
    },
    ingredient(state: any) {
        return state.ingredient
    },
    loading(state: any) {
        return state.loading
    }
};