//const events = require('events');

//===================== 🔴 lecture part ===================
//const myEvent = new events();
//myEvent.setMaxListeners(1);
/*
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
 */
//================= 🔴 coding challenge ===================
//1️⃣
const events = require('events');

const logger = new events();

const users = [];
const messages = [];

logger.on('message', msg => {
  console.log(`New Message [${msg}]`);
  messages.push(`${msg}`);
});

logger.on('login', name => {
  console.log(`New User [${name}]`);
  users.push(`${name}`);
});

logger.on('getUsers', () => {
  console.log(users.join('\n'));
});

logger.on('getMessage', () => {
  console.log(messages.join('\n'));
});

logger.emit('message', 'hi there');
logger.emit('message', 'how are you?');
logger.emit('login', 'Anush');
logger.emit('login', 'Aram');
logger.emit('login', 'Hovhannes');
logger.emit('getUsers');
logger.emit('getMessage');
