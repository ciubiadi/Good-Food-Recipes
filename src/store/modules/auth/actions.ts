import { ActionContext } from 'vuex';
import { IAuthPayload, IAuthResponseData, IAuthState } from '../../../utils/types';

interface RootState {
  auth: IAuthState;
}

let timer: ReturnType<typeof setTimeout> | null;

export default {
  async login(context: ActionContext<RootState, RootState>, payload: IAuthPayload): Promise<void> {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async signup(context: ActionContext<RootState, RootState>, payload: IAuthPayload): Promise<void> {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },
  async auth(context: ActionContext<RootState, RootState>, payload: IAuthPayload): Promise<void> {
    const mode = payload.mode;
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA1nmIVqjqJng7GwzXKqjEGB105bEymmPo';

    if (mode === 'signup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA1nmIVqjqJng7GwzXKqjEGB105bEymmPo';
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData: IAuthResponseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to authenticate. Check your login data.'
      );
      throw error;
    }

    const expiresIn = +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationDate.toString());

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
  tryLogin(context: ActionContext<RootState, RootState>): void {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    // if (!token || !userId || !tokenExpiration) {
    //   return;
    // }

    // const expiresIn = +tokenExpiration - new Date().getTime();
    if (tokenExpiration) {
      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn > 0) {
        timer = setTimeout(() => {
          context.dispatch('autoLogout');
        }, expiresIn);
      }
    }

    // if (expiresIn < 0) {
    //   return;
    // }

    // timer = setTimeout(() => {
    //   context.dispatch('autoLogout');
    // }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
      });
    }
  },
  logout(context: ActionContext<RootState, RootState>): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },
  autoLogout(context: ActionContext<RootState, RootState>): void {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  },
};
