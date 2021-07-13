//==================== 🔴 lecture part =============
//1️⃣ process
//console.log(process);
//console.log(process.args);
const events = require('events');
const args = require('minimist')(process.argv.slice(2));

console.log(args);
const logger = new events();

const users = [];
const messages = [];

logger.on('message', msg => {
  console.log(`New Message [${msg}]`);
  messages.push(msg);
});
logger.on('login', name => {
  console.log(`New User [${name}]`);
  users.push(name);
});

logger.on('getUsers', () => {
  console.log(users.join('\n'));
});

logger.on('getMessage', () => {
  console.log(messages.join('\n'));
});

if (args.message !== true && args.addUser !== true) {
  logger.emit('message', args.message);
  logger.emit('login', args.addUser);
  logger.emit('getUsers');
  logger.emit('getMessage');
} else {
  console.log('Please, enter your message or name!');
}


