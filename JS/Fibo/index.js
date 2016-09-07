'use strict';
let Fibo = require('./fibo');

console.log(`Regular fibo ${Fibo.calc(5)}`); // Won't handle more than ~40
console.log(`Memoization fibo ${Fibo.calc_memo(1000)}`); // Runs smoothly 
