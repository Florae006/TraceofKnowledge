<script setup lang="ts">
import { ref } from 'vue';
import { useUserInfoStore } from '@/store/userInfo';
import { useProjectBaseInfoStore } from '@/store/projectBaseInfo';
// const datevalue = ref(new Date())

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

</script>

<style lang="scss" scoped>
@import "./test.css";
</style>

<template>
  <div class="shell">

    <div class="header">

      <div class="nav-left">
        <span>“智识探踪”知识追踪系统-答题页面</span>
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
              <el-button round class="options" v-for="ii in i.options">{{ ii.opname }}
              </el-button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>