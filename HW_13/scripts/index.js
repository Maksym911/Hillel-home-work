'use strict';

const num = +prompt('Як ви гадаєте, в якому році Пастернак отримав нобелівську премію по літературі?', '1958');
let age = 2023 - num;
age = String(age);
const endA = ' рік тому';
const endB = ' роки тому';
const endС = ' років тому';

if (!isNaN(num)) {
    if ((num == 2023) || (num == 0) || (num < 1900) ) {
        alert('Це було не в цьому році!');
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
