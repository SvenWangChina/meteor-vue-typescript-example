/**
 * vuex config
 */
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import state, { State } from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const store: Store<State> = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;
