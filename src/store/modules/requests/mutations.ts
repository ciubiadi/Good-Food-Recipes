import { ICoachesState } from "../../../utils/types";

export default {
    addRequest(state: ICoachesState, payload: any) {
        state.requests.push(payload);
    },
    setRequests(state: ICoachesState, payload: any) {
        state.requests = payload;
    }
};