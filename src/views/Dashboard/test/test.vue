<script setup lang="ts">
import { ref } from 'vue';
import { useUserInfoStore } from '@/store/userInfo';
import { useProjectBaseInfoStore } from '@/store/projectBaseInfo';
import { useRouter } from 'vue-router';
import { ElMessageBox } from 'element-plus';

const $router = useRouter();

const userDetail = ref(useUserInfoStore().getUserInfo());

const menuNav = ref(useProjectBaseInfoStore().getMenuNav());

const questionList = ref(useUserInfoStore().getQuestionList());

const qList = ref([
  {
    content: '设M是所有奇数组成的集合，则有 （ ）。',
    options: [
      {
        opname: 'A',
        opcontent: '3∈M',
      },
      {
        opname: 'B',
        opcontent: '1∉M',
      },
      {
        opname: 'C',
        opcontent: '2∈M',
      },
      {
        opname: 'D',
        opcontent: '0∈M',
      },
    ]
  }
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
@import "./test.css";
</style>

<template>
  <div class="shell">

    <div class="header">

      <div class="nav-left">
        <span>“智识探踪”知识追踪系统-追踪采样</span>
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

        <div class="mytodolist">
          <el-scrollbar height="60%">
            <h3 class="todo-header">答题卡</h3>
            <div class="todo-content" v-for="i in questionList">
              <span class="left">{{ i.type }}</span>
              <span>共{{ i.questions.total }}题</span>
              <div class="question-box">
                <span class="todo-content-item" v-for="(ii, index) in i.questions.list" :index="ii.qid">
                  {{ index + 1 }}
                </span>
              </div>
            </div>
          </el-scrollbar>

        </div>
      </div>

      <div class="main">
        <div class="main-nav">

        </div>
        <div class="main-content">
          <div class="header">
            <h3>公告：请认真作答！注意答题时间！</h3>
          </div>
          <div class="question" v-for="(i, index) in qList">
            <div>
              {{ index + 1 }}.{{ i.content }}
            </div>
            <div>
              <div v-for="ii in i.options" class="question-ops">
                {{ ii.opname }}：{{ ii.opcontent }}
              </div>
            </div>
            <div>
              <el-button round class="options" v-for="ii in i.options">{{ ii.opname }}</el-button>
            </div>
            <div>
              <!-- <h3 class="font-bold text-lg flex">解析与分析</h3>
              <div class="w-1/2 p-3">
                <h4 class="text-sm">解析</h4>
                <span>：奇数是指除2余1的数，所以3∈M，1∉M，2∉M，0∉M。</span>
              </div> -->
              <div>
                <h4 class="text-sm">分析与报告生成</h4>
                <p>
                  本题的解析可以查看<a href="#">点击这里</a>。
                </p>
                <p>
                  本题主要考察对奇数的理解，相似的练习题目可以查看<a href="#">点击这里</a>。
                  相关的前置知识可以查看<a href="#">点击这里</a>。
                </p>
                <p>
                  本题包含的知识点有：集合、整数、同余系等。所属的知识图谱的知识图谱可以查看<a href="#">点击这里</a>。
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>