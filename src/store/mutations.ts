import { IMeal, IState } from "../utils/types";

export function setSearchedMeals(state: IState, meals: IMeal[]) {
    state.searchedMeals = meals || []
}
