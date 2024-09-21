<script setup lang="ts">
import { ref } from 'vue'
// const datevalue = ref(new Date())

import { Search } from '@element-plus/icons-vue'

const userDetail = ref({
  name: '张三',
  school: '实验中学',
  level: '高中一年级',
});

const menuNav = ref([
  {
    name: '个人中心',
    router:'user',
  },
  {
    name: '知识图谱',
    router:'knowledge',
  },
  {
    name: '测评管理',
    router:'test',
  },
  {
    name: '数据采集',
    router:'data',
  },
  {
    name: '首页',
    router:'home',
  },
])

const testTime = ref(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate());

const mylist = ref([
  {
    content: '数学小测',
    time: testTime.value,
  },
  {
    content: '数学小测',
    time: testTime.value,
  },
  {
    content: '数学小测',
    time: testTime.value,
  },
  {
    content: '数学小测',
    time: testTime.value,
  },
  {
    content: '数学小测',
    time: testTime.value,
  },
  {
    content: '数学小测',
    time: testTime.value,
  },
  {
    content: '数学小测',
    time: testTime.value,
  },
])

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max) - 1;
}

const tableData = ref([
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180).toString(),
  },
  {
    knowledgePoints: '基本初等函数',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '函数应用',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '空间几何体',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '点',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '直线与方程',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '圆和方程',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '直线和平面的位置关系',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '空间向量与立体几何',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '统计',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '概率',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '离散型随机变量的分布列',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '三角函数',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
  {
    knowledgePoints: '集合',
    knowledgeStatus: '掌握',
    prediction: Math.random().toFixed(2),
    spendTime: getRandomInt(180)+3+"min",
    lasthint: getRandomInt(180),
  },
])

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

</script>

<style lang="scss" scoped>
@import "./home.css";
</style>

<template>
  <div class="shell">
    <div class="header">
      <div class="nav-left">
        <span>“智识探踪”知识追踪插件模板-后台-学生信息</span>
      </div>

      <div v-for="i in menuNav">
        <span class="nav-btn nav-right" @click="$router.push(i.router)">
          {{ i.name }}
        </span>
      </div>
    </div>

    <div class="container">

      <div class="aside">
        <div class="usercard">
          <img class="avatar" src="@/assets/img/avatar.png" alt="">
          <div class="userinfo">
            <span class="name">{{ userDetail.name }}</span>
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
              <el-select v-model="forecastValue" placeholder="请选择预测时间" :empty-values="[null, undefined]" clearable >
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
              特定知识点的正确率预测
            </h3>
          </div>
          <el-table :data="tableData" height="600" stripe>
            <el-table-column type="index" width="80" />
            <el-table-column prop="knowledgePoints" label="知识点" width="180" />
            <el-table-column prop="knowledgeStatus" label="掌握状态" width="180" >
              <template #default="scope">
                <el-text v-if="scope.row.prediction>=0.8">
                  <el-text type="success">掌握</el-text>
                </el-text>
                <el-text v-else-if="scope.row.prediction>=0.5">
                  <el-text type="warning">一般</el-text>
                </el-text>
                <el-text v-else>
                  <el-text type="danger">尚未掌握</el-text>
                </el-text>
              </template>
            </el-table-column>
            <el-table-column prop="prediction" label="掌握程度">
              <template #default="scope">
                <el-progress :text-inside="true" :stroke-width="26" :percentage="(scope.row.prediction * 100).toFixed(2)"
                  color="#a0cfff" />
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