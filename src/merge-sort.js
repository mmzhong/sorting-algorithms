/**
 * 归并排序
 */
function mergeSort(arr) {
  let length = arr.length;

  if (length < 2) { // 递归终止条件
    return arr;
  }

  let middle = Math.floor(length / 2);
  let left = arr.slice(0, middle), right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = rightIndex = 0;
  let leftLength = left.length, rightLength = right.length;
  while(leftIndex < leftLength && rightIndex < rightLength) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  while(leftIndex < leftLength) {
    result.push(left[leftIndex++]);
  }

  while(rightIndex < rightLength) {
    result.push(right[rightIndex++]);
  }
  return result;
}

module.exports = mergeSort;