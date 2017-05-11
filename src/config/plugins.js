// import Vue from 'vue'
import VueRouter from 'vue-router';

export default (Vue, ...params) => {
  params.filter(el => typeof el === 'object')
    .map(le => Vue.use(le));
  Vue.use(VueRouter);
};
