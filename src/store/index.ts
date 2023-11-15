import { createStore, Store } from 'vuex';
import { RootState } from '../utils/types'; 
import state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

const store: Store<RootState> = createStore({
  state,
  actions,
  mutations,
  getters,
});

export default store;
