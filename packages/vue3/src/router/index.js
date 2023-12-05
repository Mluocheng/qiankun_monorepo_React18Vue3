const routes = [
  { path: '/', name: 'homePage', component: () => import(/* webpackChunkName: "home" */ '@/views/Home') },
  { path: '/home', name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/views/Home') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/About') },
];

export default routes;
