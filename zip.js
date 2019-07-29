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

module.exports = zip;
