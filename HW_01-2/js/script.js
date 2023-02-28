'use strict';

const a = +prompt('Введіть 1-ше число', '52');
console.log(a);
const b = +prompt('Введіть 2-ге число', '4');
console.log(b);

function showSum() {
    alert('Сума чисел буде = ' + (a + b) );
}
showSum();

const c = +prompt('Введіть 1-ше число', '52');
console.log(c);
const d = +prompt('Введіть 2-ге число', '44');
console.log(d);

function showMin() {
    alert('Різниця чисел буде = ' + (c - d) );
}
showMin();

const e = +prompt('Введіть 1-ше число', '5');
console.log(e);
const f = +prompt('Введіть 2-ге число', '4');
console.log(f);

function showMult() {
    alert('Множення чисел буде = ' + (e * f) );
}
showMult();

const g = +prompt('Введіть 1-ше число', '52');
console.log(g);
const h = +prompt('Введіть 2-ге число', '8');
console.log(h);

function showDivi() {
    alert('Ділення чисел буде = ' + (g / h) );
}
showDivi();






