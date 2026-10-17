'use strict'
const database = [
    { name: 'LeBron', phone:  '+38023232323' },
    { name: 'Curry', phone:  '+38030303030' },
    { name: 'Durant', phone: '+38077777777' },
    { name: 'Harden', phone:    '+38013131313' },
    { name: 'Irving', phone:   '+38011111111' }
]

const findPhoneByName = (name) => {
    for (let i = 0; i < database.length; i++) {
        if (database[i].name === name) {
            return database[i].phone;
        }
    } 
    return 'Not found';
}

console.log(findPhoneByName('Irving'));