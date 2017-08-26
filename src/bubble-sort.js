const { swap } = require('./utils');

/**
 * 基础实现
 * @param {Array} arr 
 */
function bubbleSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }
  return arr;
}

/**
 * 改进方法1：记住最后一次数值交换的位置
 * @param {Array} arr 
 * 举个栗子：
 * 待排序数组为 [20, 30, 10, 40, 50]，第一次冒泡的循环范围是 0-4，结果为 [20, 10, 30, 40, 50]，数值交换发生在 1 。
 * 此时，可以看到交换位置 1 之后的数值是已排序的，1 之前的才是需要继续排序的。
 */
function bubbleSort1(arr) {
  let i = arr.length - 1;
  while(i > 0) {
    let lastSwap = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        lastSwap = j;
      }
    }
    i = lastSwap;
  }
  return arr;
}

function bubbleSort2(arr) {

  return arr;
}

module.exports = {
  bubbleSort,
  bubbleSort1,
  bubbleSort2,
}