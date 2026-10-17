const values = [true, 'hello', 5, 12, -200, false, false, 'word']

const types = {
    number: 0,
    string: 0,
    boolean: 0
};
for (const val of values) {
    const l = typeof val;
    types[l] += 1;
}
console.log('Calculation using ready-made keys:');
console.log(types);

const typess = {};
for (const val of values) {
    
    const l = typeof val;
    
    if (typess[l] === undefined) {
         typess[l] = 0;
    }
    typess[l] += 1;
}
console.log('Calculation using dynamic keys:');
console.log(typess);