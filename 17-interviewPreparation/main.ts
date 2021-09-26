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
// const person = {
//   name: 'Anush',
//   age: 34,
// };
//console.log(person.name);

//array type
// const person1 = {
//   name: 'Anush',
//   age: 34,
//   hobbies: ['yoga', 'bike'],
// };
//console.log(person1.name);

// let activities: string[];
// activities = ['swimming', 'hiking'];
//
// for (const activity of activities) {
//console.log(activity.toUpperCase()); // => typeof string
//console.log(activity.map()); //!! ERROR !!!
//}

//tuple type
// const tuple: {
//   role: [number, string];
// } = {
//   role: [2, 'admin'],
// };
// tuple.role.push(45); //!!!but dont do this, ony that count of values which is specifies
// tuple.role.push('user');

//console.log(tuple.role);

//enum type enum{NEW = 2, NEW1 = 10, NEW2 = 15} => object with identifier values
//also for mapping values
// enum Role {
//   'ADMIN' = 3,
//   'USER',
//   'EDITOR',
// }

// const enums = {
//   role: Role.ADMIN, //=> doing mapping value
// };

//console.log(enums.role);

//any type => avoid using this typescript data type!!!!

//union type, aliases
// type Combinable = number | string; // => creating alias for our types
//
// function combine(a: Combinable, b: Combinable): Combinable {
//   let result;
//   if (typeof a === 'number' && typeof b === 'number') {
//     result = a + b;
//   } else {
//     return a.toString() + b.toString();
//   }
//   return result;
// }
// const combineAge = combine(3, 5);
// const combineNames = combine('Anush', 'Markos');
// console.log(combineAge);
// console.log(combineNames);

//functions
// function add2(a: number, b: number): number {
//   return a + b;
// }
//
// console.log(add2(5, 7));

//interface
// class Point {
//   constructor(private x?: number, private y?: number) {}
//
//   add() {
//     const res = this.x ;
//     console.log('hi ' + res);
//   }
// }
//
// const point = new Point(3, 5);
// point.add();

// for (var i = 0; i < 5; i++) {
//   setTimeout((y)=>{
//     console.log(y)
//   }, 2000, i)
//   //console.log(i);
// }
//console.log(i)

//===================  fibonacci CPU-bound problem =================
import { fork } from 'child_process';
import path from 'path';
import { createServer, IncomingMessage, ServerResponse } from 'http';
//import fibonacci from './fibonacci';

const port = 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const url: string = req.url!;
  const baseURL = `https://${req.headers.host}/`;
  const reqUrl = new URL(url, baseURL);
  const { pathname } = reqUrl;
  console.log('Incoming request to:', req.url);

  if (pathname === '/fibonacci') {
    const n = Number(reqUrl.searchParams.get('n'));

    const childProcess = fork(path.join(__dirname, 'fibonacci-fork'));
    childProcess.on('message', msg => {
      res.writeHead(200, { 'Content-type': 'text/html' });
      return res.end(msg.toString());
    });

    childProcess.send(n);
  } else {
    res.writeHead(200, { 'Content-type': 'text/html' });
    return res.end('Hello World!');
  }
});
server.listen(port, () => console.log(`Listening on port ${port}...`));
