import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import(/* webpackChunkName: "login" */ '@/views/Home/Home.vue'),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Dashboard/home.vue'),
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "user" */ '@/views/Dashboard/user.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/Dashboard/test.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log(from);
  console.log(to.path);
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo') || '{}');
  if (from.path === '/' && to.path === '/') {
    // 初始进入页面时，判断是否有token, 有则直接跳转到dashboard
    console.log(userInfo);
    if (userInfo.token) {
      next({ name: 'Dashboard'});
    } else {
      next({ name: 'LoginPage'});
    }
  }
  else if (to.path === '/dashboard') {
    // 前往打印页面之前，判断是否有token
    if (userInfo.token) {
      next();
    } else {
      next({ name: 'LoginPage'});
    }
  }
  else {
    next();
  }
});

export default router;
