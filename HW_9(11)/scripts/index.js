'use strict';

// 1.
// const a = +prompt('Введіть число', '0');
// (a === 0) ? alert('Вірно') : alert('Невірно');

// 2.
// const a = +prompt('Введіть число', '1');
// (a > 0) ? alert('Вірно') : alert('Невірно');

// 3. 
// const a = +prompt('Введіть число', '-1');
// (a < 0) ? alert('Вірно') : alert('Невірно');

// 4.
// const a = +prompt('Введіть число', '2');
// (a >= 0) ? alert('Вірно') : alert('Невірно');

// 5.
// const a = +prompt('Введіть число', '0');
// (a <= 0) ? alert('Вірно') : alert('Невірно');

// 6.
// const a = +prompt('Введіть число', '2');
// (a !== 0) ? alert('Вірно') : alert('Невірно');

// 7.
// const a = prompt('Введіть "test"', 'test');
// (a === 'test') ? alert('Вірно') : alert('Невірно');

// 8.
// const a = prompt('Введіть число', '1');
// (a === '1') ? alert('Вірно') : alert('Невірно');

// 9.
// const a = +prompt('Введіть число', '2');
// ((a > 0) && (a < 5)) ? alert('Вірно') : alert('Невірно');


// 10.
// const a = +prompt('Введіть число', '2');
// ((a === 0) || (a === 2)) ? alert(a + 7) : alert(a / 10);


// 11.
// const a = +prompt('Введіть число a');
// const b = +prompt('Введіть число b');
// ((a <= 1) && (b >= 3)) ? alert(a + b) : alert(a - b);


// 12.
// const a = +prompt('Введіть число a');
// const b = +prompt('Введіть число b');
// (((a > 2) && (a < 11)) || ((b >= 6) && (b < 14))) ? alert('Вірно') : alert('Невірно');

// 13.
const num = prompt('Введіть чиcла з 1 по 4', '3');
let result = null;

switch(num) {
    case '1':
        result = 'зима';
        alert(result);
        break;
    case '2':
        result = 'весна';
        alert(result);
        break; 
    case '3':
        result = 'літо';
        alert(result);
        break;           
    case '4':
        result = 'осінь';
        alert(result);
        break;
}
