'use strict';

// #1
// for (let i = 10; i <= 20;) {
//     alert(i++ + ', ' + i++ + ', ' + i++ + ', ' + i++ + ', ' + i++ + ', ' + i++ + ', ' + i++ + ', ' + i++ + ', ' + i++ + ', ' + i++ + ', ' + i++); 
// }

// #2
// for (let i = 10; i <= 20; i++) {
//     alert(i**2); 
// }

// #3
// for (let i = 0; i <=10; i++) {
//     alert(i * 7); 
// }

// #4
// for (let i = 1; i <= 15; i++) {
//     console.log(i + i);
// }

// #5
// for(let i = 15; i <= 35; i++) {
//     let b = i**2
//     console.log(b)
// }

// #6
// let sa = 0;
// for(let i = 1; i <= 500; i++) {
//     sa += i;
// }
// alert(sa/500);

// #7
// let sum = 0;
// for (let i = 30; i <= 80; i++) {
//     if (i % 2 === 0) {
//     sum += i; 
//     }
// }
// alert(sum);

// #8
// for (let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) {
//         console.log(i); 
//         }
// }

// #9
// function getRandomInt(max) {
//     return (Math.floor(Math.random() * 100) + 10);
// }
// let n = getRandomInt();
// console.log(n);
// for (let i = 2; i * 2 <= n; i++) {
//     if (n % i == 0) {
//         console.log(`Дільники цього числа: ${i}`);
//     }
// }

// #10
// let n = +prompt('Введіть число', '350');
// for (let i = 2; i * 2 <= n; i++) {
//     if (n % i == 0) {
//         if (i % 2 == 0) {
//         console.log(`Парні дільники цього числа: ${i}`);
//         }
//     }
// }

// #11
// let n = +prompt('Введіть число', '350');
// let sum = 0
// for (let i = 2; i * 2 <= n; i++) {
//     if (n % i == 0) {
//         if (i % 2 == 0) {
//         console.log(`Парні дільники цього числа: ${i}`);
//         sum = sum + i;
//         }
//     }
// }
// console.log('Сума дільникіи = ' + sum);

// #12
for (let i = 1; i <= 10; i++) {
    for (let b = 1; b <= 10; b++) {
        console.log(b * i);
    }
}
