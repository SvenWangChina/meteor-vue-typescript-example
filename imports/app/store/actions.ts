import { ActionContext } from 'vuex';

import { State } from './state';

/**
 * toggle test
 *
 * @export
 * @param {ActionContext<State, State>} { commit }
 */
export function toggleTest({ commit }: ActionContext<State, State>): void {
    commit('toggleTest');
}
