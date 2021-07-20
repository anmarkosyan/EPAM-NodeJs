const cluster = require('cluster');
const cpus = require('os').cpus().length;

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
