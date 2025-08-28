// Polyfill for call()
// 👉 Definition

// call(thisArg, ...args)

// किसी function को call करता है और this को manually set करने की सुविधा देता है।

// बाकी arguments comma-separated pass होते हैं।

// 👉 Polyfill
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis; // agar null/undefined ho to global
  const fnSymbol = Symbol();       // unique key banaya
  context[fnSymbol] = this;        // function ko object ke andar daal diya

  const result = context[fnSymbol](...args); // call function
  delete context[fnSymbol];                  // clean up

  return result;
};


// Example:

function greet(city, country) {
  console.log(`Hello ${this.name}, from ${city}, ${country}`);
}

greet.myCall({ name: "Aakash" }, "Indore", "India");
// Output: Hello Aakash, from Indore, India

// 9. Polyfill for apply()
// 👉 Definition

// apply(thisArg, [argsArray])

// Same as call, बस args array के रूप में pass होते हैं।

// 👉 Polyfill
Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  const result = context[fnSymbol](...(args || []));
  delete context[fnSymbol];

  return result;
};


// Example:

function greet(city, country) {
  console.log(`Hello ${this.name}, from ${city}, ${country}`);
}

greet.myApply({ name: "Aakash" }, ["Indore", "India"]);
// Output: Hello Aakash, from Indore, India

// 10. Polyfill for bind()
// 👉 Definition

// bind(thisArg, ...args)

// Function return करता है, लेकिन उसमें this fix हो जाता है।

// उसे later call कर सकते हैं।

// 👉 Polyfill
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};


// Example:

function greet(city, country) {
  console.log(`Hello ${this.name}, from ${city}, ${country}`);
}

const boundFn = greet.myBind({ name: "Aakash" }, "Indore");
boundFn("India");
// Output: Hello Aakash, from Indore, India