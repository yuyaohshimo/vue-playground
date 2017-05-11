import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';

import plugins from '@/config/plugins';
import configRouter from '@/config/router';
import vuexStore from '@/vuex/store';

plugins(Vue, Vuex, VueRouter);

const store = new Vuex.Store(vuexStore);
const router = configRouter(VueRouter);

sync(store, router);

import App from '@/App'; // eslint-disable-line

new Vue({ // eslint-disable-line no-new
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});
