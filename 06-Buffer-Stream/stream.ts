import * as fs from 'fs';
import * as http from 'http';

const file = fs.createWriteStream(`big.txt`);
//console.log(file);//big WriteStream object{}
for (let i = 0; i <= 100000; i++) {
  file.write('Node js is the best!!!!\n');
}
file.end();

const server = http.createServer();
server.on('request', (req, res) => {
  //reading file with full buffer data in memory
  // fs.readFile('big.txt', (err, data) => {
  //   if (err) throw err;
  //   res.end(data);
  // });
  const output = fs.createReadStream('./big.txt');
  output.pipe(res);
});

server.listen(8000, '127.0.0.1', (): void => {
  console.log('server listening for streams...');
});
