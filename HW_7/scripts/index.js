'use strict';

const hours = +prompt('How many hours do you spend on homework?', 5);
console.log(hours);
const seconds = hours * 3600;
console.log(seconds);
alert('You are wasting ' + seconds + ' seconds');
