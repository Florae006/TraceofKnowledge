<script setup lang="ts">
import type { FormRules, FormInstance, TabsPaneContext } from 'element-plus';
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue';
import { defineModel } from 'vue';

import { useRouter } from 'vue-router';

import { userLogin } from '@/apis/user/apis';

import { userRegisterData, userLoginData } from '@/types/user';

const loginForm = ref<userLoginData>({
  password: '',
  username: '',
});
const registForm = ref<userRegisterData>({
  email: '',
  nickname: '',
  username: '',
  password: '',
});

const loginFormRef = ref<FormInstance>();
const registFormRef = ref<FormInstance>();

const loginFormRules = reactive<FormRules<userLoginData>>({
  email: [
    { required: true, message: '请输入邮箱！', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址！', trigger: ['blur', 'change'] }
  ],
  nickname: [
    { required: true, message: '请输入昵称！', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符！', trigger: 'blur' }
  ],
  username: [
    { required: true, message: '请输入用户名！', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符！', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名包含非法字符！', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码！', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符！', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9_]+$/, message: '密码包含非法字符！', trigger: 'blur' }
  ],
});


const registFormRules = reactive<FormRules<userRegisterData>>({
  username: [
    { required: true, message: '请输入用户名！', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符！', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名包含非法字符！', trigger: 'blur' }
  ],
  nickname: [
    { required: true, message: '请输入昵称！', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符！', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱！', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址！', trigger: ['blur'] }
  ],
  password: [
    { required: true, message: '请输入密码！', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符！', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9_]+$/, message: '密码包含非法字符！', trigger: 'blur' }
  ],
});

const router = useRouter();

const goToDashboard = () => {
  console.log(loginForm.value);

  // userLogin(loginForm.value).then(res => {
  //   console.log('登录成功', res);
  //   ElMessage.success('登录成功');
  //   // 关闭登录框
  //   dialogFormVisible.value = false;
  // }
  // ).catch(err => {
  //   console.log('登录失败', err);
  //   ElMessage.error('登录失败');
  // });

  router.push({
    path: '/dashboard'
  });
};

const dialogFormVisible = defineModel({
  required: true,
  type: Boolean,
  default: false,
});

const formLabelWidth = '80px';

const handleSubmitForm = () => {
  if (activeTab.value === 'login') {
    submitForm(loginFormRef.value);
  }
  else if (activeTab.value == 'regist') {
    submitForm(registFormRef.value);
  }
}
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!!', fields);
      // 登录逻辑
      // TODO:发请求，获取token
      const token = "123456";

      // 保存token
      localStorage.setItem('userInfo', JSON.stringify({ token: token }));
      // 跳转页面
      goToDashboard();
    } else {
      console.log('error submit!!', fields);
      // return false;
    }
  });
}
const handleResetForm = () => {
  if (activeTab.value === 'login') {
    resetForm(loginFormRef.value);
  }
  else if (activeTab.value == 'regist') {
    resetForm(registFormRef.value);
  }
}

const resetForm = (formEl: FormInstance | undefined) => {
  console.log('resetForm', formEl);
  if (!formEl) return;
  formEl.resetFields();
}

const activeTab = ref('login');

const handleTabClick = (tab: TabsPaneContext) => {
  if (tab.paneName === 'login') {
  }
  else if (tab.paneName === 'regist') {
  }
}

</script>
<template>
  <el-dialog v-model="dialogFormVisible" :title="(activeTab == 'login' ? '立即登录' : '立即注册')" width="400"
    :align-center="true">
    <el-tabs v-model="activeTab" class="form-tabs" @tab-click="handleTabClick">
      <el-tab-pane label="登录" name="login">
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="auto" class="form">
          <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
            <el-input v-model.trim="loginForm.username" />
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
            <el-input v-model="loginForm.password" type="password" autocomplete="false" />
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="注册" name="regist">
        <el-form ref="registFormRef" :model="registForm" :rules="registFormRules" label-width="auto" class="form">
          <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
            <el-input v-model="registForm.username" aria-placeholder="" />
          </el-form-item>
          <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickname">
            <el-input v-model="registForm.nickname" autocomplete="false" />
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
            <el-input v-model="registForm.email" type="email" autocomplete="false" />
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
            <el-input v-model="registForm.password" type="password" autocomplete="false" />
          </el-form-item>
        </el-form>

      </el-tab-pane>
    </el-tabs>
    <template #footer>
      <div class="btns-box">
        <el-button class="btn" round @click="handleResetForm">重置信息</el-button>
        <el-button class="btn" round color="#eebe77" :auto-insert-space='true' @click="handleSubmitForm">{{
          activeTab == 'login' ? '立即登录' : '立即注册' }}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
@import "./LoginForm.less";
</style>

<style>
.form-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 500;
}
</style>