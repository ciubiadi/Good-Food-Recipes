// export interface RootState {
//     mealsByLetter: any[];
//     mealsByIngredient: any[]; 
//     ingredient: any;
//   }

export interface IStoreState {
    userId: String,
    searchedMeals: IMealValue[],
    mealsByLetter: IMealValue[],
    mealsByIngredient: IMealValue[],
    pinnedMeals: IMealValue[],
    ingredient: Object,
    loading: Boolean
}

export interface IMealsState {
  searchedMeals: IMealValue[],
  mealsByLetter: IMealValue[],
  mealsByIngredient: IMealValue[],
  pinnedMeals: IMealValue[],
  ingredient: Object,
  loading: Boolean
}

export interface ICoachesState {
  coaches: ICoach[],
  lastFetch: number,
  // requests: any
}

export interface IRequestsState {
  requests: IRequest[]
}

export interface IAuthState {
  userId: string | null,
  token: string | null,
  didAutoLogout: boolean
} 
  
export interface ICoach {
  id: string,
  firstName: string,
  lastName: string,
  areas: string[],
  description: string,
  hourlyRate: number
}

export interface IAuth {
  email: string,
  password: string,
  returnSecureToken: boolean
}

export interface IAuthPayload {
  mode: string;
  email: string;
  password: string;
}

export interface IAuthResponseData {
  message?: string;
  expiresIn: string;
  idToken: string;
  localId: string;
}

export interface IAuthResponsePayload {
  idToken : string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

export interface IRequest {
  id: string | number,
  userEmail: string,
  message: string,
  coachId: string | number,
}

export interface IMealValue {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
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
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string | null;
  // [key: string]: string | undefined;
}

export interface IIngredient {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
    value: [];
}