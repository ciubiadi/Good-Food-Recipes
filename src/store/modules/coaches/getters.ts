import { ICoach, ICoachesState } from "../../../utils/types";

export default {
    coaches(state: ICoachesState) {
      return state.coaches;
    },
    hasCoaches(state: ICoachesState) {
      return state.coaches && state.coaches.length > 0;
    },
    isCoach(_: any, getters: any, _2: any, rootGetters: any) {
      const coaches = getters.coaches;
      const userId = rootGetters.userId;
      return coaches.some((coach: ICoach) => coach.id === userId);
    },
};