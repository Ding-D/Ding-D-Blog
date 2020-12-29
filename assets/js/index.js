// var normalWidth = window.innerWidth;
// var normalHeight = window.innerHeight;

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

window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop >= 100) {
    if (document.getElementById('aside-maodian')) document.getElementById('aside-maodian').style = "position:fixed;top:100px;width:100px"
    if (document.getElementById('aside-times')) document.getElementById('aside-times').style = "position:fixed;top:100px;width:auto"

  } else {
    if (document.getElementById('aside-maodian')) document.getElementById('aside-maodian').style = "width:100px"

    if (document.getElementById('aside-times')) document.getElementById('aside-times').style = "width:auto"

  }
})