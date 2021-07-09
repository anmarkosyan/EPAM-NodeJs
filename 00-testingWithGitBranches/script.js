//console.log(globalThis);
const calc = require('./calc');

console.log('Hello from top-level code 🤩');

setImmediate(() => console.log('First immediate 👻'));
setTimeout(() => console.log('First timeout'), 0);

process.nextTick(() => console.log('Hello next tick 😇'));

setTimeout(calc, 1000, 3, 5);

console.log('Bye from top-level code 😎');
