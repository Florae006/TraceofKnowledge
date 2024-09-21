import { defineStore } from 'pinia';

export const useProjectBaseInfoStore = defineStore('projectBaseInfo', {
    state: () => ({
        baseUrl: '',
        siteName: '智识探踪',
        siteNameEN:'Knowledge Discovery',
        author: 'xxx',
        avatarUrl:'/src/assets/img/avatar.png',
    }),
    persist: true,
    actions: {
        setBaseInfo(baseUrl: string, siteName: string) {
            this.baseUrl = baseUrl;
            this.siteName = siteName;
            
        },
        changeBaseUrl(newBaseUrl: string) {
            this.baseUrl = newBaseUrl;
        },
        changeSiteName(newSiteName: string) {
            this.siteName = newSiteName;
        },
        getSiteName() {
            return this.siteName;
        },
        getSiteNameEN() {
            return this.siteNameEN;
        },
        getAuthor() {
            return this.author;
        },
        getAvatarUrl() {
            return this.avatarUrl;
        },
    },
});