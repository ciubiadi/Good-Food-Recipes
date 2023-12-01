import { IRequestsState } from "../../../utils/types";

export default {
  requests(state: IRequestsState, _: any, _2: any, rootGetters: any) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req: any) => req.coachId === coachId);
  },
  hasRequests(_: any, getters: any) {
    return getters.requests && getters.requests.length > 0;
  }
};