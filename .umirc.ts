import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
    // menubar:false
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      menuRender: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      menuRender: false,
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',

    },
    {
      path: '/app1',
      microApp: 'app1',
      menuRender: false,
    },
    {
      path: '/app2',
      microApp: 'app2',
      menuRender: false,
    },
    {
      path: '/app3',
      microApp: 'app3',
      menuRender: false,
      // flatMenu: true,
      routes: [
        {
          path: '/app3/home',
        },
        {
          path: '/app3/about',
        }
      ]
    },
  ],
  npmClient: 'pnpm',
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8001', // html entry
          container: '#react18', 
          props: {
            data: { aaa: '主应用传给挨app1子应用的数据' }
          }
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:8002', // html entry
          container: '#vue3',  // 和app.vue配置的节点一致
          props: {
            data: { aaa: '主应用传给挨app2子应用的数据' }
          }
        },
        {
          name: 'app3', // 唯一 id
          entry: '//localhost:7105', // html entry
          container: '#app3',  // 和app.vue配置的节点一致
          props: {
            data: { aaa: '主应用传给挨app2子应用的数据' }
          }
        },
      ],
    },
  },
});

