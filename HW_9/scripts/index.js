'use strict';

// #1
// const firstN = +prompt('Введіть число', 7);
// const secondN = +prompt('Введіть друге число', 7);
// function foo(firstN, secondN) {
//     return firstN === secondN;
// }
// console.log(foo(firstN, secondN));

// #2
// const firstN = +prompt('Введіть число', 7);
// const secondN = +prompt('Введіть друге число', 1);

// function foo(firstN, secondN) {
//     return (firstN + secondN) > 10;
// }
// console.log(foo(firstN, secondN));

// #3
const num = +prompt('Введіть будь яке число', -7);
function foo(num) {
    return num < 0;
}
console.log(foo(num));