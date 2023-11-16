export interface RootState {

}

// export interface IState {
//     searchedMeals: [];
// }

export interface IState {
    searchedMeals: IMeal[],
    mealsByLetter: IMeal[],
    mealsByIngredient: IMeal[],
    ingredient: Object
  }
  
export interface IMeal {
    idIngredient: string,
    strDescription: string,
    strIngredient: string,
    strMealThumb: string,
    strType: undefined | string,
    strYoutube: string | undefined,
    idMeal: undefined | string,
    strMeal: string
}