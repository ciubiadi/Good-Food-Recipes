import { ICoachesState } from "../../../utils/types";

export default {
    coaches(state: ICoachesState) {
      return state.coaches;
    },
    hasCoaches(state: ICoachesState) {
      return state.coaches && state.coaches.length > 0;
    },
};