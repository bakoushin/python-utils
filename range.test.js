const assert = require('assert');

const range = require('./range');

describe('range()', () => {
  it('Should return an iterable', () => {
    const testData = range(0, 10);
    assert.ok(testData[Symbol.iterator]);
  });

  it('Should return an array of 10 items', () => {
    assert.deepStrictEqual([...range(0, 10)], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('Should use step parameter', () => {
    assert.deepStrictEqual([...range(0, 10, 2)], [0, 2, 4, 6, 8]);
  });
});
