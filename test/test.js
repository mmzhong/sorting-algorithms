const expect = require('chai').expect;

const { makeRandomArray, isSorted } = require('../src/utils');
const { bubbleSort, bubbleSort1, bubbleSort2 } = require('../src/bubble-sort');
const selectionSort = require('../src/selection-sort');
const { insertionSort, insertionSort1 } = require('../src/insertion-sort');
const mergeSort = require('../src/merge-sort');
const quickSort = require('../src/quick-sort');

let randomArray = [];

describe('Sorting', () => {
  beforeEach(() => {
    randomArray = makeRandomArray();
  });

  describe('Bubble', () => {
    it('基础实现', () => {
      expect(isSorted(bubbleSort(randomArray))).to.be.true;
    });

    it('优化1：提前结束循环', () => {
      expect(isSorted(bubbleSort1(randomArray))).to.be.true;
    });

    it('优化2：双向冒泡', () => {
      expect(isSorted(bubbleSort2(randomArray))).to.be.true;      
    })
  });

  describe('Insertion', () => {
    it('基础实现', () => {
      expect(isSorted(insertionSort(randomArray))).to.be.true;
    });
    it('优化：二分法查找', () => {
      expect(isSorted(insertionSort1(randomArray))).to.be.true;
    });
  });

  describe('Selection', () => {
    it('基础实现', () => {
      expect(isSorted(selectionSort(randomArray))).to.be.true;
    })
  });

  describe('Merge', () => {
    it('基础实现', () => {
      expect(isSorted(mergeSort(randomArray))).to.be.true;
    })
  });

  describe('Quick', () => {
    it('基础实现', () => {
      expect(isSorted(quickSort(randomArray))).to.be.true;
    })
  });
});

