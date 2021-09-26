//=============== running CPU-bound tasks in node.js ===========
//fibonacci problem
//this approach will block event loop and can't handle other requests at the same time
 const fib= function (num: number):number {
  if (num <= 1) return num;

  return fib(num - 1) + fib(num - 2);
};

export default fib;


