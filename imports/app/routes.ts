/**
 * init routes
 *
 * @exports routes
 */
import { RouteConfig } from 'vue-router';

import Home from '../ui/pages/Home/index.vue';

import Demo from '../ui/pages/Demo/index.vue';

import NotFound from '../ui/pages/NotFound/index.vue';

const routes: RouteConfig[] = [
    { path: '/', name: 'Home', component: Home },

    { path: '/demo', name: 'Demo', component: Demo },

    { path: '*', name: 'NotFound', component: NotFound },
];

export default routes;
