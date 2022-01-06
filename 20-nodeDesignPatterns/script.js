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

//const arr = [23, 34, 1, 2, 3];
// console.log(arr[10]);// undefined
// arr[10] = 9;
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
//
// }
// a(user, birthday);
// console.log(user, birthday);

// let data1 = 'Anush';
// age = 35;
// console.log(delete data1, data1);
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

const arr = [];
arr[0] = 9;
arr[1] = 23;
arr.x = '90';
arr.y = 890;
console.log(arr.length, arr);
console.log(null == undefined);//true