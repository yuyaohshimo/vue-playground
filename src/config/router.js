import Hello from '@/spa/Hello';

export const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello,
  },
];

export const VueRouterObject = {
  routes,
  mode: 'history',
  saveScrollPosition: true,
};

export default VueRouter => new VueRouter(VueRouterObject);
