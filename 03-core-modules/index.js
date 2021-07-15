const fs = require('fs');
const path = require('path');
const readLine = require('readline')

//1️⃣ fs
//read about error inside event loop
// fs.readFile('./test.txt', (err, data) => {
//   console.log(data.toString());
// });
// try {
//   const data = fs.readFileSync('./test.txt').toString();
//   console.log(data, 'sync');
// } catch (err) {
//   console.error('error');
// }
//
// //console.log(fs.statSync('./test.txt')); //about file info
//
// fs.writeFile('./about.txt', 'anush markosyan', () => {
//   console.log('created');
// });
//
// console.log(fs.existsSync('./about.txt'));//true

//2️⃣ path
//console.log(path.join(__dirname));
//console.log(path.normalize());

fs.writeFile('./check.txt', 'index.js', err => {
  console.log('created');
});
fs.readFile('./check.txt', (err, data) => {
    console.log(path.isAbsolute(data.toString()));
});

