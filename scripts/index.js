'use strict';

const number = prompt('Введіть число', '10');
const power = prompt('Вкажіть степінь', '2');
function funcName(number, degree = 1) {
    if (isNaN(number) || isNaN(degree)) return 'some error';
    if (number === null || degree === null) return 'some error';
    return Math.pow(number, degree);
}

const result = funcName(number, power);
alert(result);