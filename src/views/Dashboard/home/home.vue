<script setup lang="ts">
import { ref } from 'vue';
import { useUserInfoStore } from '@/store/userInfo';
import { useProjectBaseInfoStore } from '@/store/projectBaseInfo';
import { useRouter } from 'vue-router';
import { Search } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus';

const $router = useRouter();

const userDetail = ref(useUserInfoStore().getUserInfo());

const menuNav = ref(useProjectBaseInfoStore().getMenuNav());


const mylist = ref(useUserInfoStore().getTodoList());


const tableData = ref(useProjectBaseInfoStore().getTableData());

console.log(tableData)

const forecastValue = ref('1');

const options = ref([
  {
    value: '1',
    label: '1天内',
  },
  {
    value: '3',
    label: '3天内',
  },
  {
    value: '7',
    label: '一周内',
  },
  {
    value: '15',
    label: '半个月内',
  },
  {
    value: '30',
    label: '一个月内',
  },
  {
    value: '90',
    label: '三个月内',
  },
  {
    value: '180',
    label: '半年内',
  },
  {
    value: '365',
    label: '一年内',
  },
])

const searchInput = ref('');

const logout = () => {
  console.log('logout')
}


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
@import "./home.css";
@import "@/assets/styles/main-content.css";

.select {
  width: 200px;
}
</style>

<template>
  <div class="shell">
    <div class="header">
      <div class="nav-left">
        <span>“智识探踪”知识追踪插件模板-后台-学生信息</span>
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

          <div class="mytodolist">
            <h3 class="todo-header">我的任务</h3>
            <ul>
              <li v-for="i in mylist">
                <div class="todo-content">
                  <span class="left">{{ i.content }}</span>
                  <span class="right">{{ i.time }}</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="footer">
            <el-button class="logout-btns" type="primary" @click="logout">账号登出</el-button>
            <el-button class="logout-btns">联系教师</el-button>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="main-nav">
          <div class="search bar">
            <el-input v-model="searchInput" style="width: 600px" placeholder="搜索关键词" :prefix-icon="Search" />
          </div>

          <div class="options">
            <el-button class="op-btn" size="large" type="primary">打印报告</el-button>
            <el-button class="op-btn" size="large" type="success">生成报告</el-button>
          </div>

        </div>

        <div class="main-content">
          <div class="header">
            <h3>
              <el-select class="select" v-model="forecastValue" placeholder="请选择预测时间" :empty-values="[null, undefined]"
                clearable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
              特定知识点的正确率预测
            </h3>
          </div>
          <el-table :data="tableData" height="600" stripe>
            <el-table-column type="index" width="80" />
            <el-table-column prop="knowledgePoints" label="知识点" width="180" />
            <el-table-column prop="knowledgeStatus" label="掌握状态" width="180">
              <template #default="scope">
                <el-text v-if="scope.row.prediction >= 0.8">
                  <el-text type="success">掌握</el-text>
                </el-text>
                <el-text v-else-if="scope.row.prediction >= 0.5">
                  <el-text type="warning">一般</el-text>
                </el-text>
                <el-text v-else>
                  <el-text type="danger">尚未掌握</el-text>
                </el-text>
              </template>
            </el-table-column>
            <el-table-column prop="prediction" label="掌握程度">
              <template #default="scope">
                <el-progress :text-inside="true" :stroke-width="26"
                  :percentage="parseFloat((scope.row.prediction * 100).toFixed(2))" color="#a0cfff" />
              </template>
            </el-table-column>
            <el-table-column prop="spendTime" label="作答时间" width="180" />
            <el-table-column prop="lasthint" label="上次提示时间" width="180">
              <template #default="scope">
                <el-row>
                  <el-col :span="24">
                    <el-text v-if="scope.row.lasthint > 0" class="mx-1" type="warning">
                      <el-text type="danger">{{ scope.row.lasthint }}</el-text>天前已提示
                    </el-text>
                    <el-text v-else-if="scope.row.lasthint == 0" class="mx-1" type="success">今天已提示</el-text>
                    <el-text v-else class="mx-1" type="info">从未提示</el-text>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div class="mb-4">
                      <el-button link type="success" size="small" text bg>
                        发送提示消息
                      </el-button>
                    </div>
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </div>

      </div>
    </div>
  </div>
</template>