import { defineStore } from 'pinia';


const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max) - 1;
}

export const useProjectBaseInfoStore = defineStore('projectBaseInfo', {
  state: () => ({
    baseUrl: '',
    siteName: '智识探踪',
    siteNameEN: 'Knowledge Discovery',
    author: 'xxx',
    avatarUrl: '/src/assets/img/avatar.png',
    menuNav: [
      {
        name: '个人中心',
        router: '/dashboard/user/baseinfo',
      },
      {
        name: '知识图谱',
        router: '/dashboard/knowledge/getknowledge',
      },
      {
        name: '测评管理',
        router: '/dashboard/test',
      },
      {
        name: '数据采集',
        router: '/dashboard/data',
      },
      {
        name: '首页',
        router: '/dashboard/home',
      },
    ],
    tableData: [
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180).toString(),
      },
      {
        knowledgePoints: '基本初等函数',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '函数应用',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '空间几何体',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '点',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '直线与方程',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '圆和方程',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '直线和平面的位置关系',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '空间向量与立体几何',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '统计',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '概率',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '离散型随机变量的分布列',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '三角函数',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
      {
        knowledgePoints: '集合',
        knowledgeStatus: '掌握',
        prediction: Math.random().toFixed(2),
        spendTime: getRandomInt(180) + 3 + "min",
        lasthint: getRandomInt(180),
      },
    ]
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
    getMenuNav() {
      return this.menuNav;
    },
    getTableData() {
      return this.tableData;
    },
  },
});