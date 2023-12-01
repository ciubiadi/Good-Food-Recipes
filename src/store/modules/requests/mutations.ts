import { IRequestsState } from "../../../utils/types";

export default {
    addRequest(state: IRequestsState, payload: any) {
        state.requests.push(payload);
    },
    setRequests(state: IRequestsState, payload: any) {
        state.requests = payload;
    }
};