const longComputation = function () {
  let sum = 0;
  for (let i = 0; i < 1e5; i++) {
    sum += i;
  }
  return sum;
};

process.on('message', msg => {
  console.log(msg);
  const sum = longComputation();
  process.send(sum);
});
