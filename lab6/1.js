'use strict';



const pipe = (...fns) => {

  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('Аргумент pipe має бути функцією');
    }
  }
  return (x) => {
    let result = x;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5)); // 1728

const f2 = pipe(inc, inc);
console.log(f2(7)); // 9

try {
  const f3 = pipe(inc, 7, cube);
  console.log(f3);
} catch (e) {
  console.log('Помилка:', e.message);
}
