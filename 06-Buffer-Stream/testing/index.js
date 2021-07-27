const fs = require('fs');
const http = require('http');
const zlib = require('zlib');

const input = fs.createReadStream('./test.txt');
const output = fs.createWriteStream('./test.gzip');
input.pipe(zlib.createGzip()).pipe(output);



// const server = http.createServer((req, res) => {
//   res.end('from server - hello there 👻');
// });
// server.listen(8080, '127.0.0.1', () => {
//   console.log('server listening...');
// });

//================
// const { createGzip } = require('zlib');
//
// const gzip = createGzip();
//
// // fs.writeFile('test.txt', 'Բարեւ բոլորին!!!!!!!!', () => {
// //   console.log('file is written');
// // });
// //
// // fs.readFile(`${__dirname}/test.txt`, (err, data) => {
// //   if (err) return err.message;
// //   else {
// //     console.log(data.toString());
// //     fs.writeFile('test.zip', data, ()=>{
// //       console.log('zip file!!')
// //     })
// //   }
// // });
// //default 16kbt
// const stream = fs.createReadStream(`${__dirname}/test.txt`,{
//   highWaterMark: 8,
// });
// stream.setEncoding('utf-8');
// let out = '';
// stream.on('data', chunk => {
//   //console.log(chunk);
//   out += chunk
// });
//
// stream.on('end', () => {
//   console.log(out);
//  });
// // stream.on('finish', ()=>{
// //     console.log('input finish')
// // })
// // const output = fs.createWriteStream(`${__dirname}/hello.html`);
// // stream.pipe(output);
// // output.on("finish", ()=>{
// //     console.log('output finish')
// // })
// // output.on('end', () => {
// //     console.log('output end!!!');
// // });
// //
// //
// //
// // stream.on('error', err => {
// //   console.log(err);
// // });
// // stream.on('close', () => {
// //   console.log('close event');
// // });
