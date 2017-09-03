/**
 * 插入排序
 */
function insertionSort(arr) {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let j = i - 1; // 往回查找的开始位置
    let tmp = arr[i];
    while(j >= 0 && arr[j] > tmp) { // 找到插入位置
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = tmp; // 插入
  }
  return arr;
}

/**
 * 改进方法1：使用二分法搜索插入位置
 */
function insertionSort1(arr) {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let tmp = arr[i];
    // 二分法找到插入位置
    let left = 0, right = i - 1;
    while(left <= right) {
      let middle = Math.floor((left + right)/2);
      if (arr[middle] > tmp) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    // left 右边全部右移一位 
    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j];
    }
    arr[left] = tmp; // 插入
  }
  return arr;
}

module.exports = {
  insertionSort,
  insertionSort1
};