export interface RootState {
    mealsByLetter: any[];
    mealsByIngredient: any[]; 
  }

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
    strCategory: string;
    strArea: string;
    strTags: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string;
    strIngredient17: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient20: string;
    value: string;
    strSource: string;
    [key: string]: string | undefined;
}

export interface IIngredient {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
    value: [];
}