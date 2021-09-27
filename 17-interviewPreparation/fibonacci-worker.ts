import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

const fibonacci = function (n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

if (isMainThread) {
  module.exports = (n: number) => {
    new Promise<number>((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: n,
      });

      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', code => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });
  };
} else {
  const result = fibonacci(workerData);
  parentPort?.postMessage(result);
  process.exit(0);
}
