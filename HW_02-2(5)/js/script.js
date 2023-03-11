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
// const user = {
//     name: 'John',
// };
// user.name = 'Pete';
// console.log(user);
// самі ключі обєкту можемо змінювати



// Task #3
// Напишите код для суммирования всех зарплат и сохраните 
// результат в переменной sum

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130 
// }
// console.log(salaries);

// const sum = (salaries.John + salaries.Ann + salaries.Pete);
// console.log('Sum of all salaries = ' + sum);

// Функция проверяющая четное ли число
// function isEven(foo) {
//     return foo % 2 === 0;
// }
// const booleanExample_4 = isEven(10);
// console.log('Функция предикат', booleanExample_4)

// ++++


// let userName = {
    //     ['First name']: 'Sara',
    //     ['Last name']: 'Ivanivna',
    //     age: 25,
    //     student: 'no stedent',
    //     family: {
    //         hasbent: 'Timur',
    //         douther: 'Fima'
    //     }
    // }
    // console.log(userName);
    // console.log(userName.student);
    // console.log(userName['Last name']);
    // console.log(userName.family.douther);
    
    
    // const arr = ['Makar', 'Arthemovich', 4, 'borchaga'];
    // console.log(arr);
    // console.log(arr.length);
    // console.log(arr[0], arr[1]);
    // // отримуємо останнє значення масиву
    // console.log(
    //     arr[arr.length -1] 
    // );
    
    // let anyString = 'Mozilla';
    // console.log(anyString.substring(0, 3));
    // console.log(anyString.substring(4, 7));
    
    
    
    
    
    // через конструктор класу
    // let ob = new Object(); 
    // ob.name = 'Taras';
    // ob.age = 25;
    // console.log(ob);
    
    
    // через літерал
    // let obp = {};
    // obp.name2 = 'Ann';
    // obp.age2 = 32;
    // console.log(obp);
    
    // let wer = {
    //     name: 'Alise',
    //     age: 23,
    //     st: 'no st'
    // }
    // console.log(wer);
    // console.log(wer.age);
    
    // let student = {
    //     firstName: 'Ann',
    //     ['last name']: 'Gorshko',
    //     ['student-'+ 'age']: 18,
    // }
    // console.log(student);
    // console.log(student['last name']);
    
    // let student = {
    //     firstName: 'Ann',
    //     ['last name']: 'Gorshko',
    //     boyfrend: {
    //         firstName: 'Taras',
    //         lastName: 'Li'
    //     },
    //     ['student-'+ 'age']: 18,
    // }
    // console.log(student);
    // console.log(student.boyfrend.firstName);
    
    // function foo(a, b) {
    //     return a + b;
    // }
    // console.log(foo)
    
    // const arr = ['as', 'asd', 3232, 'qsw'];
    // console.log(arr);
    // console.log(arr.length);
    // console.log(arr[2]), arr[3];
    // // отримуємо останній ел масиву
    // console.log(arr[arr.length -1]); 
    
    // const a = 10;
    // const b = 10n;
    // const c = '10';
    // const d = null;
    
    // console.log(typeof a);
    // console.log('b', typeof b);
    // console.log('c', typeof c);
    // console.log('d', typeof d);
    
    
    
    // let tr = 'I am\'t writter'; 
    // console.log(tr);
    
    // let tr = `I am\'t writter with salery ${150+300}$`; 
    // console.log(tr);
    
    // let tr = `I am\'t writter with salery ${150+300}$`; 
    // console.log('довжина рядку tr складає -', tr.length, 'символ'); 
    // кількість символів в рядку
    
    // дістаємо елементи рядку (літеру), але змінити не зможемо
    // ІМУТАБЕЛЬНІСТЬ - НЕЗМІННІСТЬ
    // const lkj = 'Hello word!';
    // console.log(lkj);
    // console.log(lkj[0]);
    // console.log(lkj[lkj.length -1]);
    
    // let wer = {};
    // console.log(wer);
    


// const x = 10;
// const y = 0;
// console.log('0/10', y/x);
// console.log('10/0', x/y);

// символи з рядку
// var anyString = 'Mozilla';
// console.log(anyString.substring(0, 3));
// console.log(anyString.substring(4, 7));
// console.log(anyString.substring(0, 6));

const ob = {}
ob.name = 'Jon';
ob.age = 23;
ob.heig = 180;
console.log(ob);

const obj = {
    name: 'John',
    age: 23,
    height: 181
}
console.log(obj.age);
