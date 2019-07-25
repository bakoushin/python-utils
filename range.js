function range(from, to, step = 1) {
  return {
    *[Symbol.iterator]() {
      for (let i = from; i < to; i += step) {
        yield i;
      }
    }
  };
}

for (const i of range(0, 10, 2)) console.log(i);

console.log([...range(1, 10)]);
console.log(range(1, 10));
