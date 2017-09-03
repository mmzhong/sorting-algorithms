const { swap } = require('./utils');

/**
 * 选择排序
 */
function selectionSort(arr) {
  let length = arr.length, sep = 0, minIndex;
  while(sep < length) {
    minIndex = sep; // 假设开始位置为最小值位置
    for (let j = sep + 1; j < length; j++) { // 找到最小位置
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // 更新最小位置
      }
    }
    swap(sep, minIndex, arr);
    sep++;
  }
  return arr;
}

module.exports = selectionSort;