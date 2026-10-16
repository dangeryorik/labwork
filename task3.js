const data = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, 3.14, {}, 'abc'];

const counts = { number: 0, string: 0, boolean: 0, object: 0, undefined: 0 };

for (const item of data) {
  counts[typeof item]++;
}

console.dir(counts);