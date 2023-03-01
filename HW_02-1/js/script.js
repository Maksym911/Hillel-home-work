'use strict';

// const mathOperation = prompt('What action do you want to perform? (add, sub, mult, div)', 'mult');
// console.log(mathOperation);
// const numberFirst = +prompt('Enter the first number', '9');
// console.log(numberFirst);
// const numberSecond = +prompt('Enter the second number', '12');
// console.log(numberSecond);

// const multi = numberFirst * numberSecond;
// console.log(multi);

// const divi = numberFirst / numberSecond;
// console.log(divi);

// const subt = numberFirst - numberSecond;
// console.log(subt);

// const addi = numberFirst + numberSecond;
// console.log(addi);

// alert('Mult = ' + multi + '; Div = ' + divi + '; Sub = ' + subt + '; Add = ' + addi);


const mathOperation = prompt('What action do you want to perform? (add, sub, mult, div)', 'mult');
console.log(mathOperation);
const numberFirst = +prompt('Enter the first number', '9');
console.log(numberFirst);
const numberSecond = +prompt('Enter the second number', '12');
console.log(numberSecond);

if (mathOperation == 'mult') {
    alert('Mult = ' + (numberFirst * numberSecond));
} else if (mathOperation == 'add') {
    alert('Add = ' + (numberFirst + numberSecond)); 
} else if (mathOperation == 'sub') {
    alert('Sub = ' + (numberFirst - numberSecond));
} else if (mathOperation == 'div') {
    alert('Div = ' + (numberFirst / numberSecond));
} else {
    alert('The wrong mathematical action was introduced');
}