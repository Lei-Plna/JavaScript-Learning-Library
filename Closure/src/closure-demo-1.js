// 实用闭包之闭包函数返回函数Demo
function closureNestedFunction() {
  let count = 0;
  return function () {
    count++;
    return count;
  }
}

// 返沪的countHandler函数与闭包函数的count变量形成了闭包
const countHandler = closureNestedFunction();
console.log(countHandler()); // 1
console.log(countHandler()); // 2
console.log(countHandler()); // 3

// 实用闭包之闭包函数返回对象Demo
function closureNestedObject() {
  let count = 0;
  const increment = () => {
    count++;
  }
  const getCount = () => {
    return count;
  }
  return {
    getCount,
    increment
  }
}

// 返沪的countObject对象与闭包函数的count变量形成了闭包
const countObject = closureNestedObject();
console.log(countObject.getCount()); // 0
countObject.increment();
console.log(countObject.getCount()); // 1
countObject.increment();
console.log(countObject.getCount()); // 2