//const child = require('child_process');
//console.log(child);

// const { spawn } = require('child_process');
//
// const childProcess = spawn('pwd');
// //console.log(childProcess);
// console.log('start');
// childProcess.on('exit', (code, signal) => {
//   console.log(`Child process exited with code ${code} and signal ${signal}`); // 0 null
// });
// console.log('end');

process.on('message', msg => {
  console.log(`Message from parent: ${msg}`);
});


let counter = 0;
setInterval(()=>{
  process.send(`counter: ${counter++}`)
}, 1000)

