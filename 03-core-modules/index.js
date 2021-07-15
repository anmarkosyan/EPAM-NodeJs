const fs = require('fs');
const path = require('path');
const readLine = require('readline');

//================= 🔴 lecture part ===============
//1️⃣ fs module
//📍 Sync methods
//const syncFs = fs.readFileSync(`${__dirname}/test.txt`).toString();
//or
//const syncFs = fs.readFileSync(path.join(__dirname, 'test.txt')).toString();
//console.log(syncFs);
//or
// try {
//   const syncFs = fs.readFileSync('./test.txt').toString();
//   console.log(syncFs);
// } catch (err) {
//   console.error(err);
// }
//write file
fs.writeFileSync(`${__dirname}/test.txt`, `Node js is the best back-end environment 🤩😍 \n`);
console.log('File written! 👻');

//📍 Async methods
fs.readFile(`${__dirname}/test.txt`, (err, data) => {
  if (err) console.error(err);
  else console.log(data.toString());
});

const textCreate = `This file is about fs modules and was created on: \n${new Date()}`;
fs.writeFile(`${__dirname}/about.txt`, textCreate, err => {
  if (err) console.error(err);
  else console.log('file created 🎉');
});

fs.appendFile(`${__dirname}/test.txt`, textCreate, err => {
  if (err) console.error(err);
  else console.log('New text appended to file 🔮');
});

fs.mkdir(`${__dirname}/04-test`, err => {
  console.log('created dir 🏋');
});
fs.mkdir(`../04-test`, err => {
  console.log('Created dir out 1 level 🎉');
});

fs.rmdir(`${__dirname}/04-test`, err => {
  if(err) console.error(err);
  else console.log('removed direction 🤷')
});

//console.log(fs.statSync('./test.txt')); //about file info

// console.log(fs.existsSync('./about.txt'));//true

//2️⃣ path
//console.log(path.join(__dirname));
//console.log(path.normalize());

// fs.writeFile('./check.txt', 'index.js', err => {
//   console.log('created');
// });
// fs.readFile('./check.txt', (err, data) => {
//   console.log(path.isAbsolute(data.toString()));
// });
