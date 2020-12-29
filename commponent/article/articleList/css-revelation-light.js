// 思路内容
let mentality = md.render(`
利用伪元素以及clip-path：ellipse绘制的圆形，和动画效果制作
`)

// 技术点内容
let technology = md.render(`
## 原理
- 1.根据伪元素定位，将两个文本内容重合，一个纯色，一个有颜色
- 2.使用 clip-path 做圆形遮罩 
- 3.使用Css的Animation让他们动起来即可
### 伪元素
- 使用两个容器放置两个文本也是可以的，这里使用伪元素是为了更方便！
### Clip-path 遮罩 
- clip-path 做圆形遮罩可以指定位置，用css控制起来更为轻松。
### Animation Css动画
- 利用@keyframes 在不同时间段改变 clip-path 的位置
`)
console.log(technology);

// 代码内容
let code = md.render('```html' + `
<style>
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    color: #333;
  }
  
  .before::after {
    content: attr(data-spotlight);
    color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-clip-path: ellipse(80px 80px at 0% 50%);
    clip-path: ellipse(80px 80px at 0% 50%);
    animation: spotlight 5s infinite;
    background-image: url(https://images.unsplash.com/photo-1607670055468-72fb742482e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80);
    background-position: center center;
    background-size: 150%;
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  @keyframes spotlight {
    0% {
      -webkit-clip-path: ellipse(80px 80px at 0% 50%);
      clip-path: ellipse(80px 80px at 0% 50%);
    }

    50% {
      -webkit-clip-path: ellipse(80px 80px at 1000% 50%);
      clip-path: ellipse(80px 80px at 100% 50%);
    }

    100% {
      -webkit-clip-path: ellipse(80px 80px at 0% 50%);
      clip-path: ellipse(80px 80px at 0% 50%);
    }
  }
</style>

<body>
  <h1 class="before" data-spotlight="CodingStartUp">CodingStartUp</h1>
</body>

<script>
  无js代码
</script>
`+
  '```')

let demonstration = `
<h1 class="before" data-spotlight="CodingStartUp">CodingStartUp</h1>
`
const cssRevelationLight = {
  data() {
    return {
      title: '纯CSS制作聚光灯效果',
      mentality: mentality,
      technology: technology,
      code: code,
      demonstration: demonstration,
      maodian: {
        mentalityY: null,
        technologyY: null,
        codeY: null,
      }
    }
  },
  methods: {

  },
  beforeMount: function () {
  },
  mounted: function () {

  },
  beforeUpdate: function () {

  },
  updated: function () {

  },
  template: `
    <div id='css-revelation-light' class='el-main-body' >
      <!--头部区域 -->
      <header class="header" id="header">
        <h1>{{ title }}</h1><br>
      </header>
      <!-- 中间主体区域 -->
      <div class="main">
        <div class="mentality" id="mentality" re>
          <span class='tooltip'>思路<span v-if="mentality===''">暂无</span></span>
          <div v-html="mentality"></div>
        </div>
        <div class="technology" id="technology" >
          <span class='tooltip'>技术点<span v-if="technology===''">暂无</span></span>
          <div v-html="technology"></div>
        </div>
        <div class="code" id="code" >
          <span class='tooltip'>代码<span v-if="code===''">暂无</span></span>
          <div v-html="code"></div>
        </div>
        <div class="demonstration" id="demonstration" >
          <span class='tooltip'><span v-if="demonstration===''">暂无</span>演示</span>
          <div v-html="demonstration"></div>
        </div>
      </div>
      <!-- 尾部区域 -->
      <footer class="footer" id="footer">版权信息</footer>
  </div>`
}
