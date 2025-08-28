// 👉 Definition

// Throttle ek higher-order function hai jo ek function ko fixed interval (delay) ke andar sirf ek baar execute hone deta hai, chahe usse kitni bhi baar call karo.

// Mostly use hota hai scroll events, resize events, button click spam prevent karne ke liye.

// Example: Agar scroll event har millisecond pe fire ho raha hai → throttle use karke hum usse 1 sec me sirf ek baar chalne denge.

// 👉 Polyfill Implementation
function myThrottle(fn, delay) {
  let last = 0;

  return function (...args) {
    const now = Date.now();

    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}

// 👉 Example
function logScroll() {
  console.log("Scroll event at:", new Date().toLocaleTimeString());
}

const throttledScroll = myThrottle(logScroll, 2000);

// Agar har millisecond scroll event ho → 
// ✅ fir bhi 2 sec me sirf 1 baar chalega
window.addEventListener("scroll", throttledScroll);


// ✅ Ab aapko clear ho gaya ki debounce aur throttle me difference kya hai:

// Debounce → rukne ke baad chalega

// Throttle → fixed interval ke andar sirf ek baar chalega