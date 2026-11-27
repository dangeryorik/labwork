'use strict';

const max = (matrix) => {
  let result = matrix[0][0];
  for (const row of matrix) {
    for (const item of row) {
      if (item > result) {
        result = item;
      }
    }
  }
  return result;
};

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); 
