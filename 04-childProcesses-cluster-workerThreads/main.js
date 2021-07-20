const { fork } = require('child_process');
const server = require('http').createServer();

//1️⃣exp:
// const forked = fork('childProcess.js');
// //console.log(forked)
//
// forked.on('message', msg => {
//   console.log(`Message from child: ${msg}`);
// });
//
// forked.send('Hello from main process 🎉');

//2️⃣exp:
server.on('request', (req, res) => {
  console.log(req.url);
  if (req.url === '/compute') {
    const compute = fork('compute.js');

    compute.send('starting listen child process...');
    compute.on('message', sum => {
      res.end(`Sum is: ${sum}`);
    });
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening server...');
});
