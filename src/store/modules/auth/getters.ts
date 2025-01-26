import { GetterTree } from "vuex";
import { IAuthState } from "../../../utils/types";

const getters: GetterTree<IAuthState, any> = {
  email(state): string | null {
    return state.email;
  },
  userId(state): string | null {
    return state.userId;
  },
  token(state): string | null {
    return state.token;
  },
  isAuthenticated(state): boolean {
    return !!state.token;
  },
  didAutoLogout(state): boolean {
    return state.didAutoLogout;
  },
};

export default getters;