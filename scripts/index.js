'use strict';

const word = 'charisma'
const num = 11
const symb = '*'
const bool = false

function padString (str, num, symb, right = true) {
    if(typeof str !== 'string') throw new Error('some error in str');
    if(typeof num !== 'number' || Number.isNaN(num) || !isFinite(num) ) {
        throw new Error('some error in num');
    }

    if(str.length === num) return str;
    if(str.length > num) return str.substring(0, num);


    if(typeof symb !== 'string' || symb.length !== 1) throw new Error('some error in symb');
    if(typeof right !== 'boolean')  throw new Error('some error in right');

    const symbols = symb.repeat(num - str.length);
    return right ? str + symbols : symbols + str
}

console.log(padString('hello', 8, '*', true));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));
