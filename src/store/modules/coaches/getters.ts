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
    shouldUpdate(state: ICoachesState) {
      const lastFetch = state.lastFetch;
      if (!lastFetch) {
        return true;
      }
      const currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
};