'use strict';

// #1
    // const numOrStr = prompt('input number or string');
    // console.log(numOrStr)
    // if((numOrStr === null) || ( numOrStr.trim() === '' ) || ( isNaN( +numOrStr ) )) {
    //     console.log('Від вас очікували іншого');
    // } else {
    //     console.log('Ви ввели число!')
    // }


// #2
const numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(numOrStr) {
    case '':
        alert('Від вас очікували іншого!')
        brake;
    case null:
        alert('Від вас очікували іншого!!')
        brake
    case ' ':
        alert('Від вас очікували іншого!!!')
        brake;
    case Namber:
// через суворе порівняння не працює свіч: 
// не можу перевести число з prompt в число,
//  та не можу використати isNaN
        alert('Ви ввели число ' + numOrStr)
        console.log('OK!')
}
