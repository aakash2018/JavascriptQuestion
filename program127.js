//compose एक higher-order function है जो दो या दो से अधिक functions को right-to-left order में combine करता है।

//यानी compose(f, g, h)(value) = f(g(h(value)))

//पहले अंदर के function (h) execute होता है, फिर बाहर का (g), फिर सबसे बाहर का (f)।
const add = x => x + 1;
const mult = x => x * 2;
const square = x => x * x;

const compose = (...fn) => (value) => fn.reduceRight((acc, next) => next(acc), value);
const composed = compose(add, mult,square);
console.log(composed(3));

// pipe एक higher-order function है जो दो या दो से अधिक functions को left-to-right order में combine करता है।

// यानी pipe(f, g, h)(value) = h(g(f(value)))

// पहले left-most function execute होता है, फिर उसके बाद वाला, और अंत में last वाला।

const pipe = (...fns) => (value) => fns.reduce((acc, next) => next(acc), value);
const piped = pipe(add, mult, square);
console.log(piped(3)); 
