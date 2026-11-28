'use strict';

const removeElements = (array, ...items) => {
  items.forEach((item) => {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  });
};

const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array); 

const cities = ['Kiev', 'Zhytomyr', 'Lviv', 'Ternopil'];
removeElements(cities, 'Zhytomyr', 'Lviv', 'Kiev');
console.log(cities); 
