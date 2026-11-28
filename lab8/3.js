'use strict';


const checkType = (value, type) => typeof value === type.name.toLowerCase();

const contract = (fn, ...types) => {
  const argTypes = types.slice(0, -1);
  const resultType = types[types.length - 1];

  return (...args) => {
    for (let i = 0; i < argTypes.length; i++) {
      if (!checkType(args[i], argTypes[i])) {
        throw new TypeError(`Аргумент ${i + 1} має бути типу ${argTypes[i].name}`);
      }
    }
    const result = fn(...args);
    if (!checkType(result, resultType)) {
      throw new TypeError(`Результат має бути типу ${resultType.name}`);
    }
    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); 


try {
  addNumbers(2, 'три');
} catch (e) {
  console.log('Помилка:', e.message);
}
