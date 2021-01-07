
const home = {
  data () {
    return {
      backBtnIsShow: false,
      date: {},
    }
  },
  methods: {
    handleBack () {
      this.$router.back()
      console.log(this.$router);
    },
    windowScrollTop () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    showtime () {
      let data = new Date();
      let y = data.getFullYear();
      let m = data.getMonth() + 1;
      let d = data.getDate();

      let hh = data.getHours();
      let mm = data.getMinutes();
      let ss = data.getSeconds();

      if (ss < 10) {
        ss = "0" + ss;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      if (hh < 10) {
        hh = "0" + hh;
      }

      if (d < 10) {
        d = "0" + d;
      }

      if (m < 10) {
        m = "0" + m;
      }

      if (y < 10) {
        y = "0" + y;
      }

      this.date = {
        years: y,
        months: m,
        days: d,
        hour: hh,
        minute: mm,
        second: ss
      }
    },
    scrollToView (e) {
      var value = e.target.getAttribute('value')
      hub.$emit('scrollToView', value)
    }
  },
  mounted: function () {
    this.$el.pageYOffset = 500
    this.backBtnIsShow = this.$route.path !== "/articleListHome" ? true : false
    this.showtime();
    setInterval(this.showtime, 1000);
  },
  beforeUpdate: function () {
    this.backBtnIsShow = this.$route.path !== "/articleListHome" ? true : false
  },
  template: `
  <div id='home' >

      <!-- 一级开始 -->
    <el-container>

      <el-header >
      测试阶段
      </el-header>

      <el-main ref="elMain">
        <div class='el-main-nav'>
          <a href="javascript:;"  @click="handleBack()" v-show="backBtnIsShow">返回</a>
        </div>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>

      <!--左侧-->
      <el-aside id="aside-left" v-if="!backBtnIsShow">
        <article-list></article-list>
      </el-aside>

      <!--右侧-->
      <el-aside class='aside-right' id="aside-maodian" width="auto" v-if="backBtnIsShow" >
        <a href="javascript:;" @click="windowScrollTop()">标 题</a>
        <a href="javascript:;" @click="scrollToView" value="mentality">思 路</a>
        <a href="javascript:;" @click="scrollToView" value="technology">技 术</a>
        <a href="javascript:;" @click="scrollToView" value="code">代 码</a>
        <a href="javascript:;" @click="scrollToView" value="demonstration">演 示</a>
        <a href="javascript:;" @click="scrollToView" value="footer">底 部</a>

      </el-aside>
      <el-aside class="aside-right" id="aside-times" width="auto" v-else>
        <div class="year time">
          <div class="years"><b v-html="date.years">2020</b></div>
          <span>-</span>
          <div class="months"><b v-html="date.months">12</b></div>
          <span>-</span>
          <div class="days"><b v-html="date.days">29</b></div>
        </div>
        <div class="time">
          <div class="hour"><b v-html="date.hour">19</b></div>
          <span>:</span>
          <div class="minute"><b v-html="date.minute">59</b></div>
          <span>:</span>
          <div class="second"><b v-html="date.second">59</b></div>
        </div>
      </el-aside>
    </el-container>
    <!-- 一级结束 -->

    </div>`
}
