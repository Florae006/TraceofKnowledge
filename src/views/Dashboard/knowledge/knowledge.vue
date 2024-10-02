<template>
  <div class="shell">
    <div class="header">
      <div class="nav-left">
        <span>“智识探踪”知识追踪系统-知识图谱</span>
      </div>
      <div v-for="i in menuNav">
        <span class="nav-btn nav-right" @click="topath(false, i.router)">
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
        <div v-if="$route.params.tab == 'getknowledge'">
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

const $router = useRouter();

const userDetail = ref(useUserInfoStore().getUserInfo());

const menuNav = ref(useProjectBaseInfoStore().getMenuNav());

const tablist = ref([
  {
    name: '查看知识图谱',
    tab: 'getknowledge',
    path: '/dashboard/knowledge/getknowledge',
    dev: false,
  },
  {
    name: '知识点管理',
    tab: 'manageknowledge',
    path: '/dashboard/knowledge/manageknowledge',
    dev: true
  },
  {
    name: '知识点关系管理',
    tab: 'manageknowledgerelation',
    path: '/dashboard/knowledge/manageknowledgerelation',
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