// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  define: {
    apiUrl:'/h5/dhl/api/public/index.php/api/v1/'///打包时开启
    // apiUrl:'/william/dhl_luckdraw/public/index.php/api/v1/'
    // define: {
    //   FOO: 'bar',
    // } 然后你写 console.log(hello, FOO); 会被编译成 console.log(hello, 'bar')。
  },
  history: { type: 'hash' },// 默认是 browser 防止部署服务器后，刷新打不开页面
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {//配置浏览器最低版本,比如兼容ie11
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome',
              icon: 'smile',
              component: './Welcome',
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              // authority: ['admin'],
              routes: [
                {
                  path: '/admin/luckdrawSetting',
                  name: 'luckdrawSetting',
                  icon: 'smile',
                  // authority: ['admin'],
                  component: './admin/luckdrawSetting',
                },
                // {
                //   path: '/admin/sub-page',
                //   name: 'sub-page',
                //   icon: 'smile',
                //   component: './Welcome',
                //   authority: ['admin'],
                // },
              ],
            },
            {
              icon: 'AimOutlined',
              name: 'userList',
              path: '/userList',
              routes: [
                {
                  path: '/userList/allUser',
                  name: 'allUser',
                  icon: 'smile',
                  component: './userList/allUser',
                },
                {
                  path: '/userList/luckUser',
                  name: 'luckUser',
                  icon: 'smile',
                  component: './userList/luckUser',
                },
                {
                  path: '/userList/integralHistory',
                  name: 'integralHistory',
                  icon: 'smile',
                  component: './userList/integralHistory',
                },
              ],
            },
            // {
            //   name: 'list.table-list',
            //   icon: 'table',
            //   path: '/list',
            //   component: './ListTableList',
            // },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  //下面选项，打包再开启
  base: '/h5/dhl/admin/', //部署到非根目录时才需配置
  publicPath: '/h5/dhl/admin/',
});
