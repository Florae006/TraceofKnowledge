<script setup lang="ts">
import LoginForm from './LoginForm/LoginForm.vue';
import { ref } from 'vue';
import { useProjectBaseInfoStore } from '@/store/projectBaseInfo';

const siteName = useProjectBaseInfoStore().getSiteName();

const loginFormVisible = ref<Boolean>(false);

const showForm = function () {
  loginFormVisible.value = true;
}

</script>
<template>
  <div class="shell-home">
    <div class="cover" />
    <div class="m-content">
      <h1>{{ siteName }} 后台管理系统</h1>
      <div class="greeting">
        <h3>👋欢迎使用 {{ siteName }} 管理系统</h3>
      </div>
      <div class="btns-box">
        <div class="tips">👇点击下方按钮登录吧</div>
        <el-button type="primary" round plain size="large" color="#529b2e" class="login-btn"
          @click="showForm">登录/注册</el-button>
      </div>
    </div>

    <LoginForm v-model="loginFormVisible" />

  </div>
</template>

<style scoped>
@import "@/assets/styles/Home.less";
@import "@/assets/styles/main-content.less";
</style>
