export interface RootState {

}

export interface IState {
    searchedMeals: [];
}
  
export interface IMeal {
    idIngredient: string,
    strDescription: string,
    strIngredient: string,
    strType: null | string
}