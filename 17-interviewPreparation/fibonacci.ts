//=============== running CPU-bound tasks in node.js ===========
//fibonacci problem

 const fib:any= function (num: number) {
  if (num <= 1) return num;

  return fib(num - 1) + fib(num - 2);
};

export default fib;


