Vue.component('article-list', {
  data: function () {
    return {
    }
  },
  template: `
  <div id='article-list' >
    <div class="list">
    <!-- 此处添加模板-->  
    <!--<router-link to="/跳转路由name">文章标题</router-link>-->

      <router-link to="/cssRevelationLight" class="kkkk">
        CSS制作聚光灯效果
      </router-link>
      <router-link to="/cssFaultTypeBtn">
        CSS制作赛博朋克故障风按钮
      </router-link>
    </div>
  </div>
  `,
  methods: {

  },
  mounted: function () {

  }
})