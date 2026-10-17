function num(n) {
    return n+1;
}
const a = 5;
const b = num(a);
console.log('number:');
console.log('a =', a);
console.log('b =', b);


function summ (ch) {
    ch.n +=1;
}
const obj = { n: 5 };
summ(obj);
console.log('Object:');
console.log(obj);