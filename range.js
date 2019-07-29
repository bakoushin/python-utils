function range(from, to, step = 1) {
  return {
    *[Symbol.iterator]() {
      for (let i = from; i < to; i += step) {
        yield i;
      }
    }
  };
}

module.exports = range;
