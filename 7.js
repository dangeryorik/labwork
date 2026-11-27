'use strict';

const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const person = persons[name];
    result[name] = person.died - person.born;
  }
  return result;
};

const persons = {
  None: { born: 1870, died: 1924 },
  Name: { born: 1893, died: 1976 },
  Someone: { born: 1869, died: 1948 },
  Body: { born: 1901, died: 1989 },
};

console.log(ages(persons));

