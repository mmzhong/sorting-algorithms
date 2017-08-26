function swap(i, j, arr) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function makeRandomArray(length = 10, min = 0, max = 100) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arr;
}

module.exports = {
  swap,
  isSorted,
  makeRandomArray
}


