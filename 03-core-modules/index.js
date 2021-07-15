const fs = require('fs');
const path = require('path');
const readline = require('readline');
const util = require('util');

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
// fs.writeFileSync(`${__dirname}/test.txt`, `Node js is the best back-end environment 🤩😍 \n`);
// console.log('File written! 👻');

//📍 Async methods
/*
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
  if (err) console.error(err);
  else console.log('created dir 🏋');
});
fs.mkdir(`../04-test`, err => {
  if (err) console.error(err);
  else console.log('Created dir out 1 level 🎉');
});

fs.rmdir(`${__dirname}/04-test`, err => {
  if (err) console.error(err);
  else console.log('removed direction 🤷');
});

fs.unlink(`${__dirname}/about.txt`, err => {
  if (err) console.error(err);
  else console.log('Removed about.txt file 😉');
});

console.log(fs.statSync('./test.txt')); //info about file

console.log(fs.existsSync('./about.txt')); //true | false
// fs.open(`${__dirname}/about.txt`, 'r', (err, fd) =>{
//   if(err) console.error(err);
//
//   const  buffer = new Buffer(1024);
//   fs.read(fd, buffer, 0, buffer.length, 0, function (err, bytes) {
//
//     if (err) throw err;
//
//     // Print only read bytes to avoid junk.
//     if (bytes > 0) {
//       console.log(buffer.slice(0, bytes).toString());
//     }
//
//     // Close the opened file.
//     fs.close(fd, function (err) {
//       if (err) throw err;
//     });
//   });
// })
 */

//2️⃣ path module
/*
//📍 => return last portion of path
console.log(path.basename(`${__dirname}/check.txt`)); // check.txt => return last portion of path
//📍 => Return the directory part of a path
const myPath = path.dirname(`${__dirname}/check.txt`); //Users/anush/webProjects/EPAM_NodeJs/03-core-modules
fs.writeFileSync(`${__dirname}/check.txt`, myPath);
//📍 => Return the extension part of a path
console.log(path.extname(`${__dirname}/check.txt`)); // .txt
//📍 => Returns true if it’s an absolute path
console.log(path.isAbsolute(`${__dirname}/check.txt`)); //true
console.log(path.isAbsolute('./check.txt')); // false
console.log(path.isAbsolute('/check.txt')); // true

const readPath = fs.readFileSync(`${__dirname}/check.txt`).toString();
console.log(path.isAbsolute(readPath)); //true
//📍 => Joins two or more parts of a path
console.log(path.join(`${__dirname}`, 'check.txt')); // /Users/anush/webProjects/EPAM_NodeJs/03-core-modules/check.txt

//📍 => Tries to calculate the actual path when it contains relative specifiers like . or .., or double slashes:
console.log(path.normalize('/Users/anush/../webProjects/../../EPAM_NodeJs/../03-core-modules/../check.txt')); // /check.txt
//📍 => Parses a path to an object with the segments that compose it:
console.log(path.parse(`${__dirname}/check.txt`));//
// {
//     root: '/',
//     dir: '/Users/anush/webProjects/EPAM_NodeJs/03-core-modules',
//     base: 'check.txt',
//     ext: '.txt',
//     name: 'check'
//}

//📍 You can get the absolute path calculation of a relative path:
console.log(path.resolve('check.txt'));// /Users/anush/webProjects/EPAM_NodeJs/03-core-modules/check.txt
 */

//3️⃣ readline module
//console.log(process)
const rl = readline.createInterface({
  input: process.stdin, // getter
  output: process.stdout, // getter
});

rl.question('Please, enter your name: ', name => {
  // TODO: Log the name in a database
  console.log(`Thank you: ${name}`);
  rl.setPrompt(`How old are you  ${name}? `);
  rl.prompt();

  rl.close();
});

//================== 🔴coding challenge ==================
//1. Read file content. File path should be provided via readline.
//2. Convert attached .csv file to .json file
//3. Print attached directory structure (optional, you can try to unzip node_modules folder via nodeJs);

// Note: Don’t use / or \ symbols in homework, use path methods instead.
