
const cssFaultTypeBtn = {
  data () {
    // 思路内容
    let mentality = md.render(`
    emmmmm有点懒得写，哈哈哈哈哈！！！
    `)

    // 技术点内容
    let technology = md.render(`
- 偏移
- 伪元素 
- clip-path 遮罩
- 动画
`)

    // 代码内容
    let code = md.render('```html' + `
<link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #F8F005;
    }
    
    button, button::after {
      width: 380px;
      height: 86px;
      font-size: 36px;
      font-family: 'Bebas Neue', cursive;
      background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
      border: 0;
      color: #fff;
      letter-spacing: 3px;
      line-height: 88px;
      box-shadow: 6px 0px 0px #00E6F6;
      outline: transparent;
      position: relative;
    }
    
    button::after {
      --slice-0: inset(50% 50% 50% 50%);
      --slice-1: inset(80% -6px 0 0);
      --slice-2: inset(50% -6px 30% 0);
      --slice-3: inset(10% -6px 85% 0);
      --slice-4: inset(40% -6px 43% 0);
      --slice-5: inset(80% -6px 5% 0);
      
      content: 'AVAILABLE NOW';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
      text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
      clip-path: var(--slice-0);
    }
    
    button:hover::after {
      animation: 1s glitch;
      animation-timing-function: steps(2, end);
    }
    
    @keyframes glitch {
      0% {
        clip-path: var(--slice-1);
        transform: translate(-20px, -10px);
      }
      10% {
        clip-path: var(--slice-3);
        transform: translate(10px, 10px);
      }
      20% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 10px);
      }
      30% {
        clip-path: var(--slice-3);
        transform: translate(0px, 5px);
      }
      40% {
        clip-path: var(--slice-2);
        transform: translate(-5px, 0px);
      }
      50% {
        clip-path: var(--slice-3);
        transform: translate(5px, 0px);
      }
      60% {
        clip-path: var(--slice-4);
        transform: translate(5px, 10px);
      }
      70% {
        clip-path: var(--slice-2);
        transform: translate(-10px, 10px);
      }
      80% {
        clip-path: var(--slice-5);
        transform: translate(20px, -10px);
      }
      90% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 0px);
      }
      100% {
        clip-path: var(--slice-1);
        transform: translate(0);
      }
    }
    </style>
    <html>
      <button>AVAILABLE NOW</button>
    </html>
    <script>
      无
    </script>
`+
      '```')

    // 演示内容
    let demonstration = `
    <div id="css-2077">
    <button >AVAILABLE NOW</button>
    </div>
    `

    // 版权信息
    let footer = `
    来自哔哩哔哩up主：CodingStartUp-Steven
    `
    return {
      title: '',
      mentality: mentality,
      technology: technology,
      code: code,
      demonstration: demonstration,
      footer: footer,
      maodian: {
        mentalityY: null,
        technologyY: null,
        codeY: null,
      }
    }
  },
  methods: {

  },
  // 元素dom创建完成
  mounted: function () {
    hub.$on('scrollToView', val => {
      var ele = document.getElementById(`${val}`)
      var top = ele.offsetTop + ele.offsetParent.offsetTop
      window.scrollTo({
        top: top - 60,
        behavior: "smooth"
      })
    })
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
        <div class="mentality" id="mentality" ref="mentality">
          <span class='tooltip'>思路<span v-if="mentality===''">暂无</span></span>
          <div v-html="mentality"></div>
        </div>
        <div class="technology" id="technology" ref="technology">
          <span class='tooltip'>技术点<span v-if="technology===''">暂无</span></span>
          <div v-html="technology"></div>
        </div>
        <div class="code" id="code" ref="code">
          <span class='tooltip'>代码<span v-if="code.length===47">暂无</span></span>
          <div v-html="code"></div>
        </div>
        <div class="demonstration" id="demonstration" ref="demonstration">
          <span class='tooltip'><span v-if="demonstration===''">暂无</span>演示</span>
          <div v-html="demonstration"></div>
        </div>
      </div>
      <!-- 尾部区域 -->
      <footer class="footer" id="footer">
      版权信息
        <p v-html="footer"></p>
      </footer>
  </div>`
}
