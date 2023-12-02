import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    //@ts-ignore
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // @ts-ignore
    component: () => import('../views/AboutView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(
    // 在乾坤环境下时，将所有的路由地址前加上'/junminronghe'，否则将跳转至主应用的相应页面（eg：跳转至这里的文章详情页面，如果不加'/junminronghe'的话，将跳转至主应用的'/content'页面，如果主应用没有这个页面，将跳转至404页面）
    qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app2' : '/'
  ),
  routes
})
export default router

