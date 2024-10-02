<template>
  <div class="shell">
    <div class="main">
      <el-descriptions v-if="!editstatus" title="基本信息" size="large" border class="card" align="center">
        <el-descriptions-item label="头像">
          <el-avatar v-model="form.avatar" :size="80"></el-avatar>
        </el-descriptions-item>
        <el-descriptions-item label="用户名">{{ form.username ? form.username : '暂无' }}</el-descriptions-item>
        <el-descriptions-item label="昵称">{{ form.nickname ? form.nickname : '暂无' }}</el-descriptions-item>
        <el-descriptions-item label="性别">{{ form.sex ? form.sex : '暂无' }}</el-descriptions-item>
        <el-descriptions-item label="学校">{{ form.school ? form.school : '暂无' }}</el-descriptions-item>
        <el-descriptions-item label="年级">{{ form.level ? form.level : '暂无' }}</el-descriptions-item>
        <el-descriptions-item label="班级">{{ form.class ? form.class : '暂无' }}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{ form.email ? form.email : '暂无' }}</el-descriptions-item>
        <el-descriptions-item label="电话">{{ form.phone ? form.phone : '暂无' }}</el-descriptions-item>
        <el-descriptions-item label="地址">{{ form.address ? form.address : '暂无' }}</el-descriptions-item>
      </el-descriptions>
      <el-form v-else class="form">
        <el-form-item label="头像">
          <el-avatar v-model="form.avatar" :size="80"></el-avatar>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="学校">
          <el-input v-model="form.school"></el-input>
        </el-form-item>
        <el-form-item label="年级">
          <el-input v-model="form.level"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="form.class"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn-box">
        <el-button v-if="!editstatus" @click="editstatus = true" class="btn" type="primary">编辑</el-button>
        <el-button v-else @click="editstatus = false" class="btn" type="primary">保存</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shell {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}

.card {
  width: 80%;
}

.form {
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-box {
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.btn {
  margin: 30px;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';

const editstatus = ref(false);

const form = ref({
  username: 'admin',
  nickname: '管理员',
  sex: '男',
  avatar: '/src/assets/img/avatar.png',
  school: '东北师范大学附属中学',
  level: '高一',
  class: '1班',
  email: '',
  phone: '',
  address: '',
});

</script>