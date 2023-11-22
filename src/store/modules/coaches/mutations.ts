import { ICoachesState } from "../../../utils/types";

export default {
    registerCoach(state: ICoachesState, payload: any) {
        state.coaches.push(payload);
    },
    setCoaches(state: ICoachesState, payload: any) {
        state.coaches = payload;
    },
    setFetchTimestamp(state: ICoachesState) {
        state.lastFetch = new Date().getTime();
    }
};