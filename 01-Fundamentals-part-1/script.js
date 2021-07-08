const fs = require('fs');

console.log('------ Start -------');

setTimeout(() => console.log('Timer 1'), 0);
setImmediate(() => console.log('Immediate 1'));

process.nextTick(() => console.log('Outside next tick'));

fs.readFile('test-file.txt', 'utf-8', (err, data) => {
  console.log('I/O finished');
});

console.log('------- End of top-level code-------');
