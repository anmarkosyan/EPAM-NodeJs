const { fork } = require('child_process');

const forked = fork('childProcess.js');
//console.log(forked)

forked.on('message', msg => {
  console.log(`Message from child: ${msg}`);
});

forked.send('Hello from main process 🎉');
