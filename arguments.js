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

Function.prototype.myBind2 = function(ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach(num => {
        sum += num;
        // console.log(sum);
      });
      return sum;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}


Function.prototype.currySpread = function (numArgs) {
  const args = [];

  function _currySpread(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      // currySpread() ?
    } else {
      return _currySpread;
    }
  }

  return _currySpread;
};


Function.prototype.curryArgs = function (numArgs) {
  const args = [];

  function _curryArgs(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      // curryArgs() ?
    } else {
      return _curryArgs;
    }
  }

  return _curryArgs;
};
