const http = require('http');
const pid = process.pid;

const factorial = n => (n ? factorial(n - 1) * n : 1);

http
  .createServer((req, res) => {
    res.end();
  })
  .listen(8080, () => {
    console.log(`Started process ${pid}, Factorial sum: ${factorial(50)}`);
  });


