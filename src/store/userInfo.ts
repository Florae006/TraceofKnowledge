import { defineStore } from 'pinia';
import { userProfileRes } from '@/types/user';

const testTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();



export const useUserInfoStore = defineStore('userInfo', {
  state: () => ({
    avatar: '/src/assets/img/avatar.png',
    birthday: '' as string,
    email: '' as string,
    intro: '' as string,
    label: [] as string[],
    nickname: '' as string,
    profession: '' as string,
    school: '' as string,
    level: '' as string,
    qq: '' as string,
    sex: '' as string,
    todoList: [
      {
        content: '数学小测',
        time: testTime,
      },
      {
        content: '数学小测',
        time: testTime,
      },
      {
        content: '数学小测',
        time: testTime,
      },
      {
        content: '数学小测',
        time: testTime,
      },
      {
        content: '数学小测',
        time: testTime,
      },
      {
        content: '数学小测',
        time: testTime,
      },
      {
        content: '数学小测',
        time: testTime,
      },
    ],
    questionList:[
      {
        type: '单选题',
        questions: {
          total: 12,
          list: [
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
          ]
        }
      },
      {
        type: '多选题',
        questions: {
          total: 36,
          list: [
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
          ]
        }
      },
      {
        type: '填空题',
        questions: {
          total: 31,
          list: [
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
          ]
        }
      },
      {
        type: '简答题',
        questions: {
          total: 7,
          list: [
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
            { qid: 123, },
          ]
        }
      },
    ]
  }),
  persist: true,
  actions: {
    setUserInfo(userInfo: userProfileRes) {
      this.avatar = userInfo.avatar;
      this.email = userInfo.email;
      this.nickname = userInfo.nickname;
      this.school = userInfo.school;
      this.level = userInfo.level;
      this.sex = userInfo.sex;
    },
    getUserInfo() {
      return this;
    },
    getTodoList() {
      return this.todoList;
    },
    getQuestionList() {
      return this.questionList;
    },
    // 单项修改
    changeBirthday(newBirthday: string) {
      this.birthday = newBirthday;
    },
    changeEmail(newEmail: string) {
      this.email = newEmail;
    },
    changeIntro(newIntro: string) {
      this.intro = newIntro;
    },
    changeLabel(newLabel: string[]) {
      this.label = newLabel;
    },
    changeNickname(newNickname: string) {
      this.nickname = newNickname;
    },
    changeProfession(newProfession: string) {
      this.profession = newProfession;
    },
    changeSchool(newSchool: string) {
      this.school = newSchool;
    },
    changeLevel(newLevel: string) {
      this.level = newLevel;
    },
    changeQQ(newQQ: string) {
      this.qq = newQQ;
    },
    changeSex(newSex: string) {
      this.sex = newSex;
    }
  }
});