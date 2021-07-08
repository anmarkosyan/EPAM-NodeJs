const fs = require('fs');
const crypto = require('crypto');

const start = new Date();

console.log('------ Start -------');

setTimeout(() => console.log('Timer 1'), 0);
setImmediate(() => console.log('Immediate 1'));

process.nextTick(() => console.log('Outside next tick'));

fs.readFile('test-file.txt', 'utf-8', () => {
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start, 'password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start, 'password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start, 'password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start, 'password encrypted');
  });
});

console.log('------- End -------');
