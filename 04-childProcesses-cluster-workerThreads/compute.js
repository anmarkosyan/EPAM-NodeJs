const longComputation = function () {
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += i;
  }
  return sum;
};

process.on('message', () => {
  const sum = longComputation();
  process.send(sum);
});
