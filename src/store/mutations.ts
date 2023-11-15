import { IMeal, IState } from "../utils/types";

export function setSearchedMeals(state: IState, meals: any) {
    state.searchedMeals = meals || []
}
