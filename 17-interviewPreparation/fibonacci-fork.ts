//The 3 possible approaches for dealing with CPU-bound tasks in Node.js:
//1️⃣ Splitting up tasks with setImmediate()
//2️⃣ Spawning a child process
//3️⃣ Using worker threads

//2️⃣ Spawning a child process
const fibonacci = function(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

process.on('message', (msg: number) => {
  (<any> process).send(fibonacci(msg));
  process.exit(0);
});
