const zip = (...arrays) => {
  const minLength = Math.min(...arrays.map(a => a.length));

  return {
    *[Symbol.iterator]() {
      for (let i = 0; i < minLength; i++) {
        yield arrays.map(a => a[i]);
      }
    }
  };
};

console.log(...zip([1, 2, 3, 4], ['a', 'b', 'c']));
console.log(zip([1, 2, 3, 4], ['a', 'b', 'c']));

console.log(...zip([1, 2, 3, 4]));
