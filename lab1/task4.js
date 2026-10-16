const data = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, 3.14, {}, 'abc'];

const counts = {};

for (const item of data) {
  const type = typeof item;
  if (!counts[type]) counts[type] = 0;
  counts[type]++;
}

console.dir(counts);