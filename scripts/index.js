'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function newArr(array) {
    if(!Array.isArray(array)) return null;
    const exampleArr = [];
    for (let a = 0; a < array.length; a++ ) {
        if (array[a] > 0) exampleArr.push(array[a]);
    }
    if (!exampleArr.length) return null;
    return exampleArr;
}
console.log(newArr(arr));