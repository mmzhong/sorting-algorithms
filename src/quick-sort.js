/**
 * 快速排序
 */
function quickSort(arr) {
  let length = arr.length;
  if (length < 2) {
    return arr;
  }

  // 选择比较基准
  let pivot = arr[0];

  // 分类
  let left = [], right = [];
  for (let i = 1; i < length; i++) {
    let v = arr[i];
    if (v <= pivot) {
      left.push(v);
    } else {
      right.push(v);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

module.exports = quickSort;