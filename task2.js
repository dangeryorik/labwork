const inc = (obj) => {
  obj.n++;
};

const obj = { n: 5 };
inc(obj);
console.dir(obj); // { n: 6 }