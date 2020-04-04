/**
 * init vue
 *
 * @exports CreateApp
 *
 * @param {Function} [mounted=() => {}]
 * @returns {{ router: StackRouter, app: Vue }}
 */
import './classComponentHooks';

import Vue from 'vue';
import VueRouter from 'vue-router';

import './initPlugins';
import routes from './routes';
import store from './store';

import App from '../ui/App/index.vue';

export default function CreateApp(mounted: Function = () => {}): { router: VueRouter; app: Vue } {
    const router: VueRouter = new VueRouter({
        routes,
        mode: 'history',
    });

    const app: Vue = new Vue({
        // @ts-ignore：vue.d.ts not found mounted
        mounted,
        router,
        store,
        render: (h) => h(App),
    });

    app.$mount('#app');

    return {
        router,
        app,
    };
}
