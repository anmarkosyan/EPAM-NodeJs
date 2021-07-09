//console.log(globalThis);
const { add, div, multi } = require('./calc');

console.log('Hello from top-level code 🤩');

setImmediate(() => console.log('First immediate 👻'));
setTimeout(() => console.log('First timeout'), 0);

process.nextTick(() => console.log('Hello next tick 😇'));

add(3, 5);
div(12, 6);
multi(12, 12);

console.log('Bye from top-level code 😎');
