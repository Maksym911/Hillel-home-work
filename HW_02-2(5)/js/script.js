'use strict';

// Task #1 
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// const user = {};
// user.name = 'John';
// user.surname = 'Smith';

// console.log(user);

// user.name = 'Peter';
// console.log(user);

// delete user.name;
// console.log(user);



// Task #2
// Можно ли изменить объект, объявленный с помощью const?
const user = {
    name: 'John',
};
user.name = 'Pete';
console.log(user);
// самі ключі обєкту можемо змінювати



// Task #3
// Напишите код для суммирования всех зарплат и сохраните 
// результат в переменной sum

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130 
}
console.log(salaries);

const sum = (salaries.John + salaries.Ann + salaries.Pete);
console.log('Sum of all salaries = ' + sum);
