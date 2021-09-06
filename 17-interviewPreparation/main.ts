//types => number, string, boolean

// function add(a: number, b: number, show: boolean, text: string) {
//   const result = a + b;
//   if (show) {
//     console.log(text + result);
//   } else {
//     return result;
//   }
// }
//
// const num1 = 6;
// const num2 = 3.5;
// const printRes = true;
// const msg = 'The result is: ';
//
// add(num1, num2, printRes, msg);

//object type
// const person: {
//   name: string;
//   age: number
// } = {
const person = {
  name: 'Anush',
  age: 34,
};
//console.log(person.name);

//array type
const person1 = {
  name: 'Anush',
  age: 34,
  hobbies: ['yoga', 'bike'],
};
//console.log(person1.name);

let activities: string[];
activities = ['swimming', 'hiking'];

for (const activity of activities) {
  //console.log(activity.toUpperCase()); // => typeof string
  //console.log(activity.map()); //!! ERROR !!!
}

//tuple type
const tuple: {
  role: [number, string];
} = {
  role: [2, 'admin'],
};
tuple.role.push(45);//!!!but dont do this, ony that count of values which is specifies
tuple.role.push('user');

//console.log(tuple.role);

//enum type enum{NEW = 2, NEW1 = 10, NEW2 = 15} => object with identifier values
//also for mapping values
enum Role{'ADMIN', 'USER','EDITOR'}

const enums = {
  role: Role.ADMIN //=> doing mapping value
}

console.log(enums.role);

