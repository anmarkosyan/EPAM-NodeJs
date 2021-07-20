const cluster = require('cluster');
const cpus = require('os').cpus().length;
const http = require('http');

//================ 🔴 lecture part ==============
/*
if (cluster.isMaster) {
  console.log(`forking for ${cpus} CPUs`);

  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  Object.values(cluster.workers).forEach(worker => {
    worker.send(`Hello Worker ${worker.id}`);
  });
} else {
  require('./server');
}

 */

//============= 🔴 coding challenge =========
if (cluster.isMaster) {
  console.log('Forking for 2 CPUs');
  for (let i = 0; i < 2; i++) {
    cluster.fork();
  }
} else {
  require('./server')
}
