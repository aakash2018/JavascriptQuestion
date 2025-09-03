//variadic or generic curry function
const curry = (fn) => (...args) => args.length >= fn.length ? fn(...args) : curry(fn.bind(null, ...args));

const add = (a, b, c) => a + b + c;

const multi = (a, b, c) => a * b * c;

const curriedAdd = curry(add);
console.log(curriedAdd(2)(3)(4));

const curriedMult = curry(multi);
console.log(curriedMult(2)(3,4));