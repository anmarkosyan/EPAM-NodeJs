//++++++++++++++++++++++++++ Asynchronous ++++++++++++++++++++

//1: using nextTick
// const hideString = function(str:string, done: any){
//     process.nextTick(()=>{
//         done(str.replace(/[a-zA-Z]/g, 'X'));
//     })
//
// };
//  hideString('Hello world',(hidden: any)=>{console.log(hidden)} );
//
//  console.log('end');

//2: using timers
// const timer = function( callback: any, sec: number,){
//     setTimeout(callback, sec * 1000);
// };
//
// timer(()=>{
//     console.log('after two second!!!');
// }, 2);
//
// console.log('immediately');

//3: using promises
// const timer = (sec: number) =>
//   new Promise((resolve, reject) => {
//     if (sec > 3) {
//       reject(new Error(`Too long time: ${sec} second!!!`));
//     }
//     setTimeout(() => {
//       resolve('hi there!!!');
//     }, sec * 1000);
//   });
//
// timer(4)
//   .then(console.log)
//   .then(() => 'Aram')
//   .then((str: string) => console.log(`How are you doing today, ${str}?`))
//   .catch(err => console.log(err.message));
//
// console.log('Immediately');

//4: using util core module
// import { promisify } from 'util';
// import fs from 'fs';
//
// const writeFile = promisify(fs.writeFile);
//
//
// writeFile('test.txt', 'created txt file using promisify way)))').then(() =>
//   console.log('Cool!!')
// ).catch(err => console.error(err.message));

//5: using promises
import fs from 'fs';
import { promisify } from 'util';
const writeFile = promisify(fs.writeFile);

const delay = (second: any) =>
  new Promise(resolve => {
    setTimeout(resolve, second * 1000);
  });

const sequantlly = () =>
  Promise.resolve()
    .then(() => console.log('starting...'))
    .then(() => delay(1))
    .then(() => 'waiting')
    .then(() => delay(2))
    .then(() => writeFile('test1', 'added test1 file'))
    .then(() => 'file successfully created...')
    .then(console.log)
      .catch(console.error);

sequantlly();

