'use strict';

// #1
// const x = 10, y = 7;
// (x > y) ? alert('x більше ніж y') : alert('x не більше ніж y');


// #2

// const num = +prompt('Введіть число', '5');
// if ((num % 2) === 0) {
//         alert(num + ' число парне');
//     } else {
//         alert(num + ' число не парне');
//     }


// #3

// const num = prompt('Введіть ціле число', '899764');

// if (+num > 0) {
//     alert('Число має ' + num.length + ' знаків' + ', та являється додатнім');
// } else if (+num < 0) {
//         alert('Число має ' + (num.length - 1) + ' знаків' + ', та являється від"ємний');
        
//     } else {
//     alert('Число має один занк та являється нулем');
// }

// #4

const firsrN = prompt('Ввеліть перше число');
const secondN = prompt('Ввеліть друге число');
const thirdN = prompt('Ввеліть третє число');

if ((firsrN === null) || (secondN === null) || (thirdN === null)) {
    alert('Числа введені невірно');
    }
    else if ((firsrN > secondN) && (firsrN > thirdN)) {
        alert('Перше число найбільше: ' + firsrN);
    } else if ((secondN > firsrN) && (secondN > thirdN)) {
        alert('Друге число найбільше: ' + secondN);
    } else if ((thirdN > firsrN) && (thirdN > secondN)) {
        alert('Третє число найбільше: ' + thirdN);
    } else {
    alert('Ви ввели однакові числа');
}




// #5

// const a = +prompt('Введіть довжину першої сторони трикутника', '10');
// const b = +prompt('Введіть довжину другої сторони трикутника', '12');
// const c = +prompt('Введіть довжину третьої сторони трикутника', '4');

// if ((a && b && c) !== 0) {
//     if ((a + b > c) && (a + c > b) && (b + c > a)) {
//     alert('Такий трикутний може існувати. Його сторони: ' + a + 'см, ' + b + 'см, та ' + c + 'см');
//         } else {
//     alert('Такий трикутний не може існувати.')
//         } 
// } else {
//     alert('Ви ввели невірне занчення сторони(ін) трикутника.')
// } 