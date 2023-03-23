'use strict';

const str = 'charisma';
const num = 9;
const simb = '*';
const boo = false;

function padString (str, num, simb, boo = true) {
    if (typeof str !== 'string') throw new Error ('some error in str');
    if (typeof num !== 'number' || Number.isNaN(num) || !isFinite(num)) {
    throw new Error ('some error in num');
}

if (str.length === num) return str;
if (str.length > num) return str.substring(0, length);

    if (typeof simb !== 'string' || simb.length !== 1) return 'some error in simb';
    if (typeof boo !== 'boolean') throw new Error ('some error in boo');

    const symbols = simb.repeat(num - str.length);
    return !right ? symbols + str : str + symbols



}

console.log(padString(str, num, simb, boo));


