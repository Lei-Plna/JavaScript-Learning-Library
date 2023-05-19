/**
 * window.pageXOffset 获取文档/页面水平方向滚动的像素值（X轴滚动距离）
 * window.pageYOffset 获取文档/页面竖直方向滚动的像素值（Y轴滚动距离）
 *  IE9/IE8某些版本无法适配上述两个方法 -> 返回值 undefined
 *  上述两个方法分别是scrollX、scrollY的别名(兼容性大于scroll)
 *  因此scrollX、scrollY并不实用
 * pageOffset能够被赋值（不是只可读属性）但并不能控制滚动条
 */

// function emit() {
//   console.log(window.pageXOffset)
// }

/**
 * document.body -> body元素
 * document.body.scollLeft 读取或设置元素滚动条到元素左边的距离（X轴滚动距离）
 * document.body.scollTop 读取或设置元素的内容垂直滚动的像素值（Y轴滚动距离）
 *  兼容IE9/IE8及以下
 *  在部分浏览器版本中该属性可能无法获取到对应的值 -> 返回值 0
 *  当这种情况发生时，我们可以从document.documentElement(html)元素的scrollLeft、scrollTop属性上获取到对应值
 * document.documentElement.scrollLeft
 * document.documentElement.scrollTop
 *  上述的document.documentElement与document.body可以说是互斥关系，其中一个无法正常使用时另一个便能够正常使用
 */

// function emit() {
//   console.log(document.body.scrollLeft + document.documentElement.scrollLeft);
//   console.log(document.body.scrollTop + document.documentElement.scrollTop);
// }


/**
 * 因此对滚动条距离可以进行一个方法封装
 */

function encapesulate() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  } else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}