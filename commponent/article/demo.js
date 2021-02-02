
// const articleName  = {
//   data() {
//     // 思路内容
//     let mentality = md.render(`
// `)

//     // 技术点内容
//     let technology = md.render(`

// `)
//     console.log(technology);

//     // 代码内容
//     let code = md.render('```html' + `

// `+
//       '```')

//     // 演示内容
//     let demonstration = `
// `

//     // 版权信息
//     let footer = ``

//     return {
//       title: '',
//       mentality: mentality,
//       technology: technology,
//       code: code,
//       demonstration: demonstration,
//       footer: footer,
//       maodian: {
//         mentalityY: null,
//         technologyY: null,
//         codeY: null,
//       }
//     }
//   },
//   methods: {

//   },
//   // 元素dom创建完成
//   mounted: function () {
//     hub.$on('scrollToView', val => {
//       var ele = document.getElementById(`${val}`)
//       var top = ele.offsetTop + ele.offsetParent.offsetTop
//       window.scrollTo({
//         top: top - 60,
//         behavior: "smooth"
//       })
//     })
//   },
//   beforeUpdate: function () {

//   },
//   updated: function () {

//   },
//   template: `
//     <div id='css-revelation-light' class='el-main-body' >
//       <!--头部区域 -->
//       <header class="header" id="header">
//         <h1>{{ title }}</h1><br>
//       </header>
//       <!-- 中间主体区域 -->
//       <div class="main">
//         <div class="mentality" id="mentality" ref="mentality">
//           <span class='tooltip'>思路<span v-if="mentality===''">暂无</span></span>
//           <div v-html="mentality"></div>
//         </div>
//         <div class="technology" id="technology" ref="technology">
//           <span class='tooltip'>技术点<span v-if="technology===''">暂无</span></span>
//           <div v-html="technology"></div>
//         </div>
//         <div class="code" id="code" ref="code">
//           <span class='tooltip'>代码<span v-if="code===''">暂无</span></span>
//           <div v-html="code"></div>
//         </div>
//         <div class="demonstration" id="demonstration" ref="demonstration">
//           <span class='tooltip'><span v-if="demonstration===''">暂无</span>演示</span>
//           <div v-html="demonstration"></div>
//         </div>
//       </div>
//       <!-- 尾部区域 -->
//       <footer class="footer" id="footer">
//       版权信息
//         <p v-html="footer"></p>
//       </footer>
//   </div>`
// }