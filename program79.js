// Polyfill for Promise.all
// 👉 Definition

// Promise.all(iterable) ek promise return करता है।

// Jab iterable ke saare promises resolve ho jaate hain → ek array of results return hota hai.

// Agar koi ek promise reject ho gaya → turant reject ho jaata hai उसी error के साथ।

// 👉 Polyfill Implementation
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      // ensure it's a Promise
      Promise.resolve(p)
        .then((value) => {
          results[index] = value;
          completed++;

          // jab saare complete ho jaaye
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });

    // agar empty array diya
    if (promises.length === 0) {
      resolve([]);
    }
  });
};

// 👉 Example
const p1 = Promise.resolve(10);
const p2 = 20; // normal value bhi chalega
const p3 = new Promise((res) => setTimeout(() => res(30), 1000));

Promise.myAll([p1, p2, p3])
  .then((res) => console.log(res)) // [10, 20, 30]
  .catch((err) => console.error(err));


