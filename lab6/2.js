'use strict';

const compose = (...fns) => {
  const errorHandlers = [];

  const composed = (x) => {
    try {
      let result = x;
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (e) {
      for (const handler of errorHandlers) {
        handler(e);
      }
      return undefined;
    }
  };

  composed.on = (eventName, handler) => {
    if (eventName === 'error') {
      errorHandlers.push(handler);
    }
  };

  return composed;
};

const inc = (x) => ++x;
const twice = (x) => x * 2;

const f1 = compose(twice, inc);
console.log(f1(5)); 

const bad = () => {
  throw new Error('Щось пішло не так');
};

const f2 = compose(twice, bad, inc);
f2.on('error', (e) => {
  console.log('Спіймали помилку:', e.message);
});
console.log(f2(5)); 
