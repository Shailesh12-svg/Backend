// console.log(arguments)
// console.log(require('module').wrapper);

const C = require('./test-module1')

const calc1 = new C(); 
console.log(calc1.add(7,3));