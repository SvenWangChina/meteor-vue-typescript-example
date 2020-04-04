/**
 * init vue plugin
 */
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import VueForceNextTick from 'vue-force-next-tick';
import VueRouter from 'vue-router';

import AppSpacer from '../ui/components/AppSpacer/index.vue';
import MainLayout from '../ui/layouts/MainLayout/index.vue';

// init third plugin
Vue.use(VueRouter);
Vue.use(VueMeteorTracker);
Vue.use(VueForceNextTick);

// init component
Vue.component('AppSpacer', AppSpacer);
Vue.component('MainLayout', MainLayout);

Vue.config.meteor.freeze = true;
