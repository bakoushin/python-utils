const assert = require('assert');

const zip = require('./zip');

describe('zip()', () => {
  it('Should return an iterable', () => {
    const testData = zip([1, 2, 3], ['a', 'b', 'c']);
    assert.ok(testData[Symbol.iterator]);
  });

  it('Should zip two arrays of equal length', () => {
    assert.deepStrictEqual(
      [...zip([1, 2, 3], ['a', 'b', 'c'])],
      [[1, 'a'], [2, 'b'], [3, 'c']]
    );
  });

  it('Should zip three arrays of equal length', () => {
    const set = new Set();
    const map = new Map();
    const weakMap = new WeakMap();
    assert.deepStrictEqual(
      [...zip([1, 2, 3], ['a', 'b', 'c'], [set, map, weakMap])],
      [[1, 'a', set], [2, 'b', map], [3, 'c', weakMap]]
    );
  });

  it('Should zip two arrays of unequal length', () => {
    assert.deepStrictEqual(
      [...zip([1, 2], ['a', 'b', 'c'])],
      [[1, 'a'], [2, 'b']]
    );
  });
});
