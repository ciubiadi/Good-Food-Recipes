import { MutationTree } from "vuex";
import { IAuthState } from "../../../utils/types";

const mutations: MutationTree<IAuthState> = {
  setUser(state, payload): void {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  setAutoLogout(state): void {
    state.didAutoLogout = true;
  },
};

export default mutations;