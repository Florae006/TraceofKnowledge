import { defineStore } from 'pinia';
import { userBaseInfo } from '@/types/user';

export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({
        birthday: '' as string,
        email: '' as string,
        intro: '' as string,
        label: [] as string[],
        nickname: '' as string,
        profession: '' as string,
        qq: '' as string,
        sex: '' as string,
    }),
    persist: true,
    actions: {
        setUserInfo(userInfo: userBaseInfo) {
            this.birthday = userInfo.birthday;
            this.email = userInfo.email;
            this.intro = userInfo.intro;
            this.label = userInfo.label;
            this.nickname = userInfo.nickname;
            this.profession = userInfo.profession;
            this.qq = userInfo.qq;
            this.sex = userInfo.sex;
        },
        getUserInfo() {
            return this;
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
        changeQQ(newQQ: string) {
            this.qq = newQQ;
        },
        changeSex(newSex: string) { 
            this.sex = newSex;
        }
    }
});