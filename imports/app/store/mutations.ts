import { State } from './state';

/**
 * toggle test
 *
 * @export
 * @param {State} state
 */
export function toggleTest(state: State): void {
    state.test = !state.test;
}
