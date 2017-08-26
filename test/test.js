const expect = require('chai').expect;

const { makeRandomArray, isSorted } = require('../src/utils');
const { bubbleSort, bubbleSort1, bubbleSort2 } = require('../src/bubble-sort');

let randomArray = [];

describe('Sorting', () => {
  beforeEach(() => {
    randomArray = makeRandomArray();
  });

  describe('Bubble', () => {
    it('基础实现', () => {
      expect(isSorted(bubbleSort(randomArray))).to.be.true;
    });

    it('优化1', () => {
      expect(isSorted(bubbleSort1(randomArray))).to.be.true;
    });

  });
});

