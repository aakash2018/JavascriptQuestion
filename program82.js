// Polyfill for JSON.stringify
// 👉 Definition

// JSON.stringify ek JavaScript method hai jo kisi object ko JSON string me convert karta hai.

// Example:

const obj = { name: "Aakash", age: 30 };
console.log(JSON.stringify(obj)); 
// '{"name":"Aakash","age":30}'

// 👉 Simple Polyfill Implementation
function myStringify(value) {
  if (value === null) return "null";

  // Primitive types
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "number" || typeof value === "boolean") return String(value);

  // Array
  if (Array.isArray(value)) {
    const result = value.map(v => myStringify(v) || "null");
    return `[${result.join(",")}]`;
  }

  // Object
  if (typeof value === "object") {
    const result = [];
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        const val = myStringify(value[key]);
        if (val !== undefined) {
          result.push(`"${key}":${val}`);
        }
      }
    }
    return `{${result.join(",")}}`;
  }

  // Functions & undefined are skipped (like real JSON.stringify)
  return undefined;
}

// 👉 Example
console.log(myStringify({ a: 1, b: "hello", c: true }));
// {"a":1,"b":"hello","c":true}

console.log(myStringify([1, "test", false]));
// [1,"test",false]

console.log(myStringify(null));
// null


// ✅ Ye ek basic polyfill hai. Real JSON.stringify aur bhi complex cases handle karta hai (like circular references, replacer, spacing, etc.), but ye simple version kaafi hai interview aur understanding ke liye.