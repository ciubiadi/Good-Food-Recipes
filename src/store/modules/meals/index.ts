// import { createStore, Store } from 'vuex';
// import { RootState } from '../../../utils/types'; 
// import state from './state';
// import * as actions from './actions';
// import * as mutations from './mutations';
// import * as getters from './getters';

// const store: Store<RootState> = createStore({
//   state,
//   actions,
//   mutations,
//   getters,
// });

// export default store;

import mutations from './mutations.ts';
import actions from './actions.ts';
import getters from './getters.ts';

export default {
  namespaced: true,
  state() {
    return {
      searchedMeals: [],
      mealsByLetter: [],
      mealsByIngredient: [],
      pinnedMeals: [],
      ingredient: {},
      loading: false,
    }
  },
  mutations,
  actions,
  getters
};