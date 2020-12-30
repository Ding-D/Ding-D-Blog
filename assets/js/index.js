// var normalWidth = window.innerWidth;
// var normalHeight = window.innerHeight;
// var scroll100 = true; // 控制header栏隐藏显示
// window.onload = function () {
//   resizeFontSize()
// }
// // 监听浏览器缩放
// window.onresize = function () {
//   // 缩放时浏览器宽高变化，与初始宽高对比（固定值），只要宽高不相等就刷新页面/或者更新html的字体大小
//   if (normalWidth !== window.innerWidth || normalHeight !== window.innerHeight) {
//     // location.reload();
//     resizeFontSize()
//   }
// }

// // 将html的font-size设置为屏幕宽度的10分之一
// function resizeFontSize() {
//   // 计算屏幕宽度
//   var screen = document.documentElement.clientWidth;
//   // 计算字体大小，取屏幕宽度的10分之一
//   var size = screen / 10;
//   // 设置根元素字体大小
//   document.documentElement.style.fontSize = size + 'px';
//   console.log(document.documentElement.style.fontSize)
// }

window.addEventListener('scroll', asideScroll)
// window.addEventListener('resize', windowRise)
// window.addEventListener('load', windowRise)


function windowRise() {
  // if (window.innerWidth < 1010) {
  //   console.log(window.innerWidth);
  //   document.getElementsByClassName('.el-contaioner').style = `width:${window.innerWidth}px;padding:0;`
  //   document.getElementById('root').style = `width:${window.innerWidth}px;`
  //   if (document.getElementById('aside-maodian')) document.getElementById('aside-maodian').style = "display:none;"

  // } else if (window.innerWidth >= 1010 && window.innerWidth < 1920) {
  //   document.getElementsByClassName('.el-contaioner').style = `width:1010px;`
  //   document.getElementById('root').style = `width:${window.innerWidth}px;`
  //   if (document.getElementById('aside-maodian')) document.getElementById('aside-maodian').style = "display:none;"
  // } else {
  //   document.getElementsByClassName('.el-contaioner').style = `width:1010px;`
  //   document.getElementById('root').style = `width:1920px;`
  // }
}
function asideScroll() {
  if (document.documentElement.scrollTop >= 70 && window.innerWidth === 1920 && (window.innerWidth >= 1010 && window.innerWidth < 1920)) {
    if (document.getElementById('aside-maodian')) document.getElementById('aside-maodian').style = "position:fixed;width:auto;"
    if (document.getElementById('aside-times')) document.getElementById('aside-times').style = "position:fixed;width:auto"
  } else {
    if (document.getElementById('aside-maodian')) document.getElementById('aside-maodian').style = "width:auto;"
    if (document.getElementById('aside-times')) document.getElementById('aside-times').style = "width:auto"
  }
}
