//=================== about typescript once again ============
//primitive types
//string

//number

//boolean

//array
const arr: number[] = [1, 2, 3, 4];
const arr1: string[] = ['a', 'b', 'c'];
const arr2: Array<number> = [1, 2,3];

//any =>  `any` disables all type checking =====> but with noImplicitAny compiler flag will throw an error
// let color; // any type
//color = 'red';
// const sum = function(a, b){// any type parameter + ant type returned function
//     return a + b;
// }
// console.log(sum(3, 2));

//type annotation
//function
// const sum1 = function(a: number, b: number): number{
//     return a + b;
// }
// console.log(sum1(3, 2));//without type annotation it will check only for arguments count

//object types for function parameters
// const objFunc = function(obj: {a: number, b?: number}): void{
//     console.log(obj.a + obj.b)
// }
// objFunc({a: 35});
// objFunc({a: 2, b: 3});

//union => First way for combining types using TYPE ANNOTATION

// const unionFunc = function(data: string | number[]):void {
//     console.log(data.slice(0, 3))
//     if(typeof data === 'string'){
//         console.log(data.toLocaleUpperCase());
//
//     }else {
//         console.log(data[0]);
//     }
// }
// unionFunc([10, 20, 30, 40]);
// unionFunc('Anush');
//unionFunc(true);// throw an error

//type aliases => second way for creating type and use it more than once with a single name
// type User = {
//     name: string,
//     age: number
// };
//use for diff types exp: union type
// type ID = number | string;
//
// const user = function(userData: User): void {
//     console.log(userData.name, userData.age)
//
// }
// user({name: 'Anush', age: 35});

//interface => another way of name an object type
// interface Point {
//     x: number,
//     y: number
// }
// const printSum = function(data: Point):void {
//     console.log(data.x + data.y);
// }
// printSum({x: 4, y: 34});

//============ differences between INTERFACE AND TYPE ALIASES ===========
//Extending an interface
interface User {
    firstName: string,
    age: number
}

interface Admin extends User {
    permission: boolean
}

//Adding new fields to an existing interface
interface Admin {
    tell: number
}
const admin = function(data: Admin){
    console.log(data)

}
admin({firstName: 'asa', age: 35, permission: false, tell: 1234})

//=================== type aliases ===================
//Extending a type via intersections
type User1  = {
    name: string,
    age: number
}
type Admin1 = User1 & {
   role: boolean
}

//!!!!!A type cannot be changed after being created
// type Admin1 = {  // Error: Duplicate identifier
//     tell: number
// }
const admin1 = function(data: Admin1){
    console.log(data)
}
admin1({name: 'aram', age: 36, role: true})

//enum

