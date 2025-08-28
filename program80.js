// Polyfill for Debounce
// 👉 Definition

// Debounce ek higher-order function hai jo ek function ke execution ko delay karta hai jab tak ki user usse baar-baar call karna band na kare.

// Mostly use hota hai search box, resize events, scroll events me.

// Example: agar user typing kar raha hai to har keypress pe API call na ho, balki user ruk jaaye tabhi call ho.

// 👉 Polyfill Implementation
function myDebounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer); // purana timer clear karo
    timer = setTimeout(() => {
      fn.apply(this, args); // actual fn execute karo
    }, delay);
  };
}

// 👉 Example
function searchApi(query) {
  console.log("API Call with query:", query);
}

const debouncedSearch = myDebounce(searchApi, 1000);

// Agar user fast type kare
debouncedSearch("A");
debouncedSearch("Aa");
debouncedSearch("Aak");
debouncedSearch("Aaka");
debouncedSearch("Aakash");

// ✅ Sirf last wala chalega: "API Call with query: Aakash"