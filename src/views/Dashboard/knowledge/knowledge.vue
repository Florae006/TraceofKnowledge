<template>
  <div class="shell">
    <div class="header">
      <div class="nav-left">
        <span>“智识探踪”知识追踪系统-知识图谱</span>
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
          <div :class="'asidemenu-item ' + ($route.params.tab == i.tab ? 'active' : '')" v-for="i in tablist"
            @click="topath(i.dev, i.path)">
            <span>{{ i.name }}</span>
          </div>
        </div>
      </div>
      <div class="main">
        <div v-if="$route.params.tab == 'recent'" class="w-full h-full">
          <RecentResult />
        </div>
        <div v-else-if="$route.params.tab == 'accuracy'" class="w-full h-full">
          <Accuracy />
        </div>
        <div v-else-if="$route.params.tab == 'relationship'" class="w-full h-full">
          <KnoledgeGraph />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./knowledge.css";
</style>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserInfoStore } from '@/store/userInfo';
import { useProjectBaseInfoStore } from '@/store/projectBaseInfo';
import { ElMessageBox } from 'element-plus';
import KnoledgeGraph from '@/components/KnoledgeGraph.vue';
import Accuracy from '@/components/Accuracy.vue';
import RecentResult from '@/components/RecentResult.vue';

const $router = useRouter();

const userDetail = ref(useUserInfoStore().getUserInfo());

const menuNav = ref(useProjectBaseInfoStore().getMenuNav());

const tablist = ref([
  {
    name: '最近答题情况',
    tab: 'recent',
    path: '/dashboard/knowledge/recent',
    dev: false,
  },
  {
    name: '掌握情况分析',
    tab: 'accuracy',
    path: '/dashboard/knowledge/accuracy',
    dev: false,
  },
  {
    name: '知识点管理',
    tab: 'manageknowledge',
    path: '/dashboard/knowledge/manageknowledge',
    dev: true
  },
  {
    name: '知识点关系',
    tab: 'relationship',
    path: '/dashboard/knowledge/relationship',
    dev: false
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