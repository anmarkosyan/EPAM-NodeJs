// if(false){
//     var x = 'hello';
// }
// console.log(x);// undefined
//
// for(let i = 0; i < 10; i++){
//     const x = i;
// }
// console.log(i);//reference error

// function Greeting(name){
//     this.name = name;
// }
// const a = new Greeting('Anush');
// console.log(a);

// function x(){
//     console.log(a);
//     console.log(b);
//     var a = 'anush';
//     let b = 12;
// }
// console.log(x());

// (function(){
//     var a = b = 1;
// })();
// console.log(b);
// console.log(a);

// function age(...args){
//     console.log(typeof args);
// }
// age(35);

// const arr = [ 23, 34, 34, 45,NaN];
// arr.forEach((el, i) => console.log(el,i));
//
// console.log(arr.indexOf(NaN));// will return -1(false)
// console.log(arr.indexOf(45));
// console.log(arr.findIndex(num => Number.isNaN(num)));//4
//
//
// const name = 'Anush';
// (function(){
//     if(typeof name === 'undefined'){
//         var name = 'John';
//         console.log(name);
//     }else{
//         console.log(name);//John
//     }
// })()

// const obj = {
//     user: "Hello"
// };
//
// const obj1 = Object.create(obj);
// delete obj1.user;
// obj1.age = 35;
// delete obj1.age;
// console.log(obj.user, obj1.age);//Hello

// const arr = [23, 34, 1, 2, 3];
// console.log(arr[10]);// undefined
// arr[10] = 9;
// const onlyItems = arr.map(el =>  el);
// console.log(onlyItems);
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// console.log(arr);//[ 23, 34, 1, 2, 3, <5 empty items>, 9 ]

// const a = arr.map(el => {
//     if(typeof el === 'number') return;
//     return el * 2;
// });
// console.log(a);//[ undefined, undefined, undefined, undefined, undefined ]

// const user = {
//     age: 35
// };
// const birthday = 34;
//
// const a = function (data, day){
//     data.age = 90;
//     day = 67;
// }
// a(user, birthday);
// console.log('=====', user, birthday);

// let data1 = 'Anush';// The JavaScript delete operator removes a property from an object;
// age = 35;
// console.log(delete data1);
// console.log(delete age);

// var x = 10;
// const obj = {
//     x: 20,
//     foo: function (){
//         console.log(this.x);
//         //const self = this;
//         setTimeout(function(){
//             //console.log(self.x);//20
//             console.log(this.x)
//         }, 0);
//     }
// }
// obj.foo();

//=====
// function d (...args){
//     console.log(args );
// }
// d(2, 3, 4, 5, 6);

// const obj1 = {
//     name: 'Anush',
//     age: [2, 3, 4, 5],
// }
// const obj2 = {...obj1};
// console.log(obj1 === obj2);
// console.log(obj1, obj2);

// const arr = [];
// arr[0] = 9;
// arr[1] = 23;
// arr.x = '90';
// arr.y = 890;
// console.log(arr.length, arr);
//
//
// console.log(null == undefined);//true
// console.log(null === undefined); // false

// const arr = [1, 2, 3, 4, 'hello', ];
//  arr.helloObj = 'hello obj';
// for (const keys in arr) {
//     console.log(keys);
// }
// console.log('---------');

// for(const value of arr){
//     console.log(value);
// }
// console.log('=========');
// console.log('2' in arr);// true => will iterate over keys/indexes

//console.log(10 > 11 > -5 === true);

// let x = 1;
// function foo(x){
//     x = x + x;
//     x = 4;
//     console.log(x)
// }
// foo(x);
// console.log(x);

// const arr = [1, 2, 3, 4];
// arr.forEach((el, i, arr) => console.log(el + 1));
// console.log(arr);

// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));//if
// const arr1 = [3, 4, 5];
// const sumNum = arr1.reduce((x, y) => x + y);
// console.log(sumNum);

// let day = 6;
// switch (day) {
//   case 6:
//     console.log('hello');// группируем оба case
//   case 7:
//     console.log('weekend');
//     //break;
//   default:
//     console.log('work day');
// }
//
// switch (1) {
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log(3);
//   case 4:
//     console.log(4);
// }

// function foo() {
//   console.log(this);
// }
//
// function goo() {
//   return arguments[0]();
// }
//
// goo(foo);

// const foo = (baz = 9) => {
//     //function bar => hoisting
//     //function baz => hoisting
//   var baz = 'HAPPY!';
//
//   // function bar() {
//   //   return 'HAPPY!';
//   // }
//
//   // function baz() {
//   //   return 'HAPPY!';
//   // }
//   var bar = 8;
//   return [typeof baz, typeof bar];
// };
// console.log(foo());

// const obj1 = {
//     baz:'Hi!',
//     arr: [2, 5, 7, 8]
// }
// const obj2 = {...obj1};
// console.log(obj2 === obj1);
// console.log(obj1.arr === obj2.arr);
// obj1.baz = 'Hello';
// obj1.arr.push(20, 59);
//
// console.log(obj2.baz, obj2.arr);

// var x = 10
// const obj = {
//     x: 20,
//     foo: function() {
//         setTimeout(() => {
//             console.log(this.x)
//         }, 0)
//     }
// }
// obj.foo();

const person = { name: "Davit" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
