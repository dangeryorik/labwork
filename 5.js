'use strict';

const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
console.log(e); 
