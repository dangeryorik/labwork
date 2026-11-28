'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array); 

const cities = ['Kiev', 'Zhytomyr', 'Lviv', 'Ternopil'];
removeElement(cities, 'Lviv');
removeElement(cities, 'Ternopil');
console.log(cities); 
