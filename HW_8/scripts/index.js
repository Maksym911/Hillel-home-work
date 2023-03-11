'use strict';

let num = 1;
num += ((++num) + 10);
num -= ((num *= 2) - 12);
num *= ((num /= 1) + 6);

console.log(num);
