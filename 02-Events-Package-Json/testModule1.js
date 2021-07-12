const events = require('events');

const myEvent = new events();
//myEvent.setMaxListeners(1);

const hello = () => console.log('hello');
myEvent.on('test', (...a) => {
  console.log('hello', a);
});

myEvent.on('test2', () => {
  console.log('test1');
});
myEvent.on('test3', () => {
  console.log('test3');
});
myEvent.on('test3', () => {
  console.log('test3');
});
myEvent.addListener('test3', hello);

myEvent.removeListener('test3', hello);
//myEvent.removeAllListeners();

myEvent.emit('test', 23, 3);
myEvent.emit('test2');
myEvent.emit('test3');
myEvent.emit('test3');
myEvent.emit('test3');
console.log(myEvent.listeners('test3'));

//1️⃣
// const logger = new events();
//
// const user = [];
// const msg3 = [];
//
// logger.on('msg', msg => {
//   console.log(msg);
//   console.log(`New Message ${msg}`);
//   msg3.push(`${msg}`);
// });
//
// logger.on('login', name => {
//   console.log(`New User ${name}`);
//   user.push(`${name}`);
// });
//
// logger.on('getUsers', () => {
//   console.log(...user);
// });
//
// logger.on('getMessage', () => {
//   console.log(...msg3);
// });
//
// logger.emit('msg', 'hi there');
// logger.emit('login', 'Anush');
// logger.emit('getUsers');
// logger.emit('getMessage');
