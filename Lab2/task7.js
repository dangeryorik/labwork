'use strict'
const jj = () => {
    const obj1 = {
    name: 'Ronaldo' 
    };

    let obj2 = {
        name: 'Messi'
    };
    obj1.name = 'LeBron';
    obj2.name = 'Curry';
    obj2 = {
        name: 'Jordan'
    }
    console.log(obj1);
    console.log(obj2);
}
jj();