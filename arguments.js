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

Function.prototype.myBind1 = function(ctx) {
  const that = this;
  const bindArgs = Array.from(arguments).slice(1);
  return () => {
    const callArgs = Array.from(arguments);
    return that.apply(ctx, bindArgs.concat(callArgs));
  };
};

// Function.prototype.myBind2 = function (ctx, ...bindArgs) {
//   return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
// };
