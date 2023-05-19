/**
 * 可视区域尺寸的获取
 * 1. window.innerWidth
 * 2. window.innerHeight
 *  innerXXX属性返回的是窗口的内部宽度（包括滚动条）
 */
document.writeln(`网页内部宽度为: ${window.innerWidth}<br/>`);
document.writeln(`网页内部高度为: ${window.innerHeight}<br/>`);

/**
 * IE8/IE9以下无法直接使用window.innerWidth、window.innerHeight获取可视区域尺寸
 * 此时与滚动条滚动距离获取类似，我们将从body、html元素上获取页面的宽度、高度
 *  此时将出现一个渲染概念（标准模式、怪异模式）
 *  我们可以通过document.compatMode来获取到当前的渲染模式
 *    1. backCompat:怪异模式
 *    2. CSS1Compat:标准模式或准标准模式（如今的模式已经标准化，准标准模式失去意义）
 * 在怪异模式下
 */

// function getClientSizeBetweenCompat(){
//   if (document.compatMode === 'backCompat') {

//   }
// }
document.writeln(
  `${
    document.compatMode === "CSS1Compat" ? "标准模式" : "怪异模式"
  }下通过body获取的可视窗口宽度为: ${document.body.clientWidth}<br/>`
);
document.writeln(
  `${
    document.compatMode === "CSS1Compat" ? "标准模式" : "怪异模式"
  }下通过body获取的可视窗口高度为: ${document.body.clientHeight}<br/>`
);

document.writeln(
  `${
    document.compatMode === "CSS1Compat" ? "标准模式" : "怪异模式"
  }下通过documentElement获取的可视窗口宽度为: ${
    document.documentElement.clientWidth
  }<br/>`
);
document.writeln(
  `${
    document.compatMode === "CSS1Compat" ? "标准模式" : "怪异模式"
  }下通过documentElement获取的可视窗口高度为: ${
    document.documentElement.clientHeight
  }<br/>`
);
