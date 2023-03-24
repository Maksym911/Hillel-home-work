'use strict';

const num = prompt('Як ви гадаєте, в якому році Пастернак отримав нобелівську премію по літературі?', '1958');
let age = 2023 - num;
age = String(age);
const endA = ' рік тому?';
const endB = ' роки тому?';
const endС = ' років тому?';
console.log(num);

if (!isNaN(num)) {
    if ((num == 2023) || (num == 0)) {
        alert('Це було не в 2023 році!');
    } else if (num === null) {
        alert('Від вас очікували іншого!');
    } else if (num < 1900) {
        alert('Пастернак тоді ще не народився!');
    } else if (num > 2023) {
        alert('Пастернак помер ще в 1960 році!');
    }
        else if (age[age.length - 1] == '1') {
            alert('По вашому, це було в ' + num + ', тобто ' + age + endA);
            } else if ((+age[age.length - 1] == 2) || (+age[age.length - 1] == 3) || (+age[age.length - 1] == 4)) {
                    alert('По вашому, це було в ' + num + ', тобто ' + age + endB);
                } else {
                    alert('По вашому, це було в ' + num + ', тобто ' + age + endС);
                    }
} else if (isNaN(num)) {
                    alert('Ви ввели некоректні дані');
} 


// let year = +prompt('Введіть число');

// // console.log(year);
// if (year < 0 || Number.isNaN(year)) {
//     alert('Ви ввели невірні дані');
// }  else alert(year);

