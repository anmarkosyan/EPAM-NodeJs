//console.log(globalThis);
const calc = require('./calc');

console.log('Hello from top-level code 🤩');

setTimeout(() => console.log('First timeout'), 2000);

setTimeout(calc, 1000, 3, 5);

console.log('Bye from top-level code 😎');
