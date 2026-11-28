'use strict';

const seq = (f) => {
  const fns = [f];
  const next = (arg) => {
    if (typeof arg === 'function') {
      fns.push(arg);
      return next;
    }
    let result = arg;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
  return next;
};

console.log(seq((x) => x + 7)((x) => x * 2)(5)); // 17
console.log(seq((x) => x * 2)((x) => x + 7)(5)); // 24
console.log(
  seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7)
); // 3
