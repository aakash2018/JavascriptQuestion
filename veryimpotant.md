# 🔹 1. **Chain Calculator**

### 📝 Concept:

* **English:** A chain calculator allows method chaining — each method returns the object itself so that we can call another method on it.
* **Hindi:** Chain calculator ek aisa calculator hai jisme aap methods ko chain karke call kar sakte ho. Har method apna object return karta hai, isliye agla method use kar sakte ho.

---

### ✅ Code:

```js
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this; // return object for chaining
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  divide(num) {
    this.value /= num;
    return this;
  }

  getResult() {
    return this.value;
  }
}

// Usage
const result = new Calculator(10)
  .add(5)       // 10 + 5 = 15
  .subtract(3)  // 15 - 3 = 12
  .multiply(2)  // 12 * 2 = 24
  .divide(4)    // 24 / 4 = 6
  .getResult();

console.log(result); // 6
```

---

### 🎯 Interview Notes:

* Method chaining is possible if you `return this` from every function.
* Common in **jQuery**, **Mongoose (MongoDB)**, and **Lodash**.
* Shows **fluent API design** pattern.

---

# 🔹 2. **Promises in Sequence**

### 📝 Concept:

* **English:** Sometimes you don’t want promises to run in parallel. Instead, you want them to run **one after another** (sequentially).
* **Hindi:** Kabhi kabhi hume chahiye hota hai ki promises ek ke baad ek chale, saath me nahi. Isse hum sequence maintain karte hain.

---

### ✅ Code:

```js
// Example: delay function
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function runInSequence() {
  const res1 = await delay(1000, "First");
  console.log(res1);

  const res2 = await delay(1000, "Second");
  console.log(res2);

  const res3 = await delay(1000, "Third");
  console.log(res3);
}

runInSequence();
```

---

### 🎯 Interview Notes:

* Running in **parallel** → use `Promise.all()`.
* Running in **sequence** → use `async/await` or `reduce()`.

Alternative (reduce style):

```js
const tasks = [1, 2, 3];
tasks.reduce(
  (p, v) => p.then(() => delay(1000, v).then(console.log)),
  Promise.resolve()
);
```

---

# 🔹 3. **Pipe and Compose**

### 📝 Concept:

* **English:** Both are function combinators.

  * **Pipe:** Executes functions from **left → right**.
  * **Compose:** Executes functions from **right → left**.
* **Hindi:** Ye higher-order functions hain jo multiple functions ko combine karke ek naya function banate hain.

  * **Pipe:** Left se right.
  * **Compose:** Right se left.

---

### ✅ Code:

```js
const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;

// Pipe (left to right)
const pipe = (...fns) => (value) =>
  fns.reduce((acc, fn) => fn(acc), value);

console.log(pipe(add5, multiply2)(10)); // (10+5)*2 = 30

// Compose (right to left)
const compose = (...fns) => (value) =>
  fns.reduceRight((acc, fn) => fn(acc), value);

console.log(compose(add5, multiply2)(10)); // add5(multiply2(10)) = 25
```

---

### 🎯 Interview Notes:

* **Pipe** = `f(g(h(x)))` but reads left to right.
* **Compose** = reads right to left.
* Used in **functional programming** (React, Redux middlewares).

---

# 🔹 4. **Array Polyfills**

### 📝 Concept:

* **English:** Writing your own implementation of built-in methods like `map`, `filter`, `reduce`.
* **Hindi:** JavaScript ke array ke built-in methods (map, filter, reduce) ko khud implement karna.

---

### ✅ Code:

#### Map Polyfill:

```js
Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3].myMap(x => x * 2)); // [2,4,6]
```

#### Filter Polyfill:

```js
Array.prototype.myFilter = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log([1, 2, 3, 4].myFilter(x => x % 2 === 0)); // [2,4]
```

#### Reduce Polyfill:

```js
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

console.log([1, 2, 3].myReduce((acc, val) => acc + val, 0)); // 6
```

---

### 🎯 Interview Notes:

* Polyfills test your **understanding of array iteration**.
* Very common in **frontend interviews**.

---

# 🔹 5. **Prototype and Prototype Inheritance**

### 📝 Concept:

* **English:** Every object in JS has a hidden property `[[Prototype]]`. Objects can inherit properties and methods from their prototype.
* **Hindi:** Har JavaScript object ka ek hidden property hota hai `[[Prototype]]`. Ek object apne prototype ke methods/properties use kar sakta hai.

---

### ✅ Code:

```js
// Constructor function
function Person(name) {
  this.name = name;
}

// Add method to prototype
Person.prototype.sayHello = function() {
  console.log("Hello, " + this.name);
};

// Inheritance
function Student(name, subject) {
  Person.call(this, name); // call parent constructor
  this.subject = subject;
}

// Set prototype chain
Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function() {
  console.log(this.name + " is studying " + this.subject);
};

// Usage
const s1 = new Student("Aakash", "JavaScript");
s1.sayHello(); // Hello, Aakash
s1.study();    // Aakash is studying JavaScript
```

---

### 🎯 Interview Notes:

* `__proto__` links object to its prototype.
* Prototype chain helps with **inheritance**.
* Classes in ES6 are syntactic sugar over prototypes.

---

✅ Covered in detail:

1. Chain Calculator
2. Promises in Sequence
3. Pipe & Compose
4. Array Polyfills (map, filter, reduce)
5. Prototype & Prototype Inheritance

---

# 🔹 6. **Call, Apply, Bind**

### 📝 Concept

* **English:** These methods control how a function is executed and what `this` refers to.
* **Hindi:** Ye methods function ke andar `this` ko control karne ke liye use hote hain.

---

### ✅ Code

```js
const person = {
  name: "Aakash",
};

function greet(message, city) {
  console.log(`${message}, I am ${this.name} from ${city}`);
}

// call → pass arguments one by one
greet.call(person, "Hello", "Jaipur"); 
// Hello, I am Aakash from Jaipur

// apply → pass arguments as an array
greet.apply(person, ["Hi", "Delhi"]);  
// Hi, I am Aakash from Delhi

// bind → returns new function (can call later)
const greetLater = greet.bind(person, "Hey", "Mumbai");
greetLater(); 
// Hey, I am Aakash from Mumbai
```

---

### 🎯 Interview Notes

* **call** → immediate execution, arguments separately.
* **apply** → immediate execution, arguments as array.
* **bind** → returns new function, can execute later.

---

# 🔹 7. **Flatten Array**

### 📝 Concept

* **English:** Converting a nested array into a single-level array.
* **Hindi:** Nested array (andar array ke andar) ko ek flat single array me convert karna.

---

### ✅ Code

```js
// ES6 one-liner
let arr = [1, [2, [3, [4]]]];
console.log(arr.flat(Infinity)); // [1, 2, 3, 4]

// Recursive polyfill
function flattenArray(arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(flattenArray([1, [2, [3, 4]]])); // [1, 2, 3, 4]
```

---

### 🎯 Interview Notes

* `Array.flat(depth)` is ES10+.
* Older versions → recursion or `reduce`.

---

# 🔹 8. **Basic Debouncing**

### 📝 Concept

* **English:** Ensures a function executes only after a delay, ignoring multiple quick calls.
* **Hindi:** Agar ek function bar-bar call ho raha hai, to debounce use karke last call ke baad hi execute hota hai.

---

### ✅ Code

```js
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Usage
function search() {
  console.log("Searching...");
}

const debouncedSearch = debounce(search, 500);

debouncedSearch();
debouncedSearch();
debouncedSearch(); // Only this will run after 500ms
```

---

### 🎯 Interview Notes

* Useful in: **search boxes, window resize, scroll events**.
* Opposite concept → **Throttling**.

---

# 🔹 9. **Basic Throttling**

### 📝 Concept

* **English:** Ensures a function executes at most once within a given time frame.
* **Hindi:** Throttling ek function ko limit karta hai ki wo har fixed time me sirf ek hi bar chale.

---

### ✅ Code

```js
function throttle(fn, delay) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}

// Usage
function logScroll() {
  console.log("Scroll event");
}

window.addEventListener("scroll", throttle(logScroll, 1000));
```

---

### 🎯 Interview Notes

* Useful in **scroll, mousemove, resize events**.
* Difference from debounce:

  * **Debounce** → execute only after user stops triggering.
  * **Throttle** → execute at fixed intervals.

---

# 🔹 10. **Event Emitter**

### 📝 Concept

* **English:** A pattern where you can create, listen, and trigger custom events. Common in Node.js.
* **Hindi:** Event emitter ek aisa system hai jisme custom events banakar unhe listen aur trigger karte ho.

---

### ✅ Code

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

// Listen for event
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

// Trigger event
emitter.emit("greet", "Aakash");
// Output: Hello, Aakash
```

---

### 🎯 Interview Notes

* Core concept in **Node.js (Streams, HTTP, Socket.io)**.
* `on` → listen, `emit` → trigger.
* Can create **custom event systems** in frontend as well.

---

✅ Covered in detail (6–10):
6️⃣ Call, Apply, Bind
7️⃣ Flatten Array
8️⃣ Basic Debouncing
9️⃣ Basic Throttling
🔟 Event Emitter

---

# 🔹 11. **Debouncing Leading and Trailing Spaces**

### 📝 Concept

* **English:** Same as debounce, but with **leading** (immediate execution) and **trailing** (after delay) options.
* **Hindi:** Debounce ka advanced version jisme aap decide kar sakte ho ki function turant chale (leading) ya delay ke baad (trailing).

---

### ✅ Code

```js
function debounce(fn, delay, immediate = false) {
  let timer;
  return function (...args) {
    const callNow = immediate && !timer;

    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) fn.apply(this, args);
    }, delay);

    if (callNow) fn.apply(this, args);
  };
}

// Usage
const log = debounce(() => console.log("Called!"), 1000, true);
log(); // Runs immediately (leading)
```

---

### 🎯 Interview Notes

* **Leading:** First call runs instantly.
* **Trailing:** Only last call runs after delay.
* Common in **search box, form validation**.

---

# 🔹 12. **MapLimit**

### 📝 Concept

* **English:** Similar to `Promise.all()`, but limits the number of promises running in parallel.
* **Hindi:** Promise.all jaisa hai, par ek time me limited promises hi run karne deta hai.

---

### ✅ Code

```js
function mapLimit(arr, limit, asyncFn) {
  let results = [];
  let i = 0;

  return new Promise((resolve) => {
    function runNext() {
      if (i === arr.length) {
        return resolve(Promise.all(results));
      }
      let index = i++;
      results.push(asyncFn(arr[index]).then(() => runNext()));
    }

    for (let j = 0; j < limit; j++) runNext();
  });
}

// Example async task
function task(id) {
  return new Promise((res) =>
    setTimeout(() => {
      console.log("Task", id, "done");
      res();
    }, 1000)
  );
}

mapLimit([1, 2, 3, 4, 5], 2, task);
```

---

### 🎯 Interview Notes

* Useful when **API rate limit** or **resource constraint** is there.
* Prevents system overload.

---

# 🔹 13. **Cancelable Promise**

### 📝 Concept

* **English:** A promise that you can cancel before it resolves.
* **Hindi:** Ek aisa promise jise aap resolve hone se pehle cancel kar sako.

---

### ✅ Code

```js
function cancelablePromise(ms) {
  let timer;
  let cancel;

  const promise = new Promise((resolve, reject) => {
    timer = setTimeout(() => resolve("Done"), ms);
    cancel = () => {
      clearTimeout(timer);
      reject("Cancelled");
    };
  });

  return { promise, cancel };
}

// Usage
const { promise, cancel } = cancelablePromise(3000);

promise.then(console.log).catch(console.error);

// Cancel after 1s
setTimeout(cancel, 1000);
```

---

### 🎯 Interview Notes

* Important for **API calls** when user navigates away.
* Modern solution: **AbortController**.

---

# 🔹 14. **Typeahead Search using LRU Cache**

### 📝 Concept

* **English:** Typeahead = autocomplete suggestions while typing. Using **LRU (Least Recently Used) cache** makes search results faster by caching recent queries.
* **Hindi:** Typeahead ek search system hai jo user ke type karte hi suggestions dikhata hai. LRU cache se recent searches store hote hain, jisse fast response milta hai.

---

### ✅ Code (Simple LRU Cache)

```js
class LRUCache {
  constructor(limit = 5) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key) {
    if (!this.cache.has(key)) return null;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // move to recent
    return value;
  }

  set(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.limit) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}

// Usage
const cache = new LRUCache(3);
cache.set("js", "JavaScript result");
cache.set("py", "Python result");
console.log(cache.get("js")); // JavaScript result
```

---

### 🎯 Interview Notes

* LRU used in **search engines, browsers, caching APIs**.
* `Map` in JS preserves insertion order → makes LRU easy.

---

# 🔹 15. **Doc Comparison**

### 📝 Concept

* **English:** Compare two JSON/documents and find differences.
* **Hindi:** Do JSON objects compare karke differences nikalna.

---

### ✅ Code

```js
function compareDocs(doc1, doc2) {
  let diffs = {};
  for (let key in doc1) {
    if (doc1[key] !== doc2[key]) {
      diffs[key] = { old: doc1[key], new: doc2[key] };
    }
  }
  return diffs;
}

let docA = { name: "Aakash", age: 25 };
let docB = { name: "Aakash", age: 26 };

console.log(compareDocs(docA, docB));
// { age: { old: 25, new: 26 } }
```

---

### 🎯 Interview Notes

* Real-world use: **versioning, auditing, database sync**.
* Can go deep (nested JSON) → recursion required.

---

✅ Covered in detail (11–15):
1️⃣1️⃣ Debouncing (Leading/Trailing)
1️⃣2️⃣ MapLimit
1️⃣3️⃣ Cancelable Promise
1️⃣4️⃣ Typeahead Search + LRU Cache
1️⃣5️⃣ Doc Comparison

---

# 🔹 16. **Currying**

### 📝 Concept

* **English:** Currying is converting a function with multiple arguments into a sequence of functions, each taking a single argument.
* **Hindi:** Currying ka matlab hota hai ek function jo ek sath multiple arguments leta hai usse tod kar aise banana ki har function ek hi argument le.

---

### ✅ Code

```js
// Normal function
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6

// Curried version
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(1)(2)(3)); // 6
```

👉 Using ES6 arrow functions:

```js
const curryAdd2 = (a) => (b) => (c) => a + b + c;
console.log(curryAdd2(5)(10)(15)); // 30
```

---

### 🎯 Interview Notes

* Used in functional programming.
* Helps in **reusability** & **function composition**.
* Real-life: `sum(10)(20)` for configuration-based APIs.

---

# 🔹 17. **Execute Task in Parallel**

### 📝 Concept

* **English:** Running multiple async tasks together instead of sequentially.
* **Hindi:** Ek ke baad ek run karne ke bajay ek sath multiple async tasks run karna.

---

### ✅ Code

```js
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function parallelExecution() {
  const results = await Promise.all([
    delay(1000, "Task 1"),
    delay(2000, "Task 2"),
    delay(1500, "Task 3")
  ]);

  console.log(results); // ["Task 1", "Task 2", "Task 3"]
}

parallelExecution();
```

---

### 🎯 Interview Notes

* Tools: **Promise.all, Promise.allSettled**.
* Useful in API calls → fetch multiple data together.

---

# 🔹 18. **Find the Matching Element in the DOM**

### 📝 Concept

* **English:** Locate an element by tag, class, id, or custom attribute.
* **Hindi:** DOM ke andar kisi element ko dhoondhna (id, class, attribute ke basis pe).

---

### ✅ Code

```html
<div class="box">One</div>
<div class="box">Two</div>
<div class="box">Three</div>

<script>
  const element = document.querySelector(".box:nth-child(2)");
  console.log(element.innerText); // "Two"

  const all = document.querySelectorAll(".box");
  all.forEach(el => console.log(el.innerText));
</script>
```

---

### 🎯 Interview Notes

* Methods:

  * `getElementById`
  * `getElementsByClassName`
  * `querySelector` / `querySelectorAll`
* `querySelector` = returns first match.
* `querySelectorAll` = returns NodeList.

---

# 🔹 19. **Sort Array**

### 📝 Concept

* **English:** Sorting means arranging array elements in ascending or descending order.
* **Hindi:** Sorting ka matlab hai array ke elements ko ascending ya descending order me arrange karna.

---

### ✅ Code

```js
const nums = [5, 2, 9, 1, 7];

// Ascending
console.log(nums.sort((a, b) => a - b)); // [1,2,5,7,9]

// Descending
console.log(nums.sort((a, b) => b - a)); // [9,7,5,2,1]

// Sort strings
const names = ["Rahul", "Aakash", "Meena"];
console.log(names.sort()); // Alphabetical
```

---

### 🎯 Interview Notes

* Default `.sort()` converts to string → unexpected results.
* Always pass compare function `(a,b)=>a-b`.

---

# 🔹 20. **Object Flatten**

### 📝 Concept

* **English:** Flattening means converting nested objects into a single-level object with dot notation.
* **Hindi:** Flatten ka matlab hai ek nested object ko tod kar ek flat object banana jisme keys dot notation me likhe jaye.

---

### ✅ Code

```js
const obj = {
  name: "Aakash",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

function flatten(obj, parent = "", res = {}) {
  for (let key in obj) {
    let newKey = parent ? parent + "." + key : key;
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      flatten(obj[key], newKey, res);
    } else {
      res[newKey] = obj[key];
    }
  }
  return res;
}

console.log(flatten(obj));
/*
{
  "name": "Aakash",
  "address.city": "Delhi",
  "address.pin": 110001
}
*/
```

---

### 🎯 Interview Notes

* Very common interview question.
* Useful for **config objects** or when storing in DB.

---

✅ Covered in detail:
1️⃣6️⃣ Currying
1️⃣7️⃣ Execute Task in Parallel
1️⃣8️⃣ Find Matching DOM Element
1️⃣9️⃣ Sort Array
2️⃣0️⃣ Object Flatten

---

# 🔹 21. **Array – Dispatch Event on Push**

### 📝 Concept

* **English:** Normally, when we use `push()` in arrays, no event is triggered. But we can override `push()` to dispatch a custom event.
* **Hindi:** Jab hum `push()` use karte hain to koi event trigger nahi hota. Lekin hum `push()` ko override karke khud ka event dispatch kar sakte hain.

---

### ✅ Code

```js
const arr = [];

const handler = {
  set(target, prop, value) {
    if (prop === String(target.length)) {
      console.log("New element pushed:", value);
    }
    target[prop] = value;
    return true;
  }
};

const proxyArr = new Proxy(arr, handler);

proxyArr.push(10); // "New element pushed: 10"
proxyArr.push(20); // "New element pushed: 20"
```

---

### 🎯 Interview Notes

* Proxy or Monkey-patching can be used.
* Useful in **Reactive frameworks** (Vue, MobX).

---

# 🔹 22. **Deep Clone Object**

### 📝 Concept

* **English:** Deep clone means creating a new copy of an object including nested objects.
* **Hindi:** Deep clone ka matlab hai ek object ka bilkul naya copy banana jisme andar ke nested objects bhi copy ho.

---

### ✅ Code

```js
// Shallow Copy
const obj1 = { name: "Aakash", address: { city: "Delhi" } };
const shallow = { ...obj1 };
shallow.address.city = "Mumbai";
console.log(obj1.address.city); // "Mumbai" ❌ (changed)

// Deep Copy
const deep = JSON.parse(JSON.stringify(obj1));
deep.address.city = "Chennai";
console.log(obj1.address.city); // "Delhi" ✅
```

👉 Modern way:

```js
const deep2 = structuredClone(obj1);
```

---

### 🎯 Interview Notes

* **Shallow copy:** Only top-level copied (`Object.assign`, spread).
* **Deep copy:** Nested also copied.
* In interviews, mention **structuredClone** (modern).

---

# 🔹 23. **JSON.stringify**

### 📝 Concept

* **English:** Converts JS objects into JSON string.
* **Hindi:** JS object ko JSON string me convert karta hai.

---

### ✅ Code

```js
const user = { name: "Rahul", age: 25 };

const str = JSON.stringify(user);
console.log(str); // '{"name":"Rahul","age":25}'

const str2 = JSON.stringify(user, ["name"]);
console.log(str2); // '{"name":"Rahul"}'

const str3 = JSON.stringify(user, null, 2);
console.log(str3);
/*
{
  "name": "Rahul",
  "age": 25
}
*/
```

---

### 🎯 Interview Notes

* Takes 3 arguments: `value, replacer, space`.
* Useful in **API calls** and **localStorage**.

---

# 🔹 24. **React DOM Render**

### 📝 Concept

* **English:** `ReactDOM.render` (React 17-) or `createRoot().render()` (React 18+) is used to render React components into the DOM.
* **Hindi:** React component ko browser DOM me dikhane ke liye render karna.

---

### ✅ Code

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

---

### 🎯 Interview Notes

* Before React 18 → `ReactDOM.render(<App/>, document.getElementById('root'))`.
* After React 18 → `createRoot().render()`.
* Rendering is diffed with **Virtual DOM**.

---

# 🔹 25. **Retry Promises N Times**

### 📝 Concept

* **English:** If a promise fails, try again until it succeeds or until max retries.
* **Hindi:** Agar ek promise fail ho jaye to usse dobara try karna, maximum retries tak.

---

### ✅ Code

```js
function retry(fn, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    function attempt(n) {
      fn()
        .then(resolve)
        .catch((err) => {
          if (n === 0) reject(err);
          else {
            console.log("Retrying...");
            setTimeout(() => attempt(n - 1), delay);
          }
        });
    }
    attempt(retries);
  });
}

// Example usage
let count = 0;
retry(() => {
  return new Promise((res, rej) => {
    count++;
    count < 3 ? rej("Fail") : res("Success");
  });
}, 3).then(console.log); // "Success"
```

---

### 🎯 Interview Notes

* Common in API calls where network may fail.
* Strategy: **Retry with delay + exponential backoff**.

---

✅ Covered in detail (21–25):
2️⃣1️⃣ Array Dispatch Event on Push
2️⃣2️⃣ Deep Clone Object
2️⃣3️⃣ JSON.stringify
2️⃣4️⃣ React DOM Render
2️⃣5️⃣ Retry Promises N Times

---

# 🔹 26. **Extended Version of Event Emitter**

### 📝 Concept

* **English:** An EventEmitter allows us to create custom events. The extended version supports features like `once`, `removeListener`, etc.
* **Hindi:** EventEmitter hume apne custom events create karne deta hai. Extended version me extra features hote hain jaise `once`, `removeListener`, etc.

---

### ✅ Code

```js
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
  }

  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }

  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(l => l !== listener);
    }
  }
}

// Example
const emitter = new EventEmitter();
emitter.once("greet", (name) => console.log("Hello", name));
emitter.emit("greet", "Aakash"); // Hello Aakash
emitter.emit("greet", "Rahul");  // Won’t run again
```

---

### 🎯 Interview Notes

* Used in Node.js (`events` module).
* Useful for **pub-sub patterns**.

---

# 🔹 27. **Promise.all**

### 📝 Concept

* **English:** Runs multiple promises in parallel. Resolves only if all succeed, rejects if one fails.
* **Hindi:** Saare promises ko parallel chalata hai. Agar sab success hue tabhi resolve hoga, ek bhi fail hua to reject.

---

### ✅ Code

```js
Promise.all([
  Promise.resolve("Task 1"),
  Promise.resolve("Task 2"),
  Promise.resolve("Task 3"),
])
  .then(console.log) // ["Task 1","Task 2","Task 3"]
  .catch(console.error);
```

---

### 🎯 Interview Notes

* Best for **parallel API calls**.
* Failure in one = rejects all.

---

# 🔹 28. **Promise.race**

### 📝 Concept

* **English:** Returns the first settled (resolved/rejected) promise.
* **Hindi:** Jo pehla promise complete (resolve ya reject) hoga, wahi result milega.

---

### ✅ Code

```js
Promise.race([
  new Promise(res => setTimeout(() => res("Fast"), 1000)),
  new Promise(res => setTimeout(() => res("Slow"), 3000))
]).then(console.log); // "Fast"
```

---

### 🎯 Interview Notes

* Used when you want the **quickest response**.
* Example: Multiple APIs for redundancy.

---

# 🔹 29. **Promise.any**

### 📝 Concept

* **English:** Returns the first **fulfilled** promise (ignores rejects).
* **Hindi:** Jo pehla promise **resolve** hoga uska result return karega, reject ignore karta hai.

---

### ✅ Code

```js
Promise.any([
  Promise.reject("Fail 1"),
  Promise.reject("Fail 2"),
  Promise.resolve("Success")
]).then(console.log); // "Success"
```

---

### 🎯 Interview Notes

* If all reject → returns **AggregateError**.
* Safer than `race` when rejection is common.

---

# 🔹 30. **Promise.allSettled**

### 📝 Concept

* **English:** Waits for all promises, gives result of each (fulfilled or rejected).
* **Hindi:** Saare promises ka wait karta hai aur har ek ka result deta hai (resolve/reject dono).

---

### ✅ Code

```js
Promise.allSettled([
  Promise.resolve("Task 1"),
  Promise.reject("Task 2 Failed"),
  Promise.resolve("Task 3")
]).then(console.log);

/*
[
  { status: "fulfilled", value: "Task 1" },
  { status: "rejected", reason: "Task 2 Failed" },
  { status: "fulfilled", value: "Task 3" }
]
*/
```

---

### 🎯 Interview Notes

* Good when **all results needed** (success + failure).
* Used in logging or batch processing.

---

✅ Covered in detail (26–30):
2️⃣6️⃣ Extended EventEmitter
2️⃣7️⃣ Promise.all
2️⃣8️⃣ Promise.race
2️⃣9️⃣ Promise.any
3️⃣0️⃣ Promise.allSettled

---

# 🔹 31. **ClearAllTimeout**

### 📝 Concept

* **English:** JavaScript gives `clearTimeout(id)` to cancel one timeout, but if multiple timeouts are running, we need a utility to clear all.
* **Hindi:** JavaScript me `clearTimeout(id)` ek hi timeout ko cancel karta hai, lekin agar multiple timeouts chal rahe hain to un sab ko clear karne ke liye ek utility banana padta hai.

---

### ✅ Code

```js
// Store all timeout IDs
let timeoutIds = [];

function setCustomTimeout(fn, delay) {
  const id = setTimeout(fn, delay);
  timeoutIds.push(id);
  return id;
}

function clearAllTimeouts() {
  while (timeoutIds.length) {
    clearTimeout(timeoutIds.pop());
  }
}

// Usage
setCustomTimeout(() => console.log("Task 1"), 2000);
setCustomTimeout(() => console.log("Task 2"), 3000);

clearAllTimeouts(); // Cancels all
```

---

### 🎯 Interview Notes

* `clearTimeout(id)` → cancels single timeout.
* **Use-case:** If app has multiple background timers → clear them all (e.g. logout timer, API retry timer).

---

# 🔹 32. **Memoization**

### 📝 Concept

* **English:** Memoization is a technique to store the result of expensive function calls and return the cached result when the same inputs occur again.
* **Hindi:** Memoization ek technique hai jisme costly function ke result ko cache karke rakha jata hai taki same input dobara aaye to naya calculation na ho, seedha cached value mil jaye.

---

### ✅ Code

```js
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("From cache:", key);
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Expensive function
function slowSquare(n) {
  console.log("Computing...");
  return n * n;
}

const memoSquare = memoize(slowSquare);

console.log(memoSquare(5)); // Computing... 25
console.log(memoSquare(5)); // From cache: 25
```

---

### 🎯 Interview Notes

* Reduces repeated calculations.
* Common in **dynamic programming, React (useMemo, useCallback)**.
* Tradeoff: extra memory usage for cache.

---

# 🔹 33. **Async Progress Bar**

### 📝 Concept

* **English:** A progress bar visually shows the progress of an async task (like file upload, API call, or long computation).
* **Hindi:** Async progress bar ek visual indicator hai jo dikhata hai ki async task (jaise file upload ya API call) kitna complete hua hai.

---

### ✅ Code (Simulation)

```js
function fakeAsyncTask(duration, onProgress) {
  let completed = 0;
  const interval = setInterval(() => {
    completed += 10;
    onProgress(completed);
    if (completed >= 100) clearInterval(interval);
  }, duration / 10);
}

// Usage
fakeAsyncTask(3000, (progress) => {
  console.log(`Progress: ${progress}%`);
});
```

---

### 🎯 Interview Notes

* Useful in **file uploads, API loading states, async batch tasks**.
* Implemented with `setInterval`, `Promises`, or event listeners.
* In React/Frontend → tied to **state updates**.

---

# 🔹 34. **GroupBy Polyfill (Lodash style)**

### 📝 Concept

* **English:** `groupBy` groups elements of an array based on a given property or callback. (Lodash provides `_.groupBy`).
* **Hindi:** `groupBy` ek array ko ek property ya function ke base par groups me todta hai.

---

### ✅ Code

```js
function groupBy(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = typeof fn === "function" ? fn(item) : item[fn];
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

// Usage
const users = [
  { name: "Aakash", age: 25 },
  { name: "Rahul", age: 30 },
  { name: "Pooja", age: 25 },
];

console.log(groupBy(users, "age"));
// { "25": [{...}, {...}], "30": [{...}] }
```

---

### 🎯 Interview Notes

* `groupBy` is very common in data transformations.
* Works like SQL `GROUP BY`.
* If interviewer asks → mention Lodash provides ready-made `_.groupBy`.
---
# 🔹 35. **Subject (basic publish-subscribe)**

* Subject ek special Observable hai jo ek saath Observable + Observer dono hota hai.
* Matlab: 
  * Ye data receive bhi kar sakta hai (next() se).
  * Ye data emit bhi kar sakta hai subscribers ko.
* Iska kaam hai ek event bus ki tarah behave karna jaha multiple subscribers ko ek hi source se data milta hai.
* Kaha use hota hai?
* Jab aapko ek shared data stream banana ho jo multiple jagah use ho.
* Example: Chat app, WebSocket, Event sharing.

```
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(callback) {
    this.observers.push(callback);
  }

  next(value) {
    this.observers.forEach(cb => cb(value));
  }
}

// Example
const subject = new Subject();

subject.subscribe(val => console.log("Subscriber 1:", val));
subject.next(1);
subject.next(2);

subject.subscribe(val => console.log("Subscriber 2:", val));
subject.next(3);

Output:

User 1 got: Hello!
User 2 got: Hello!
User 1 got: How are you?
User 2 got: How are you?

```
Acha 👍 samajh gaya — aap chahte ho ki **RxJS library install kiye bina** khud apne **vanilla JavaScript** me ek chhoti implementation likhni hai, jisme `Subject`, `BehaviorSubject`, `ReplaySubject`, aur `AsyncSubject` ka concept samajh aaye.

Chaliye mai aapko ek simplified version bana ke dikhata hoon:

---
## 36. BehaviorSubject

* Last value ko store karega.
* Naye subscriber ko turant last value mil jaayegi.
* Ye Subject + last value store karta hai.
* Har naye subscriber ko immediately last value de deta hai.
* Kaha use hota hai?
* Jab aapko current state hamesha latest ke saath rakhna ho.
* Example: User ka current login status, theme setting (dark/light).

```javascript
class BehaviorSubject extends Subject {
  constructor(initialValue) {
    super();
    this.value = initialValue;
  }

  subscribe(callback) {
    callback(this.value); // pehle current value do
    super.subscribe(callback);
  }

  next(value) {
    this.value = value;
    super.next(value);
  }
}

// Example
const behaviorSubject = new BehaviorSubject(0);

behaviorSubject.subscribe(val => console.log("Subscriber 1:", val));
behaviorSubject.next(1);
behaviorSubject.next(2);

behaviorSubject.subscribe(val => console.log("Subscriber 2:", val));
behaviorSubject.next(3);
```

---

## 37. ReplaySubject

* History buffer rakhta hai aur naye subscriber ko woh history bhejta hai.
* Ye past ki values ka buffer rakhta hai.
* Har naye subscriber ko purani buffered values turant milti hain.
* Kaha use hota hai?
* Jab aapko ensure karna ho ki late subscribers bhi purana data na miss karein.
* Example: Notification system jaha user baad me aaye tab bhi purane 5 notifications dekh sake.

```javascript
class ReplaySubject extends Subject {
  constructor(bufferSize = Infinity) {
    super();
    this.bufferSize = bufferSize;
    this.history = [];
  }

  subscribe(callback) {
    this.history.forEach(val => callback(val)); // purani values pehle do
    super.subscribe(callback);
  }

  next(value) {
    this.history.push(value);
    if (this.history.length > this.bufferSize) {
      this.history.shift(); // extra values hatao
    }
    super.next(value);
  }
}

// Example
const replaySubject = new ReplaySubject(2);

replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);

replaySubject.subscribe(val => console.log("Subscriber 1:", val));
replaySubject.next(4);
```

---

## 38. AsyncSubject

* Sirf **last value** emit karega jab `complete()` call karenge.

* AsyncSubject sirf last value ko emit karta hai, wo bhi tab jab complete() call hota hai.
* Matlab jab tak stream complete nahi hoti, kuch nahi milega.
* Kaha use hota hai?
* Jab aapko sirf final result chahiye.
* Example: HTTP request (aapko sirf last response chahiye, beech ke progress nahi).

```javascript
class AsyncSubject extends Subject {
  constructor() {
    super();
    this.lastValue = undefined;
    this.isCompleted = false;
  }

  next(value) {
    this.lastValue = value;
  }

  complete() {
    this.isCompleted = true;
    super.next(this.lastValue);
  }
}

// Example
const asyncSubject = new AsyncSubject();

asyncSubject.subscribe(val => console.log("Subscriber 1:", val));
asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);

asyncSubject.subscribe(val => console.log("Subscriber 2:", val));

asyncSubject.complete();
```

---
