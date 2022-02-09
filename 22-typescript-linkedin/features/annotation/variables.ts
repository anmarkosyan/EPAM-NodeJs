import {log} from "util";

let apples = 8;
console.log(apples);
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

const stringArr: string[] = ['a', 'b', 'c'];
const array: number[] = [1, 2, 3, 4];

//classes
class Car {

}

const car1: Car = new Car();

//object literals
const pointers: {x: number, y: number} = {
    x: 10,
    y: 2
}
console.log(pointers)
//functions
const logNumber = (num: number): number => {
    return num;
    //console.log(num);
}
logNumber(23)

//When to use annotation
//1) function returns any type

//2) when we declare a variable on one line and initialize in second line
const words = ['hello', 'how', 'are', 'you'];
//let foundWord: boolean;
let foundWord = false;

for(const el of words){
    if(el === 'how'){
        foundWord = true;
    }
}
console.log(foundWord)