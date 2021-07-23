//==================== 🔴 typescript ==================
//for importing core node modules do this: => npm install -D @types/node
import * as fs from 'fs';

const text = 'Starting coding node with typeScript 💥';
fs.writeFile('test.txt', text, () => {
  console.log('file created!!!!');
});

//1️⃣ primitives
/*
const x: string = 'Anush';
let x1 = 'Aram';
x1 = 'Levon';
console.log(x, x1);

let num: number = 56;
let num1 = 45;
console.log(num, num1);

let isBool: boolean = true;
let isBool1 = false;
console.log(isBool, isBool1);

//2️⃣ object types
const strData: string[] = ['Anush', 'Aram', 'Hovhannes'];
//❗️data.push(45); push only string type elements
strData.push('Harut');
console.log(strData);

const numData: number[] = [3, 4, 6, 7, 8];
const numData1 = [3, 4, 5, 6];
//❗️numData1.push(true)
const dupNum = numData1.map(num => num * 2);
console.log(numData, dupNum);

//✅ tuple type variables
let tupleData: [number, string, boolean, 10];
tupleData = [45, 'hello', true, 10];
console.log(tupleData);

//✅ Generics
const genericData: Array<number> = [34, 5, 6, 7];
console.log(genericData);
 */
//3️⃣ functions
// function letFunction() {
//   let x = '111';
//   if (true) {
//     let x = 99;
//   }
//   console.log(x);
// }
// letFunction();
//==================
//❗️will throw an error because we want to change var value type
// function varLetFunction(){
//     var myStringValue = "varStringValue";
//     let myStringValueLet = "letStringValue";
//     if(true){
//         var myStringValue = 123;
//         let myStringValueLet = 12345;
//     }
// }
// varLetFunction();
//=================
// const fnc1 = function (i: number) {
//   console.log(`Parameter: ${i}`);
//   //let i:number = 10; => duplicate identifier
// };
// fnc1(10);

//=======
/*
const fnc2 = function (i2: number) {
  console.log(`Parameter 1: ${i2}`);
  const i: number = 10;
  for (let i = 100; i < 101; i++) {
    console.log(`Parameter 2: ${i}`);

    for (let i = 200; i < 201; i++) {
      console.log(`parameter 3: ${i}`);
    }
  }

  console.log(i);
};

fnc2(34);
 */

//=============
const fnc3 = function (): number {
  return 4 + 8;
};

const msg = `in our stock we have an ${fnc3()}kg. cheese 🧀`;
console.log(msg);
