console.log('------ Start -------');

setTimeout(() => console.log('Timer 1'), 0);
setImmediate(() => console.log('Immediate 1'));

process.nextTick(() => console.log('Outside next tick'));

console.log('------- End -------')
