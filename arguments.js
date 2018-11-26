function sum1() {
  let sum = 0;
  const args = Array.from(arguments);
  args.forEach(el => {
    sum += el;
  });
  return sum;
}


function sum2(...args) {
  let sum = 0;
  args.forEach(el => {
    sum += el;
  });
  return sum;
}
