<script setup lang="ts">
import { ref } from 'vue';
import { useUserInfoStore } from '@/store/userInfo';
import { useProjectBaseInfoStore } from '@/store/projectBaseInfo';
import { useRouter } from 'vue-router';
import { ElMessageBox } from 'element-plus';
import baseinfo from './views/baseinfo/baseinfo.vue';
const $router = useRouter();

const userDetail = ref(useUserInfoStore().getUserInfo());

const menuNav = ref(useProjectBaseInfoStore().getMenuNav());

const asideList = ref([
  {
    name: '基本信息',
    tab: 'baseinfo',
    path: '/dashboard/user/baseinfo',
    dev: false
  },
  {
    name: '我的收藏',
    tab: 'collection',
    path: '/dashboard/user/collection',
    dev: true
  },
  {
    name: '我的错题',
    tab: 'wrong',
    path: '/dashboard/user/wrong',
    dev: true
  },
  {
    name: '我的笔记',
    tab: 'note',
    path: '/dashboard/user/note',
    dev: true
  },
  {
    name: '账号安全',
    tab: 'safe',
    path: '/dashboard/user/safe',
    dev: true
  },
])

const topath = (dev: boolean, path: string) => {
  if (dev) {
    ElMessageBox.alert('该功能正在开发中，敬请期待', '提示', {
      confirmButtonText: '确定'
    });
  } else {
    $router.push(path);
  }
}
</script>

<style lang="scss" scoped>
@import "./user.css";
</style>

<template>
  <div class="shell">

    <div class="header">

      <div class="nav-left">
        <span>“智识探踪”知识追踪系统-个人中心</span>
      </div>
      <div v-for="i in menuNav">
        <span class="nav-btn nav-right" @click="topath(i.dev, i.router)">
          {{ i.name }}
        </span>
      </div>
    </div>

    <div class="container">

      <div class="aside">
        <div class="usercard">
          <img class="avatar" :src="userDetail.avatar" alt="">
          <div class="userinfo">
            <span class="name">{{ userDetail.nickname }}</span>
            <span class="school">{{ userDetail.school }}</span>
            <span class="level">{{ userDetail.level }}</span>
          </div>
        </div>
        <div class="asidemenu">
          <div :class="'asidemenu-item ' + ($route.params.tab == i.tab ? 'active' : '')" v-for="i in asideList"
            @click="topath(i.dev, i.path)">
            <span>{{ i.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="main">
      <baseinfo v-if="$route.params.tab == 'baseinfo'" />
    </div>
  </div>
</template>