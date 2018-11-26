function sum() {
  let sum = 0;
  const args = Array.from(arguments);
  args.forEach(el => {
    sum += el;
  });
  return sum;
}
