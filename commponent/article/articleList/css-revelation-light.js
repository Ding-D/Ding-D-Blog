let mentality = md.render(``)
let code = md.render('```js' + `
var obj = {};
Object.defineProperty(obj, "name", {
 get: function () {
   return 123;
 },
 set: function (newVal) { },
});
console.log(obj.name); // 123
`+
  '```')
let technology = md.render(`
## HTML5 和 CSS3 新特性

### Css3 新特性

- 颜色：新增 rgba，hsla 模式
- 文字阴影：text - shadow
- 边框：圆角 border - radius ，边框阴影 box - shadow
- 盒子模型：box - sizing
- 背景 background：背景图片尺寸 sizing，背景图片原点 origin，背景图的裁切区域 clip ，以“，”分隔可以设置多背景，用于自适应布局
- 渐变： linear - gradient，radial - gradient
- 过渡：transition，可实现动画
- 自定义动画：animation @keyform
- 唯一引入的伪元素： (:: selection)

vue 组件化？框架化？
webpack 项目打包？ git 版本控制？
jq？
earch？
ajax？
页面响应式数据交互？
nodejs？nodejs 后端写接口？
## HTML5 和 CSS3 新特性

### Css3 新特性

  - 颜色：新增 rgba，hsla 模式
    - 文字阴影：text - shadow
      - 边框：圆角 border - radius ，边框阴影 box - shadow
        - 盒子模型：box - sizing
          - 背景 background：背景图片尺寸 sizing，背景图片原点 origin，背景图的裁切区域 clip ，以“，”分隔可以设置多背景，用于自适应布局
            - 渐变： linear - gradient，radial - gradient
              - 过渡：transition，可实现动画
                - 自定义动画：animation @keyform
- 唯一引入的伪元素： (:: selection)

vue 组件化？框架化？
webpack 项目打包？ git 版本控制？
jq？
earch？
ajax？
页面响应式数据交互？
nodejs？nodejs 后端写接口？
## HTML5 和 CSS3 新特性

### Css3 新特性

  - 颜色：新增 rgba，hsla 模式
    - 文字阴影：text - shadow
      - 边框：圆角 border - radius ，边框阴影 box - shadow
        - 盒子模型：box - sizing
          - 背景 background：背景图片尺寸 sizing，背景图片原点 origin，背景图的裁切区域 clip ，以“，”分隔可以设置多背景，用于自适应布局
            - 渐变： linear - gradient，radial - gradient
              - 过渡：transition，可实现动画
                - 自定义动画：animation @keyform
- 唯一引入的伪元素： (:: selection)

vue 组件化？框架化？
webpack 项目打包？ git 版本控制？
jq？
earch？
ajax？
页面响应式数据交互？
nodejs？nodejs 后端写接口？
## HTML5 和 CSS3 新特性

### Css3 新特性

  - 颜色：新增 rgba，hsla 模式
    - 文字阴影：text - shadow
      - 边框：圆角 border - radius ，边框阴影 box - shadow
        - 盒子模型：box - sizing
          - 背景 background：背景图片尺寸 sizing，背景图片原点 origin，背景图的裁切区域 clip ，以“，”分隔可以设置多背景，用于自适应布局
            - 渐变： linear - gradient，radial - gradient
              - 过渡：transition，可实现动画
                - 自定义动画：animation @keyform
- 唯一引入的伪元素： (:: selection)

vue 组件化？框架化？
webpack 项目打包？ git 版本控制？
jq？
earch？
ajax？
页面响应式数据交互？
nodejs？nodejs 后端写接口？
## HTML5 和 CSS3 新特性

### Css3 新特性

  - 颜色：新增 rgba，hsla 模式
    - 文字阴影：text - shadow
      - 边框：圆角 border - radius ，边框阴影 box - shadow
        - 盒子模型：box - sizing
          - 背景 background：背景图片尺寸 sizing，背景图片原点 origin，背景图的裁切区域 clip ，以“，”分隔可以设置多背景，用于自适应布局
            - 渐变： linear - gradient，radial - gradient
              - 过渡：transition，可实现动画
                - 自定义动画：animation @keyform
- 唯一引入的伪元素： (:: selection)


vue 组件化？框架化？
webpack 项目打包？ git 版本控制？
jq？
earch？
ajax？
页面响应式数据交互？
nodejs？nodejs 后端写接口？

### React 全家桶

- react（整体架构） +  redux || mobx（状态管理） +  react-router（路由） +  axios（ajax 请求） +  antd || react-material || antd-model(UI 框架库)

## v-model 是什么？怎么使用？vue 中标签怎么绑定事件？

- v-model 可以实现数据双向绑定，是一个 vue 指令（指令包含 v-bind,v-for,v-show,v-on,v-if）。具体使用在 Vue 的 model 层的 data 属性上。

## v-model 的实现原理？

- Vue 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defindProperty()来劫持呵呵属性的 stter，getter，在数据变动是发布消息给订阅者，出发相应的监听回调。
- 自我理解：当修改对象属性值时，触发 set，获取更改后的值。当调用对象属性名时，触发 get，该属性名的属性值为 get 的返回值，例如：
`+
  '```js' + `
 var obj = {};
Object.defineProperty(obj, "name", {
  get: function () {
    return 123;
  },
  set: function (newVal) { },
});
console.log(obj.name); // 123
`+
  '```');
console.log(technology);

const cssRevelationLight = {
  data() {
    return {
      title: '纯CSS制作聚光灯效果',
      mentality: mentality,
      technology: technology,
      code: code,
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
          <span class='tooltip'>思路<span v-show="mentality===''">暂无</span></span>
          <div v-html="mentality"></div>
        </div>
        <div class="technology" id="technology" >
          <span class='tooltip'>技术点<span v-show="technology===''">暂无</span></span>
          <div v-html="technology"></div>
        </div>
        <div class="code" id="code" >
          <span class='tooltip'>代码<span v-show="code===''">暂无</span></span>
          <div v-html="code"></div>
        </div>
      </div>
      <!-- 尾部区域 -->
      <footer class="footer" id="footer">版权信息</footer>
  </div>`
}
