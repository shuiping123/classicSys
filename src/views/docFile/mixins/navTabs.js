export const navTabs = {
  data() {
    return {
      activeName: 'pro',// 当前在选中状态的导航位置
      tabsList: [
        {name:'pro',label:'项目',showClose:false,show:true},
        {name:'item',label:'条目',showClose:false,show:true},
        {name:'vol',label:'卷内件',showClose:true,show:true},
        {name:'file',label:'电子文件',showClose:true,show:true},
      ]
    }
  },
  methods: {
    tabClickFun() {
    },
  }
}
