# Node Interview Questions & Answers (Hindi & English)
## 1. Explain the Event Loop in Node.js (Important)
**English:**  
The event loop is the core mechanism that allows Node.js to handle **asynchronous operations** in a **non-blocking way**.  
Node.js runs on a single thread, but with the event loop, it can handle thousands of concurrent operations (like requests, timers, I/O).  

- When we run code, Node.js executes synchronous tasks first.  
- Asynchronous tasks (like setTimeout, I/O, Promises) are registered in queues.  
- The event loop picks tasks from these queues in different **phases** and executes them.  

**Hindi:**  
Event loop ek aisa mechanism hai jo Node.js ko **asynchronous kaam** karne deta hai bina thread block kiye.  
Node.js single-threaded hai, fir bhi event loop ki wajah se ek hi samay me hazaro requests handle kar leta hai.  

- Pehle synchronous code chalti hai.  
- Asynchronous tasks (jaise setTimeout, I/O, Promise) queues me register hote hain.  
- Event loop un queues se tasks uthata hai aur alag-alag **phases** me execute karta hai.  

---

## 2. Explain the Internal Architecture of Node.js
**English:**  
Node.js architecture is built on **Google’s V8 engine** and **libuv library**.  
- **V8 Engine:** Compiles JavaScript into machine code for fast execution.  
- **Libuv:** Handles asynchronous I/O operations using event loop, thread pool, timers, etc.  
- **Single-threaded Model:** Main execution thread handles requests using event loop.  
- **Modules System:** Uses CommonJS modules (`require`) or ES modules (`import`).  

**Hindi:**  
Node.js ki architecture **Google V8 engine** aur **libuv library** par based hai.  
- **V8 Engine:** JavaScript ko machine code me convert karta hai fast execution ke liye.  
- **Libuv:** Asynchronous I/O operations (event loop, thread pool, timers) handle karta hai.  
- **Single-thread:** Ek main thread request handle karta hai event loop ke sath.  
- **Modules:** CommonJS (`require`) ya ES module (`import`) use karta hai.  

---

## 3. What is npm and its uses?
**English:**  
`npm` (Node Package Manager) is the default package manager for Node.js.  

**Uses of npm:**  
- Install libraries (`npm install express`).  
- Manage dependencies in `package.json`.  
- Share own packages with others (`npm publish`).  
- Version control of dependencies.  

**Hindi:**  
`npm` (Node Package Manager) Node.js ka default package manager hai.  

**npm ke uses:**  
- Libraries install karna (`npm install express`).  
- Dependencies ko manage karna `package.json` me.  
- Apne packages publish karna (`npm publish`).  
- Dependencies ka version control rakhna.  

---

## 4. Different Phases of Event Loop (Important)
**English:**  
Event loop runs in multiple **phases**:  
1. **Timers:** Executes `setTimeout`, `setInterval`.  
2. **Pending Callbacks:** Executes I/O callbacks.  
3. **Idle/Prepare:** Internal use.  
4. **Poll:** Fetch new I/O events, execute I/O callbacks.  
5. **Check:** Executes `setImmediate`.  
6. **Close Callbacks:** Executes close events (e.g., socket close).  

**Hindi:**  
Event loop ke phases:  
1. **Timers:** `setTimeout`, `setInterval` execute hote hain.  
2. **Pending Callbacks:** I/O ke callbacks execute hote hain.  
3. **Idle/Prepare:** Internal phase hai.  
4. **Poll:** Naye I/O events uthata hai aur callbacks execute karta hai.  
5. **Check:** `setImmediate` run hota hai.  
6. **Close Callbacks:** Socket ya handle close hone par execute hota hai.  

---

## 5. Execution Flow of Promise, async/await, setTimeout, setImmediate, process.nextTick() (Important)
**English:**  
- **process.nextTick():** Runs before event loop continues (highest priority).  
- **Promises / async-await:** Executed in **microtask queue**, after current execution.  
- **setTimeout:** Executes in **timer phase** after given delay.  
- **setImmediate:** Executes in **check phase** after poll phase.  

**Order (generally):** `process.nextTick` → `Promise` → `setTimeout` → `setImmediate`.  

**Hindi:**  
- **process.nextTick():** Event loop continue hone se pehle run hota hai (sabse pehle).  
- **Promise/async-await:** **Microtask queue** me chalta hai current execution ke baad.  
- **setTimeout:** Timer phase me run hota hai delay ke baad.  
- **setImmediate:** Poll phase ke baad check phase me run hota hai.  

**Order:** `process.nextTick` → `Promise` → `setTimeout` → `setImmediate`.  

---

## 6. Purpose of package.json File in Node.js
**English:**  
- Defines project metadata (name, version, description).  
- Manages dependencies (runtime & dev).  
- Contains scripts (start, test, build).  
- Helps in versioning and sharing project.  

**Hindi:**  
- Project ke details (name, version, description) store karta hai.  
- Dependencies manage karta hai (runtime aur dev).  
- Scripts (start, test, build) rakhta hai.  
- Versioning aur project share karne me help karta hai.  

---

## 7. What is HTTP module and how to create server with it?
**English (Code Example):**  
```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello World from HTTP Server!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
````

**Hindi:**
`http` module ek built-in module hai jo Node.js me server create karne ke liye use hota hai.
Upar code me ek simple HTTP server banaya gaya hai jo "Hello World" return karta hai.

---

## 8. Secure Server Setup using Express and HTTPS

**English (Code Example):**

```js
const fs = require("fs");
const https = require("https");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Secure Server with HTTPS"));

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};

https.createServer(options, app).listen(3000, () => {
  console.log("Secure server running at https://localhost:3000");
});
```

**Hindi:**
Express ke sath `https` module use karke secure server banate hain.
Iske liye SSL certificate (`key.pem` aur `cert.pem`) ki jarurat hoti hai.

---

## 9. How to Update Existing npm Packages

**English:**

* Update a single package:

  ```bash
  npm update package-name
  ```
* Update all packages:

  ```bash
  npm update
  ```
* Check outdated:

  ```bash
  npm outdated
  ```

**Hindi:**

* Ek package update karne ke liye: `npm update package-name`
* Sabhi packages update karne ke liye: `npm update`
* Purane versions check karne ke liye: `npm outdated`

---

## 10. Global Objects in Node.js

**English:**
Some global objects in Node.js:

* `__dirname` → Directory name of current module.
* `__filename` → File name of current module.
* `process` → Provides info about running Node.js process.
* `Buffer` → For handling binary data.
* `global` → Like `window` in browser.
* `console` → For logging.

**Hindi:**
Node.js ke kuch global objects:

* `__dirname` → Current module ka folder name.
* `__filename` → Current module ka file name.
* `process` → Node.js process ka info deta hai.
* `Buffer` → Binary data handle karne ke liye.
* `global` → Browser ke `window` ki tarah.
* `console` → Logging ke liye.

---
Perfect 👍
Now I’ll **replace the old answers (Q1–Q10)** with the **next 10 (Q11–Q20)** in the same `README.md`.
This way your file is always clean and only contains 10 answers at a time.

---

## 11. Explain Stream and Buffer and their Difference
**English:**  
- **Stream:** A stream is a sequence of data that is read or written in chunks instead of loading all at once. Types: Readable, Writable, Duplex, Transform. Example: reading a large file line by line.  
- **Buffer:** A temporary storage used for holding binary data before processing. Example: When receiving data from a stream, it’s stored in buffers first.  

**Difference:**  
- Stream is like a pipe, buffer is like a bucket.  
- Stream handles continuous flow, buffer stores fixed-size chunks.  

**Hindi:**  
- **Stream:** Data ko ek sath load karne ki bajaye chunks me read/write karta hai. Types hote hain: Readable, Writable, Duplex, Transform. Example: Badi file line by line read karna.  
- **Buffer:** Ek temporary storage hai jo binary data hold karta hai. Example: Stream se aane wala data pehle buffer me store hota hai.  

**Difference:**  
- Stream ek pipe jaisa hai, buffer ek balti jaisa.  
- Stream continuous data handle karta hai, buffer fixed-size chunks store karta hai.  

---

## 12. What is Microtask and Macrotask in Node.js (Important)
**English:**  
- **Microtask:** High-priority tasks executed immediately after the current operation. Examples: `process.nextTick`, `Promise.then()`.  
- **Macrotask:** Lower priority, executed in event loop phases. Examples: `setTimeout`, `setInterval`, `setImmediate`, I/O callbacks.  

**Order of execution:** Microtasks always run before macrotasks.  

**Hindi:**  
- **Microtask:** High-priority tasks jo current operation ke baad turant run hote hain. Example: `process.nextTick`, `Promise.then()`.  
- **Macrotask:** Thoda low priority hote hain aur event loop ke phases me run hote hain. Example: `setTimeout`, `setInterval`, `setImmediate`.  

**Order:** Microtask hamesha Macrotask se pehle run hota hai.  

---

## 13. Explain Piping the Data between Streams
**English:**  
Piping is a way to **connect streams** so that the output of one stream becomes the input of another.  

Example: Reading a file and writing it into another:  
```js
const fs = require("fs");
const r = fs.createReadStream("input.txt");
const w = fs.createWriteStream("output.txt");
r.pipe(w);
````

This reads data chunk by chunk and writes directly, without loading the whole file in memory.

**Hindi:**
Piping ka matlab hai ek stream ka output dusre stream ka input ban jaye.

Example: File read karke dusri file me likhna:

```js
r.pipe(w);
```

Isse pura data memory me load nahi hota, sirf chunks ke form me transfer hota hai.

---

## 14. Features of Express.js

**English:**

* Simple & lightweight web framework.
* Middleware support.
* Routing system.
* Support for REST APIs.
* Template engines support.
* Easy integration with databases.

**Hindi:**

* Simple aur lightweight web framework hai.
* Middleware ka support deta hai.
* Routing system available hai.
* REST API banane ke liye perfect.
* Template engines support karta hai.
* Databases ke sath easy integration.

---

## 15. What happens if we pass parameter to next() inside Middleware?

**English:**
In Express, if you call `next(error)`, it will skip all remaining middleware and go directly to the **error-handling middleware**.

**Hindi:**
Express me agar `next(error)` pass karte ho to normal middleware skip ho jata hai aur seedha **error-handling middleware** execute hota hai.

---

## 16. How can we jump from one middleware to another skipping some?

**English:**

* Normally, middleware are executed in sequence.
* To skip some middleware, you can **control the flow** using conditions:

```js
app.use((req, res, next) => {
  if (req.path === "/skip") return next("route"); 
  next();
});
```

`next("route")` skips to the next route handler directly.

**Hindi:**

* Middleware normally sequence me run hote hain.
* Kuch skip karne ke liye condition lagate hain.
* `next("route")` use karne par wo current chain skip karke agle route handler par chala jata hai.

---

## 17. Difference between PATCH and PUT API (Important)

**English:**

* **PUT:** Replaces the entire resource with new data.
* **PATCH:** Updates only specific fields of the resource.

**Example:**

* PUT → Update full user profile.
* PATCH → Update only user’s email.

**Hindi:**

* **PUT:** Pura resource replace kar deta hai.
* **PATCH:** Sirf specified fields update karta hai.

**Example:**

* PUT → Pura user profile update.
* PATCH → Sirf email update.

---

## 18. Explain Middleware Concept in Node.js (Important)

**English:**
Middleware are **functions that run between the request and response**. They can modify request, add data, handle errors, or decide flow.

Types:

* Application-level middleware
* Router-level middleware
* Error-handling middleware
* Built-in middleware (`express.json()`)

**Hindi:**
Middleware wo **functions hote hain jo request aur response ke beech me run karte hain**. Ye request modify kar sakte hain, data add karte hain, errors handle karte hain.

Types:

* Application-level
* Router-level
* Error-handling
* Built-in (`express.json()`)

---

## 19. How to Create Optional Path API Endpoints in Express.js

**English (Code Example):**

```js
app.get("/user/:id?", (req, res) => {
  res.send(req.params.id ? `User ID: ${req.params.id}` : "No User ID");
});
```

Here `:id?` makes the parameter optional.

**Hindi:**
Express me optional path parameter banane ke liye `?` use karte hain.

Example: `/user` aur `/user/101` dono chalega.

---

## 20. Explain Error Handling Concept in Express.js (Important)

**English:**
In Express, error handling is done using **error-handling middleware** with 4 parameters:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

If you pass `next(error)`, it will go to this middleware.

**Hindi:**
Express me error handle karne ke liye **error-handling middleware** banate hain jisme 4 parameters hote hain: `(err, req, res, next)`.
Agar `next(error)` call karte ho to control is middleware me aa jata hai.

---

## 21. What is JWT and explain the structure of JWT token (Important)
**English:**  
JWT (JSON Web Token) is a compact, URL-safe way of securely transmitting information between parties. It is widely used for authentication.  

**Structure:**  
`header.payload.signature`  
- **Header:** Contains token type & signing algorithm (e.g., HS256).  
- **Payload:** Contains claims (user info, roles, expiry time).  
- **Signature:** Ensures integrity by signing header+payload with secret key.  

**Hindi:**  
JWT (JSON Web Token) ek secure aur compact format hai jo authentication ke liye use hota hai.  

**Structure:**  
`header.payload.signature`  
- **Header:** Token type aur algorithm rakhta hai.  
- **Payload:** User details, roles, expiry.  
- **Signature:** Header+Payload ko secret key se sign karta hai jisse tampering na ho.  

---

## 22. How can we modify the signature of JWT? (Important)
**English:**  
You **cannot directly modify** JWT signature. If you change the payload or header manually, the signature becomes invalid.  
To create a valid modified token, you must **re-sign with the secret key**.  

**Hindi:**  
JWT ka signature directly modify nahi kar sakte. Agar payload ya header change karoge to signature invalid ho jayega.  
Valid token banane ke liye secret key se dobara sign karna padta hai.  

---

## 23. What is Authentication and Authorization? (Important)
**English:**  
- **Authentication:** Verifying *who* the user is (login with username/password).  
- **Authorization:** Checking *what* the user is allowed to do (roles, permissions).  

**Example:**  
- Authentication → User logs in with email & password.  
- Authorization → User with role "admin" can delete users, but "editor" cannot.  

**Hindi:**  
- **Authentication:** Pata lagana ki user kaun hai (username/password se login).  
- **Authorization:** Pata lagana ki user kya karne ka permission rakhta hai (role/permission).  

**Example:**  
- Authentication → User login kare.  
- Authorization → Sirf admin user delete kar sake, editor nahi.  

---

## 24. Implement Role-based and Permission-based Access Control in Express.js
**English (Code Example):**  
```js
function authorize(roles = []) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send("Forbidden");
    }
    next();
  };
}

// Usage
app.get("/admin", authorize(["admin"]), (req, res) => {
  res.send("Welcome Admin");
});
````

**Hindi:**
Express me RBAC implement karne ke liye middleware banate hain jo user ke role check kare. Agar role allowed hai to access milta hai, warna `403 Forbidden`.

---

## 25. Explain in Detail Best Practices of API

**English:**

* Use proper HTTP methods (GET, POST, PUT, PATCH, DELETE).
* Follow RESTful principles.
* Use versioning (`/api/v1/`).
* Input validation & sanitization.
* Proper error handling with status codes.
* Authentication & Authorization.
* Rate limiting & logging.

**Hindi:**

* Sahi HTTP methods use karo.
* RESTful design follow karo.
* Versioning karo (`/api/v1/`).
* Input validation & sanitization karo.
* Error handling aur status code sahi rakho.
* Authentication & Authorization implement karo.
* Rate limiting aur logging use karo.

---

## 26. Explain Input Validation and Data Sanitization in Express.js

**English:**

* **Validation:** Ensures input is correct (e.g., email format, password length).
* **Sanitization:** Cleans input to prevent attacks (e.g., removing `<script>` tags).

**Example (express-validator):**

```js
const { body } = require("express-validator");

app.post("/signup", [
  body("email").isEmail(),
  body("password").isLength({ min: 6 })
], (req, res) => {
  res.send("Validated!");
});
```

**Hindi:**

* **Validation:** Input sahi format me hai ya nahi check karna.
* **Sanitization:** Input ko clean karna taaki attack na ho.

Example: `express-validator` se email check aur password length validate kar sakte hain.

---

## 27. Explain the Concept of Rate Limiting in Express.js

**English:**
Rate limiting is used to **control the number of requests** a client can make to an API in a specific time. Prevents abuse (DDoS, brute-force attacks).

**Example (express-rate-limit):**

```js
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({ windowMs: 1*60*1000, max: 5 });
app.use(limiter);
```

This allows max 5 requests per minute per client.

**Hindi:**
Rate limiting ek tarika hai jisme ek client ek fixed time me limited requests hi bhej sakta hai. Ye API ko DDoS aur brute-force attack se bachata hai.

---

## 28. Explain Logging and Monitoring in Node.js Applications

**English:**

* **Logging:** Recording system events (errors, requests, responses). Tools: `winston`, `morgan`.
* **Monitoring:** Tracking performance (CPU, memory, errors). Tools: `PM2`, `NewRelic`, `Datadog`.

**Best practice:** Centralized logging + dashboards for monitoring.

**Hindi:**

* **Logging:** Events record karna (errors, requests). Tools: `winston`, `morgan`.
* **Monitoring:** Application ki health aur performance track karna. Tools: `PM2`, `Datadog`.

Best practice: Centralized logs aur monitoring dashboards.

---

## 29. Difference between Stateless and Stateful API

**English:**

* **Stateless API:** Does not store client data on server. Each request is independent (REST APIs).
* **Stateful API:** Maintains client session on server (traditional web apps).

**Hindi:**

* **Stateless API:** Server client ka data store nahi karta, har request independent hoti hai. Example: REST API.
* **Stateful API:** Server client ka session store karta hai. Example: old style login sessions.

---

## 30. How to Achieve State Management in Node.js Applications

**English:**
Options:

* **JWT tokens (stateless).**
* **Session + cookies (stateful).**
* **Redis session store (scalable).**
* **Database-based state management.**

**Hindi:**
Node.js me state management ke tarike:

* **JWT tokens (stateless).**
* **Session + cookies (stateful).**
* **Redis session store (scalable).**
* **Database ke through state save karna.**

---

## 31. How do you Scale Node.js Application using Cluster Module
**English:**  
Node.js is single-threaded, but you can use the **cluster module** to utilize multiple CPU cores.  
- Each worker process handles requests independently.  
- The master process distributes connections to workers.  
- Improves performance for high traffic.  

**Example:**  
```js
const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  http.createServer((req, res) => {
    res.end("Hello from worker " + process.pid);
  }).listen(3000);
}
````

**Hindi:**
Node.js ek thread me chalta hai, lekin cluster module use karke multiple CPU cores ka use kar sakte ho.

* Har worker ek process hota hai jo request handle karta hai.
* Master process connections ko distribute karta hai.
* Isse high traffic handle karna easy ho jata hai.

---

## 32. What is a Worker Thread? How does it handle CPU-intensive tasks?

**English:**

* **Worker threads** are used for **parallel execution** of CPU-heavy tasks (like image processing, cryptography).
* Unlike cluster, worker threads share memory.

**Example:**

```js
const { Worker } = require("worker_threads");

new Worker("./worker.js", { workerData: { number: 10 } });
```

**Hindi:**

* **Worker threads** ka use CPU-heavy tasks ko parallel me chalane ke liye hota hai.
* Cluster alag process banata hai, lekin worker threads memory share karte hain.

---

## 33. Explain Concurrency and Parallelism for Async Tasks

**English:**

* **Concurrency:** Multiple tasks make progress at the same time (but not necessarily simultaneously). Node.js uses event loop for concurrency.
* **Parallelism:** Multiple tasks run at the exact same time (multi-core, worker threads).

**Hindi:**

* **Concurrency:** Ek hi samay par multiple tasks progress karte hain (jaise Node.js event loop).
* **Parallelism:** Ek hi samay par multiple tasks run hote hain (multi-core, worker threads).

---

## 34. How can you Optimize Database Queries

**English:**

* Use proper indexes.
* Avoid `SELECT *`, fetch only needed fields.
* Use query caching (Redis).
* Avoid N+1 queries with joins/aggregation.
* Use pagination for large datasets.

**Hindi:**

* Indexes sahi lagao.
* `SELECT *` avoid karo, sirf required fields lo.
* Query caching (Redis) use karo.
* N+1 queries avoid karo.
* Large data ke liye pagination lagao.

---

## 35. What is Redis Database? Explain its Uses

**English:**
Redis is an **in-memory key-value database**.
**Uses:**

* Caching frequently accessed data.
* Session storage.
* Message queues (Pub/Sub).
* Real-time analytics (leaderboards, counters).

**Hindi:**
Redis ek **in-memory key-value database** hai.
**Uses:**

* Frequently accessed data cache karna.
* Sessions store karna.
* Message queue (Pub/Sub).
* Real-time analytics.

---

## 36. How to Increase Performance of Node.js Application

**English:**

* Use clustering / worker threads.
* Use caching (Redis).
* Optimize database queries.
* Use gzip compression.
* Load balancing.
* Use async/await instead of blocking code.

**Hindi:**

* Clustering ya worker threads use karo.
* Redis caching lagao.
* Database queries optimize karo.
* gzip compression use karo.
* Load balancer lagao.
* Async/await use karo, blocking code avoid karo.

---

## 37. What is Profiling in Node.js

**English:**
Profiling means **analyzing performance** of Node.js app (CPU usage, memory leaks, slow functions).

Tools:

* Chrome DevTools
* Node.js `--inspect`
* Clinic.js

**Hindi:**
Profiling ka matlab hai **application ki performance analyze karna** (CPU usage, memory leaks, slow functions).

Tools: Chrome DevTools, `--inspect`, Clinic.js

---

## 38. What is Connection Pooling for Database

**English:**
Connection pooling means **reusing database connections** instead of creating new ones for every request.

**Benefits:**

* Faster response.
* Reduced overhead.
* Better scalability.

**Hindi:**
Connection pooling ka matlab hai ki har request ke liye nayi connection banane ki bajaye purani connections ko reuse karna.

**Benefits:**

* Fast response.
* Overhead kam.
* Scalability improve hoti hai.

---

## 39. Middleware for Role-Based Access Control (RBAC) in Node.js

**English (Code Example):**

```js
function rbac(roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send("Forbidden");
    }
    next();
  };
}

app.get("/admin", rbac(["admin"]), (req, res) => {
  res.send("Admin Access Granted");
});
```

**Hindi:**
RBAC ke liye middleware banate hain jo user ka role check karta hai. Agar role allowed hai to access milta hai, warna `403 Forbidden`.

---

## 40. Integration of OAuth2.0 for Third-Party Authentication in Node.js

**English:**
OAuth2.0 allows users to log in using third-party providers like Google, GitHub, Facebook.

**Steps:**

1. Register app with provider (get Client ID & Secret).
2. Use library (`passport.js`, `simple-oauth2`).
3. Redirect user to provider for login.
4. Provider sends access token.
5. Use token to access user profile / resources.

**Hindi:**
OAuth2.0 ek protocol hai jisme user third-party providers (Google, GitHub, Facebook) se login kar sakta hai.

**Steps:**

1. App ko provider ke sath register karo.
2. Library (`passport.js`) use karo.
3. User ko provider ke login page par bhejo.
4. Provider token deta hai.
5. Token ka use karke user data access hota hai.

---
## 41. Explain WebSockets in Node.js
**English:**  
- WebSocket provides **full-duplex communication** between client and server.  
- Unlike HTTP, it remains open and allows real-time communication (chat apps, stock updates, multiplayer games).  

**Example:**  
```js
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", ws => {
  ws.on("message", msg => console.log("Received:", msg));
  ws.send("Hello Client!");
});
````

**Hindi:**
WebSocket ek **two-way communication protocol** hai jo client aur server ke beech real-time data exchange allow karta hai.
Ye chat app, games aur live updates me use hota hai.

---

## 42. Difference between WebSocket and Socket.IO

**English:**

* **WebSocket:** Browser API, provides low-level real-time communication.
* **Socket.IO:** Library built on top of WebSocket, adds features like auto-reconnection, rooms, event-based communication.

**Hindi:**

* **WebSocket:** Low-level protocol hai, real-time communication ke liye.
* **Socket.IO:** WebSocket ke upar bani library hai jo extra features (reconnect, rooms, events) deti hai.

---

## 43. What are Streams in Node.js?

**English:**
Streams handle **data in chunks** instead of loading entire data in memory.
Types:

* Readable (fs.createReadStream)
* Writable (fs.createWriteStream)
* Duplex (both)
* Transform (modify data in between)

**Hindi:**
Streams ka use large data ko **chhote-chhote parts** me process karne ke liye hota hai.
Types: Readable, Writable, Duplex, Transform.

---

## 44. What is the difference between Stream and Buffer

**English:**

* **Buffer:** Temporary storage of data before processing.
* **Stream:** Continuous flow of data in chunks.

**Example:** Watching a YouTube video = Stream, while downloading full video before playing = Buffer.

**Hindi:**

* **Buffer:** Data ko temporarily store karta hai.
* **Stream:** Data ko chhote parts me continuously bhejta hai.

Example: YouTube video = Stream, pura download karke dekhna = Buffer.

---

## 45. What is CORS in Node.js

**English:**
CORS = Cross-Origin Resource Sharing.
It defines whether a resource from one domain can be accessed by another domain.

**Example:**

```js
const cors = require("cors");
app.use(cors({ origin: "http://example.com" }));
```

**Hindi:**
CORS ka matlab hai ek domain ka resource dusre domain se access ho sakta hai ya nahi.

---

## 46. How do you implement Rate Limiting in Node.js

**English:**
Rate limiting prevents abuse (like too many requests from one user).

**Example:** Using `express-rate-limit`:

```js
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 5 });
app.use(limiter);
```

**Hindi:**
Rate limiting ka use spamming aur abuse rokne ke liye hota hai.
Ek time window me ek user limited requests kar sakta hai.

---

## 47. How do you handle HTTPS in Node.js

**English:**

* Use `https` module in Node.js.
* Need SSL certificate (public + private key).

**Example:**

```js
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};

https.createServer(options, (req, res) => {
  res.end("Secure Server");
}).listen(443);
```

**Hindi:**
HTTPS ke liye SSL certificate chahiye.
Node.js me `https` module use karke secure server banate hain.

---

## 48. Explain Helmet.js and its Uses

**English:**
Helmet.js is a security middleware for Express.
It sets HTTP headers to protect app from vulnerabilities (XSS, clickjacking).

**Example:**

```js
const helmet = require("helmet");
app.use(helmet());
```

**Hindi:**
Helmet.js ek middleware hai jo Express apps ko secure banata hai by setting HTTP headers (XSS, clickjacking se protection).

---

## 49. Explain PM2 and its Benefits

**English:**
PM2 is a **process manager** for Node.js.

* Keeps app alive (auto restart on crash).
* Load balancing.
* Monitoring & logging.

**Command:**

```bash
pm2 start app.js -i max
```

**Hindi:**
PM2 ek **process manager** hai jo Node.js apps ko manage karta hai.

* Crash hone par restart karta hai.
* Load balancing deta hai.
* Monitoring aur logs deta hai.

---

## 50. What is gRPC and how can you use it in Node.js

**English:**

* gRPC = Google Remote Procedure Call.
* Uses HTTP/2 and Protocol Buffers (faster than REST).
* Suitable for microservices.

**Example (server):**

```js
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("service.proto");
const grpcObject = grpc.loadPackageDefinition(packageDef);

const server = new grpc.Server();
server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});
```

**Hindi:**
gRPC ek fast communication protocol hai jo **HTTP/2 aur Protocol Buffers** use karta hai.
Ye microservices ke liye REST se fast hota hai.

---
## 51. What is REPL in Node.js?
**English:**  
REPL = Read, Eval, Print, Loop.  
It is a CLI (command line tool) that allows you to quickly test JavaScript code.  

- **Read:** User input is read.  
- **Eval:** Code is evaluated.  
- **Print:** Result is printed.  
- **Loop:** Process repeats.  

**Hindi:**  
REPL ek command-line tool hai jo JavaScript ko test karne ke liye hota hai.  
Ye **Read → Eval → Print → Loop** process follow karta hai.  

---

## 52. What are child processes in Node.js?
**English:**  
Child processes allow you to run other programs/scripts from your Node.js application.  

Methods:  
- `exec` → run command, buffer output.  
- `spawn` → stream output.  
- `fork` → spawn new Node.js process.  

**Hindi:**  
Child processes ka use Node.js ke andar dusre program run karne ke liye hota hai.  
Example: `exec`, `spawn`, `fork`.  

---

## 53. What is the difference between spawn and fork in Node.js?
**English:**  
- **spawn:** Launches a new process to run any command.  
- **fork:** Special type of spawn, only for running new Node.js processes, and has communication channel with parent.  

**Hindi:**  
- **spawn:** Kisi bhi command ko run karne ke liye.  
- **fork:** Sirf Node.js script run karne ke liye + parent ke saath communication channel hota hai.  

---

## 54. What is middleware in Express.js?
**English:**  
Middleware is a function that has access to `req`, `res`, and `next`.  
It is used for:  
- Authentication  
- Logging  
- Error handling  

**Hindi:**  
Middleware ek function hai jise `req`, `res` aur `next` milta hai.  
Iska use authentication, logging, aur error handling ke liye hota hai.  

---

## 55. How to handle errors in Express.js?
**English:**  
Use error-handling middleware (with 4 arguments).  

**Example:**  
```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
````

**Hindi:**
Error handling ke liye Express me ek middleware banate hain jisme **4 arguments** hote hain (`err, req, res, next`).

---

## 56. What is clustering in Node.js?

**English:**
Node.js runs in a single thread. To utilize multiple CPU cores, we use **clustering**.
It creates multiple worker processes.

**Hindi:**
Node.js single-threaded hota hai. Multiple CPU use karne ke liye **clustering** kiya jata hai jo multiple worker processes banata hai.

---

## 57. How does Node.js handle multithreading if it is single-threaded?

**English:**

* Main thread = single-threaded (event loop).
* Heavy tasks (I/O, file system, crypto, DNS) handled by **libuv thread pool** in background.

**Hindi:**
Node.js single-threaded lagta hai, lekin heavy tasks **libuv thread pool** ke threads handle karte hain.

---

## 58. What is the difference between process and thread?

**English:**

* **Process:** Independent execution unit with its own memory.
* **Thread:** Lightweight unit inside a process, shares memory.

**In Node.js:**

* Each Node process = one instance.
* Worker threads = multiple threads in one process.

**Hindi:**

* **Process:** Apna memory space ke sath alag unit.
* **Thread:** Process ke andar chhota unit jo memory share karta hai.

---

## 59. What is an event emitter in Node.js?

**English:**
EventEmitter is a class in Node.js that allows objects to emit and listen to events.

**Example:**

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", () => console.log("Hello!"));
emitter.emit("greet");
```

**Hindi:**
EventEmitter ek class hai jo events ko **emit** aur **listen** karne ke liye use hoti hai.

---

## 60. What is the difference between readFile and createReadStream?

**English:**

* **readFile:** Loads the whole file into memory → not good for large files.
* **createReadStream:** Reads file in chunks (streaming) → memory efficient.

**Hindi:**

* **readFile:** Pura file ek sath memory me load karta hai.
* **createReadStream:** File ko chhote-chhote chunks me stream karke read karta hai.

---

## 61. Implement a refresh token mechanism for JWT authentication in Node.js

**English:**

**Concept in short:** Use short-lived *access tokens* (JWT) for API calls and long-lived *refresh tokens* to obtain new access tokens when the old one expires. Refresh tokens must be stored and revocable (DB or Redis) and sent securely (httpOnly cookie recommended).

**Best practices:**

* Keep access tokens short-lived (e.g., 5–15 minutes).
* Keep refresh tokens long-lived (days/weeks) but rotatable and revocable.
* Store refresh tokens server-side (DB or Redis) — store a hashed value, not the raw token.
* Use `httpOnly` + `Secure` cookie for refresh token or store server-side and send only a cookie ID.
* Rotate refresh tokens on every use (issue new refresh token and invalidate the old one).
* On logout, delete stored refresh token.

**Minimal code (Express + jsonwebtoken):**

```js
// NOTE: simplified for readability — adapt to your project structure
const express = require('express');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
// pretend DB functions
const { saveRefreshHash, findRefreshHash, deleteRefreshHash } = require('./store');

const app = express();
app.use(express.json());

const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

function signAccess(payload){
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: '10m' });
}
function signRefresh(payload){
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: '30d' });
}

function hashToken(token){
  return crypto.createHash('sha256').update(token).digest('hex');
}

// Login endpoint — issue tokens
app.post('/login', async (req, res) => {
  // validate user credentials here...
  const user = { id: 'userId123', role: 'user' };
  const accessToken = signAccess({ sub: user.id, role: user.role });
  const refreshToken = signRefresh({ sub: user.id });

  const refreshHash = hashToken(refreshToken);
  await saveRefreshHash(user.id, refreshHash); // store hashed refresh token

  // send refresh token as httpOnly secure cookie
  res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'Strict' });
  res.json({ accessToken });
});

// Refresh endpoint — rotate & issue new access token
app.post('/token', async (req, res) => {
  const token = req.cookies?.refreshToken;
  if (!token) return res.status(401).send('Missing refresh token');

  try {
    const payload = jwt.verify(token, REFRESH_SECRET);
    const storedHash = await findRefreshHash(payload.sub);
    if (!storedHash) return res.status(403).send('Refresh token revoked');

    if (storedHash !== hashToken(token)) return res.status(403).send('Token mismatch');

    // rotate: issue new refresh token
    const newRefresh = signRefresh({ sub: payload.sub });
    await saveRefreshHash(payload.sub, hashToken(newRefresh));

    const newAccess = signAccess({ sub: payload.sub });
    res.cookie('refreshToken', newRefresh, { httpOnly: true, secure: true, sameSite: 'Strict' });
    res.json({ accessToken: newAccess });
  } catch (err) {
    return res.status(401).send('Invalid refresh token');
  }
});

// Logout: revoke refresh token
app.post('/logout', async (req, res) => {
  const token = req.cookies?.refreshToken;
  if (token){
    try{
      const payload = jwt.verify(token, REFRESH_SECRET);
      await deleteRefreshHash(payload.sub);
    }catch(e){}
  }
  res.clearCookie('refreshToken');
  res.sendStatus(204);
});

app.listen(3000);
```

**Security notes:**

* Hash refresh tokens in DB (so if DB leaks, attacker cannot reuse raw tokens).
* Consider storing refresh token metadata (userAgent, IP) to detect anomalies.
* Use secure cookies for browsers; for mobile/third-party clients, send refresh tokens over TLS and store securely.

**Hindi:**

**सार:** Access token छोटी expiry के साथ रखें और refresh token लंबी expiry के लिए रखें। Refresh tokens को server-side स्टोर और revoke-able रखें (DB/Redis) — raw token की बजाय उसका hash स्टोर करें।

**Best practices:**

* Access token 5–15 मिनट रखें।
* Refresh token को rotate करें — हर refresh पर नया token बनाएँ और पुराना invalidate करें।
* Logout पर refresh token हटाएँ।
* ब्राउज़र में refresh token `httpOnly` और `Secure` cookie में भेजना बेहतर है।

---

## 62. Role of indexes in performance optimization (Important)

**English:**

**Why indexes matter:**

* Indexes let the database find documents quickly without scanning the whole collection (avoid collection scan).
* They are like the index of a book — map keys to locations.

**Common index types in MongoDB:**

* Single-field index: `{ field: 1 }` or `{ field: -1 }`.
* Compound index: `{ a: 1, b: -1 }` (order matters).
* Multikey index: for array fields.
* Text index: for text search.
* TTL index: automatic expiration.
* Hashed index: for sharding/hash-based lookups.

**Index design tips:**

* Prefer high-cardinality/selective fields in indexes.
* Put `$match` fields first in compound indexes.
* Use covering indexes (index contains all fields used in query + projection) to avoid fetching documents.
* Avoid indexing low-cardinality fields (e.g., boolean) unless used with other selective fields.
* Keep index count reasonable — indexes slow writes and use RAM.

**How to check usage:**

* Use `explain()` and look at `executionStats.totalDocsExamined` vs `nReturned`.
* Use profiler and `mongotop`, `mongostat`.

**Hindi:**

**मोटा सार:** Indexes collection scan रोकते हैं और queries को fast बनाते हैं।

**किसे index बनायें:**

* High cardinality fields (unique values ज्यादा होने चाहिए)।
* Compound index में वह fields पहले रखें जो `match` और filtering में आते हैं।

**ध्यान रखें:**

* बहुत ज्यादा indexes लिखने की speed घटाते हैं।
* `explain()` और profiler से slow queries ढूँढकर index बनायें।

---

## 63. Aggregation pipeline in MongoDB — Explain in detail (Important)

**English:**

**What is it:**
Aggregation pipeline is a framework to process data records through a sequence of stages, each transforming the documents.

**Common stages:**

* `$match` — filter documents (like WHERE).
* `$project` — include/exclude/reshape fields.
* `$group` — group documents and compute accumulators (`$sum`, `$avg`, `$push`).
* `$sort` — sort documents.
* `$limit` / `$skip` — pagination.
* `$unwind` — deconstruct arrays to multiple docs.
* `$lookup` — left-join with another collection.
* `$facet` — run multiple pipelines in parallel and return combined result.
* `$bucket` / `$bucketAuto` — group numeric ranges.

**Performance tips:**

* Place `$match` and `$project` early to reduce data volume.
* Use indexes to support the initial `$match` stage.
* For very large data, enable `allowDiskUse: true` to spill to disk.
* Avoid expensive `$lookup` on huge collections without indexes on join key.

**Example:** total sales per month (simplified)

```js
db.orders.aggregate([
  { $match: { status: 'paid', createdAt: { $gte: ISODate('2024-01-01') } } },
  { $project: { month: { $month: '$createdAt' }, amount: 1 } },
  { $group: { _id: '$month', total: { $sum: '$amount' } } },
  { $sort: { _id: 1 } }
]);
```

**Hindi:**

**क्या है:** Aggregation pipeline documents पर stages की श्रृंखला चलाकर data transform करता है।

**मुख्य stages और उपयोग:**

* `$match` — filter
* `$project` — field select/reshape
* `$group` — aggregation (sum, avg)
* `$lookup` — collections join

**प्रदर्शन टिप्स:**

* `$match` को pipeline की शुरुआत में रखें ताकि कम documents प्रोसेस हों।
* `allowDiskUse` तब इस्तेमाल करें जब data बहुत बड़ा हो।

---

## 64. What are transactions? How can we achieve it in MongoDB

**English:**

**Definition:** Transactions provide **ACID** properties (Atomicity, Consistency, Isolation, Durability) for multiple operations — ensure either all succeed or none.

**MongoDB support:**

* Multi-document transactions available on replica sets and sharded clusters.
* Introduced in MongoDB 4.0 (replica sets) and extended for sharded clusters in later versions.

**Basic Node.js example (MongoDB driver):**

```js
const client = new MongoClient(uri);
await client.connect();
const session = client.startSession();

try {
  await session.withTransaction(async () => {
    const collA = client.db('app').collection('accounts');
    const collB = client.db('app').collection('logs');

    await collA.updateOne({ _id: 1 }, { $inc: { balance: -100 } }, { session });
    await collA.updateOne({ _id: 2 }, { $inc: { balance: +100 } }, { session });
    await collB.insertOne({ type: 'transfer', amount: 100 }, { session });
  });
} finally {
  await session.endSession();
}
```

**Hindi:**

**परिभाषा:** Transaction एक atomic unit है — या तो सभी operations सफल होंगी या कोई भी नहीं।

**MongoDB में:** Replica set या sharded cluster पर multi-document transactions का support मिलता है।

---

## 65. How transactions help in rollback in case of failure

**English:**

**Mechanism:**

* During a transaction, MongoDB buffers write operations and applies them atomically on commit.
* If any operation throws an error, you can `abortTransaction()` — all staged writes are discarded.
* MongoDB uses the oplog and write concern to guarantee durability on commit.

**Practical notes:**

* If a transaction exceeds limits (time or size), it will abort — handle errors and retry logic.
* Keep transactions short and touch limited documents to avoid performance impact.

**Hindi:**

**कैसे rollback होता है:** Transaction के दौरान किये writes commit होने तक visible नहीं होते। Error पर `abortTransaction()` करते हैं और सारे staged changes discard हो जाते हैं।

---

## 66. Difference between hashing, encryption and encoding

**English:**

* **Encoding:** Transform data to a different representation for transport (e.g., Base64). **Reversible** and **not** for security.
* **Hashing:** One-way function producing fixed-length digest (e.g., SHA-256). Used for integrity checks and password storage (with salt + slow hash like bcrypt). **Irreversible**.
* **Encryption:** Two-way transformation that can be reversed with a key (symmetric e.g., AES, or asymmetric e.g., RSA). Used to keep data confidential.

**Use-cases:**

* Passwords → hash (bcrypt + salt).
* API tokens → sign (HMAC) or encrypt if storing secrets.
* Transfer binary as text → encode (Base64).

**Hindi:**

* **Encoding:** Sirf representation change — reversible (Base64). Security provide nahi karta.
* **Hashing:** One-way — passwords ko hash karke store karte hain (bcrypt).
* **Encryption:** Key se data encrypt/decrypt — confidentiality ke liye.

---

## 67. How do you identify slow queries

**English:**

**Techniques:**

* Use `explain('executionStats')` to inspect `totalDocsExamined`, `totalKeysExamined`, and `executionTimeMillis`.
* Enable profiler: `db.setProfilingLevel(1, { slowms: 100 })` — logs queries slower than threshold.
* Inspect MongoDB logs (`slowms` setting) and monitoring tools (`mongotop`, `mongostat`, Atlas Performance Advisor).
* Look for queries that do collection scans or examine many docs but return few results.

**Hindi:**

**Tarike:**

* `explain()` output dekho — agar `totalDocsExamined` zyada ho to yeh slow ho sakta hai.
* Profiler aur slow query logs enable karo.
* Monitoring tools se hotspots identify karo.

---

## 68. Replica sets and sharding mechanism in MongoDB

**English:**

**Replica set:**

* Group of mongod instances that maintain the same data set. One primary accepts writes; secondaries replicate oplog. Provides high availability and failover.

**Sharding:**

* Horizontal partitioning of data across multiple shards. Each shard is usually a replica set. `mongos` routes queries to correct shards using a shard key. Good for scaling write and storage capacity.

**Shard key:** Choose carefully — high cardinality and even distribution are important. Bad shard key leads to hotspot and unbalanced chunks.

**Hindi:**

**Replica set:** Data redundancy aur automatic failover ke liye multiple nodes ka group. Primary writes handle karta hai, secondaries replicate karte hain.

**Sharding:** Data ko horizontally split karna across multiple shards. Har shard apna data hold karta hai — `mongos` query route karta hai. Shard key sahi choose karna bahut jaruri hai.

---

## 69. How do you configure failover and disaster recovery in MongoDB

**English:**

**Failover:**

* Use replica sets with at least 3 voting members for reliable elections.
* Configure priorities so certain nodes are preferred primaries.
* Use hidden or delayed secondaries for backups or reporting to avoid replication lag impact.

**Backups & DR:**

* Take regular backups (mongodump, filesystem snapshots, cloud snapshots).
* Use oplog-based continuous backups or point-in-time recovery if needed.
* Store backups off-site and test restores regularly.
* In managed setups (Atlas/Ops Manager) use built-in backup and restore features.

**Hindi:**

**Failover ka setup:**

* Replica set with 3+ voting nodes rakho. Priority configure karo. Hidden/delayed replica backups ke liye useful hai.

**Disaster recovery:**

* Regular backups, oplog archiving aur restore testing bahut jaruri hai. Cloud providers ki snapshot aur managed backup solutions consider karo.

---

## 70. What is a load balancer and how to implement in Node.js

**English:**

**What is it:**

* A load balancer distributes incoming traffic across multiple backend instances to improve availability and scalability. Types: L4 (TCP), L7 (HTTP/HTTPS).

**How to implement (common options):**

* Use a reverse proxy like **Nginx** or **HAProxy** to forward requests to multiple Node.js app instances (different ports or hosts).
* Use cloud load balancers (AWS ALB, GCP LB, Azure LB) in production.
* Use PM2 cluster mode + Nginx for process management + L7 routing.

**Simple Nginx example:**

```nginx
upstream app_servers {
  server 127.0.0.1:3000;
  server 127.0.0.1:3001;
  server 127.0.0.1:3002;
}

server {
  listen 80;
  location / {
    proxy_pass http://app_servers;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

**Session & sticky notes:**

* Prefer stateless APIs (JWT) so any instance can serve requests. If sticky sessions are needed, use a sticky mechanism or store sessions centrally (Redis).

**Hindi:**

**Kya hai:** Load balancer incoming traffic ko multiple backend nodes me distribute karta hai jisse availability aur scalability badhti hai.

**Kaise implement karein:**

* Production me Nginx/HAProxy ya cloud load balancer (AWS ALB) use karen.
* PM2 cluster + reverse proxy common pattern hai.

---

## 71. How to avoid schema pitfalls?

**English:**
Schema pitfalls happen when your database design is not optimized. To avoid them:

* Use **required fields** to prevent missing data.
* Define **default values** for consistent inserts.
* Avoid **deeply nested documents** (MongoDB documents should not grow too large).
* Use **referencing vs embedding** wisely (normalize vs denormalize based on query needs).
* Validate schema with tools like **Mongoose validation** or **Joi**.

**Hindi:**
Schema pitfalls तब होते हैं जब database design सही ना हो। बचने के लिए:

* Required fields लगाओ (data missing न हो)।
* Default values दो।
* Nested documents बहुत deep मत रखो।
* Reference vs Embed समझकर use करो।
* Validation tools जैसे Joi/Mongoose का use करो।

---

## 72. Measures to write efficient queries

**English:**

* Use **indexes** on frequently searched fields.
* Avoid `SELECT *`, fetch only required fields.
* Use **limit & pagination**.
* Use **explain()** in MongoDB to analyze query performance.
* Reduce joins/lookups where possible.

**Hindi:**

* बार–बार इस्तेमाल होने वाले fields पर index लगाओ।
* `SELECT *` मत लिखो, सिर्फ़ ज़रूरी fields fetch करो।
* Limit और pagination का इस्तेमाल करो।
* MongoDB का `explain()` function चलाकर performance देखो।
* Joins/lookups को कम से कम करो।

---

## 73. How to implement health checks in MongoDB?

**English:**

* Use `db.adminCommand({ ping: 1 })` to check MongoDB connection.
* Implement a **health check route** in Node.js (e.g., `/health`).
* Use monitoring tools like **MongoDB Atlas monitoring** or **Prometheus + Grafana**.

**Hindi:**

* `db.adminCommand({ ping: 1 })` चलाकर MongoDB की health check कर सकते हो।
* Node.js में `/health` API बनाओ।
* Monitoring tools (Prometheus, Grafana) use करो।

---

## 74. What are SOLID principles for software development?

**English:**

1. **S – Single Responsibility Principle** → One class = one responsibility.
2. **O – Open/Closed Principle** → Open for extension, closed for modification.
3. **L – Liskov Substitution Principle** → Subclass should replace parent without breaking.
4. **I – Interface Segregation Principle** → Don’t force large interfaces, split them.
5. **D – Dependency Inversion Principle** → Depend on abstractions, not concrete.

**Hindi:**

1. **Single Responsibility** – हर class का एक ही काम होना चाहिए।
2. **Open/Closed** – Code extend हो सके पर बार-बार modify न करना पड़े।
3. **Liskov Substitution** – Child class parent की जगह use हो सके।
4. **Interface Segregation** – छोटे-छोटे interface बनाओ।
5. **Dependency Inversion** – Abstraction पर depend करो, concrete code पर नहीं।

---

## 75. What is Kafka? Use cases?

**English:**
Apache Kafka is a **distributed streaming platform** used for handling real-time data pipelines and event streaming.

* Use cases:

  * Real-time analytics
  * Event sourcing
  * Log aggregation
  * Data pipelines (streaming ETL)
  * IoT and telemetry data

**Hindi:**
Apache Kafka ek **real-time event streaming platform** है।

* Use cases:

  * Real-time analytics
  * Event sourcing
  * Logs collect करना
  * Data pipeline बनाना
  * IoT devices data handle करना

---

## 76. How to minimize middleware overhead?

**English:**

* Use only required middleware, don’t load everything globally.
* Chain middlewares efficiently.
* Avoid heavy computations inside middleware.
* Use async functions instead of blocking.
* Cache frequently used results.

**Hindi:**

* सिर्फ़ ज़रूरी middleware use करो।
* Middleware chain सही order में रखो।
* Heavy काम middleware में मत करो।
* Async functions use करो।
* Cache का इस्तेमाल करो।

---

## 77. What is event-driven architecture in Node.js?

**English:**

* Event-driven means system reacts to **events** (click, API request, DB update).
* Node.js internally uses **EventEmitter**.
* Example: `server.on('request', handler)`.

**Hindi:**
Event-driven का मतलब है कि system **events** पर react करता है।

* Node.js में **EventEmitter** होता है।
* Example: `server.on('request', handler)`.

---

## 78. How does Node.js handle asynchronous operations?

**English:**

* Node.js uses **Event Loop** + **Callbacks/Promises/async-await**.
* Heavy tasks are given to **libuv thread pool**.
* Non-blocking I/O allows multiple requests.

**Hindi:**

* Node.js में async काम Event Loop से होता है।
* Heavy काम libuv thread pool को भेजा जाता है।
* Non-blocking I/O से कई requests handle होते हैं।

---

## 79. What are middleware functions in ExpressJS?

**English:**

* Middleware = function that executes between **request → response** cycle.
* Types: Built-in (express.json), third-party (morgan, cors), custom.
* Example:

```js
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
```

**Hindi:**

* Middleware वो function है जो **request और response** के बीच चलता है।
* Types: Built-in, third-party, custom.
* Example ऊपर दिया गया।

---

## 80. How does authentication work in Node.js? (JWT vs OAuth)

**English:**

* **JWT (JSON Web Token):**

  * Token based, self-contained.
  * Client stores token → sends with each request.
  * Used for APIs, single sign-on.

* **OAuth:**

  * Delegated authorization.
  * Example: "Login with Google".
  * Third-party provides authentication.

**Hindi:**

* **JWT:** Token based auth है। Client token save करके हर request में भेजता है।
* **OAuth:** 3rd party auth है (जैसे Google login)। User का access delegate होता है।

---

## Q81. What are WebSockets, and when would you use them?

### English Explanation:

* **WebSocket** is a communication protocol that provides **full-duplex (two-way)** communication between client and server over a single, long-lived TCP connection.
* Unlike **HTTP** (which is request-response based), WebSocket allows **real-time data transfer** without repeatedly opening new connections.
* **Use cases:**

  * Real-time chat applications
  * Multiplayer online games
  * Stock price/live score updates
  * Collaborative tools (Google Docs style editing)

### Hindi Explanation:

* **WebSocket** ek protocol hai jo **client aur server ke beech real-time do-tarfa (full-duplex)** communication allow karta hai ek hi TCP connection par.
* Ye **HTTP se alag hai**, kyunki HTTP mein har request ke liye naya connection khulna padta hai, lekin WebSocket mein ek hi connection continuous data bhejta/leta rehta hai.
* **Kahan use hota hai?**

  * Real-time chat apps (WhatsApp, Slack)
  * Online gaming
  * Live cricket/stock market updates
  * Collaborative document editing

---

## Q82. What is the difference between monolithic and microservices architectures?

### English Explanation:

* **Monolithic Architecture:**

  * Single, tightly-coupled application.
  * All modules (UI, business logic, database) are combined.
  * **Pros:** Simple to develop/deploy.
  * **Cons:** Difficult to scale, one bug can affect whole app.

* **Microservices Architecture:**

  * Application divided into independent services.
  * Each service handles a specific business functionality (auth, payments, etc.).
  * **Pros:** Easy scaling, independent deployments, better fault isolation.
  * **Cons:** Complex to manage, requires API communication (REST/GraphQL/Kafka).

### Hindi Explanation:

* **Monolithic Architecture:**

  * Pura application ek hi jagah likha hota hai.
  * UI, logic, aur database ek hi app mein tightly linked hote hain.
  * **Fayda:** Simple banane aur deploy karne mein.
  * **Nuksaan:** Scale karna mushkil, ek error puri app ko gira sakta hai.

* **Microservices Architecture:**

  * App ko chhote-chhote independent services mein tod dete hain.
  * Har service ek particular feature handle karti hai (auth, billing, search).
  * **Fayda:** Easily scale hota hai, alag-alag deploy kar sakte hain.
  * **Nuksaan:** Zyada complex hota hai, proper communication system chahiye.

---

## Q83. How does Node.js handle memory management?

### English Explanation:

* Node.js uses **V8 JavaScript Engine**, which manages memory automatically using **Garbage Collection (GC)**.
* **Memory Areas in Node.js:**

  1. **Heap** → Stores objects, strings, closures.
  2. **Stack** → Function calls and primitive values.
  3. **C++ bindings & Buffers** → Used for I/O and network operations.
* **Garbage Collector:**

  * Removes unused objects from memory.
  * Uses **Mark-and-Sweep algorithm**.
* **Developer responsibilities:**

  * Avoid memory leaks (like global variables, unused event listeners, infinite caches).
  * Monitor memory with tools like `process.memoryUsage()` or Chrome DevTools.

### Hindi Explanation:

* Node.js mein memory ka kaam **V8 Engine** karta hai jo **automatic Garbage Collection (GC)** use karta hai.
* **Memory ke parts:**

  1. **Heap** – objects aur closures store hote hain.
  2. **Stack** – function calls aur primitive values.
  3. **C++/Buffers** – I/O aur network ke liye.
* **Garbage Collector:**

  * Jo data ab use nahi ho raha usko memory se free kar deta hai.
  * Algorithm: **Mark-and-Sweep**.
* **Developer ka kaam:**

  * Memory leaks avoid karo (global vars, unused listeners).
  * Tools use karo jaise `process.memoryUsage()`.

---
# Managerial Round Interview Prep (Tech Lead / Sr. Software Engineer)

## Q1. How do you ensure your team delivers high-quality code within deadlines?

**English:** I ensure quality and timely delivery by following Agile practices, defining clear requirements, and breaking tasks into smaller deliverables. Code reviews, automated testing, and CI/CD pipelines help maintain quality. Regular stand-ups and sprint reviews keep progress aligned with deadlines.

**Hindi:** Main quality aur time par delivery ensure karta hoon Agile practices follow karke. Requirements clear karta hoon aur tasks ko chhote parts me todta hoon. Code reviews, automated testing aur CI/CD pipelines use karke quality maintain hoti hai. Daily standups aur sprint reviews se progress track hoti hai.

---

## Q2. Describe a situation where you had to mentor a junior developer. How did you handle it?

**English:** I first understood the junior developer’s strengths and weaknesses. I assigned them small but meaningful tasks, guided them with pair programming, and conducted code reviews. I encouraged them to ask questions and provided learning resources. Over time, their confidence and productivity improved.

**Hindi:** Pehle maine unke strengths aur weaknesses samjhe. Unko chhote aur meaningful tasks diye, pair programming se guide kiya, aur unke code reviews kiye. Unhe questions puchhne encourage kiya aur learning resources diye. Dheere-dheere unki confidence aur productivity badh gayi.

---

## Q3. Can you explain the SOLID principles and how you apply them in your designs?

**English:** SOLID principles are:

* **S**ingle Responsibility
* **O**pen/Closed
* **L**iskov Substitution
* **I**nterface Segregation
* **D**ependency Inversion

I apply them by ensuring each class has one purpose, making code extensible without modifying existing code, using abstractions instead of tight coupling, and creating interfaces that are client-specific.

**Hindi:** SOLID principles yeh hain:

* **S**ingle Responsibility (ek class ek hi kaam kare)
* **O**pen/Closed (code extend ho sake bina modify kiye)
* **L**iskov Substitution (derived classes ko base class ki tarah use kar sakein)
* **I**nterface Segregation (client-specific interfaces ho)
* **D**ependency Inversion (abstractions par depend ho, na ki concrete implementations par)

Main inhe apply karta hoon code ko clean, reusable aur scalable banane ke liye.

---

## Q4. Explain the design pattern in JavaScript.

**English:** Common design patterns in JavaScript are:

* **Singleton** (only one instance)
* **Observer** (event-driven updates)
* **Factory** (object creation without exposing logic)
* **Module** (encapsulation of code)
* **Decorator** (add behavior without modifying original class)

I use them to solve common problems in a standardized way.

**Hindi:** JavaScript me common design patterns hain:

* **Singleton** (sirf ek instance banta hai)
* **Observer** (event-driven updates)
* **Factory** (object creation without exposing logic)
* **Module** (code encapsulation)
* **Decorator** (behavior add karna bina class ko modify kiye)

Main inhe isliye use karta hoon taaki problems easily aur reusable way me solve ho.

---

## Q5. How do you decide which tech stack is suitable for a specific project?

**English:** I analyze project requirements (scalability, performance, budget, timeline). For example, MERN stack for fast prototyping and scalability, Java/Spring for enterprise-grade applications, Python for AI/ML projects. Community support, developer expertise, and long-term maintenance are also important factors.

**Hindi:** Main project requirements dekhkar decide karta hoon jaise scalability, performance, budget aur timeline. Example: MERN stack fast prototyping ke liye, Java/Spring enterprise apps ke liye, Python AI/ML ke liye. Saath hi community support, developer expertise aur maintenance bhi consider karta hoon.

---

## Q6. What is difference between Development, FT, UAT, Pre-prod and Production environment?

**English:**

* **Development** → Developers write and test code locally.
* **FT (Functional Testing)** → QA tests features.
* **UAT (User Acceptance Testing)** → End users validate features.
* **Pre-prod** → A mirror of production for final testing.
* **Production** → Live environment used by actual customers.

**Hindi:**

* **Development** → Jahan developers code likhte aur test karte hain.
* **FT (Functional Testing)** → QA team features test karti hai.
* **UAT (User Acceptance Testing)** → End users validate karte hain.
* **Pre-prod** → Production jaisa hi ek environment final testing ke liye.
* **Production** → Live system jahan real customers use karte hain.

---

## Q7. How do you ensure 100% code coverage in your projects?

**English:** 100% coverage is achieved by writing unit tests, integration tests, and end-to-end tests. I enforce testing with CI/CD pipelines and tools like Jest, Mocha, Istanbul/NYC for coverage reports. However, I also ensure meaningful coverage, not just numbers.

**Hindi:** 100% coverage ke liye unit tests, integration tests aur end-to-end tests likhe jate hain. CI/CD pipelines aur tools (Jest, Mocha, Istanbul/NYC) use karke enforce karta hoon. Lekin sirf numbers nahi, meaningful coverage ensure karta hoon.

---

## Q8. Can you explain the difference between Unit Testing, Integration Testing, and Functional Testing?

**English:**

* **Unit Testing** → Tests individual functions or components.
* **Integration Testing** → Tests how modules interact.
* **Functional Testing** → Tests features from a user’s perspective.

**Hindi:**

* **Unit Testing** → Individual function/component test hota hai.
* **Integration Testing** → Modules ke interaction ka test hota hai.
* **Functional Testing** → User ke point of view se pura feature test hota hai.

---

## Q9. How do you secure sensitive data in a MERN stack application?

**English:** I use encryption (bcrypt for passwords), environment variables for secrets, HTTPS for communication, role-based access control, JWT authentication, and MongoDB security rules. Also, sensitive fields are never exposed directly to clients.

**Hindi:** Main sensitive data ko secure karta hoon encryption (bcrypt passwords ke liye), environment variables (secrets ke liye), HTTPS communication, role-based access, JWT authentication aur MongoDB security rules se. Sensitive fields ko kabhi directly expose nahi karta.

---

## Q10. Describe your experience working in an Agile/Scrum environment.

**English:** I have worked in Agile teams where we followed 2-week sprints, daily standups, sprint planning, sprint reviews, and retrospectives. This helped in continuous delivery, quick feedback, and adapting to changes faster.

**Hindi:** Maine Agile teams me kaam kiya hai jahan 2-week sprints, daily standups, sprint planning, sprint review aur retrospectives follow hote the. Isse continuous delivery, fast feedback aur quick adaptation possible hota hai.

---

## Q11. Explain the meetings like sprint planning, daily standup, backlog refinement, sprint review, sprint retrospective (imp)?

**English:**

* **Sprint Planning:** Decide what stories will be taken for the sprint, estimate, and define sprint goals.
* **Daily Standup:** Short 15-min meeting where each developer answers: What did I do yesterday? What will I do today? Any blockers?
* **Backlog Refinement:** Regularly update, clarify, and prioritize backlog items.
* **Sprint Review:** Demonstrate completed work to stakeholders and gather feedback.
* **Sprint Retrospective:** Team reflects on what went well, what didn’t, and what to improve.

**Hindi:**

* **Sprint Planning:** अगली स्प्रिंट में क्या काम करना है और उसका लक्ष्य तय करना।
* **Daily Standup:** हर दिन 15 मिनट की मीटिंग जिसमें हर डेवलपर बताता है कि कल क्या किया, आज क्या करेगा और कोई अड़चन है या नहीं।
* **Backlog Refinement:** बैकलॉग की स्टोरीज़ को साफ, सही और प्रायोरिटी के हिसाब से अपडेट करना।
* **Sprint Review:** टीम काम पूरा करके स्टेकहोल्डर्स को दिखाती है और फीडबैक लेती है।
* **Sprint Retrospective:** टीम सोचती है कि क्या अच्छा हुआ, क्या नहीं और अगली बार कैसे सुधारें।

---

## Q12. How do you document your code and project architecture for your team?

**English:**

* Use tools like **Swagger / OpenAPI** for API documentation.
* Write inline comments where business logic is complex.
* Maintain an **architecture diagram** (using Draw\.io, Lucidchart, or Miro).
* Create a **README.md** with setup instructions.
* Confluence / Notion for project-level docs.

**Hindi:**

* **Swagger/OpenAPI** से API docs बनाते हैं।
* जहाँ logic complex हो वहाँ comments लिखते हैं।
* **Architecture diagrams** बनाते हैं (Draw\.io, Lucidchart).
* प्रोजेक्ट setup और run करने की जानकारी **README.md** में डालते हैं।
* बड़े प्रोजेक्ट डॉक्यूमेंटेशन के लिए **Confluence या Notion** यूज़ करते हैं।

---

## Q13. How do you onboard new developers to your team and projects?

**English:**

1. Provide them with proper **project documentation** and access.
2. Walkthrough of **architecture and codebase**.
3. Assign a **mentor/buddy**.
4. Start with **small tasks/bugs**.
5. Explain team’s **process (Agile, Git flow, code review standards)**.

**Hindi:**

1. नए डेवलपर को डॉक्यूमेंटेशन और access देते हैं।
2. आर्किटेक्चर और codebase की walkthrough कराते हैं।
3. एक **mentor/buddy** assign करते हैं।
4. शुरुआत छोटे-छोटे tasks या bug fix से कराते हैं।
5. टीम के processes (Agile, Git flow, review rules) समझाते हैं।

---

## Q14. What tools do you use to track project progress and manage tasks (imp)?

**English:**

* **JIRA / Trello / Asana** for task tracking.
* **Confluence / Notion** for documentation.
* **GitHub / GitLab boards** for code + issue tracking.
* **Burndown/Burnup charts** for progress tracking.

**Hindi:**

* **JIRA/Trello/Asana** से task ट्रैक करते हैं।
* **Confluence/Notion** से डॉक्यूमेंटेशन रखते हैं।
* **GitHub/GitLab boards** issue और code ट्रैकिंग के लिए।
* Progress देखने के लिए **Burndown/Burnup charts**।

---

## Q15. What are the key considerations when designing RESTful APIs?

**English:**

* Use **proper resource naming (nouns, not verbs)**.
* Follow **HTTP methods correctly (GET, POST, PUT, DELETE)**.
* Ensure **status codes** are meaningful.
* Support **pagination, filtering, sorting**.
* Implement **authentication and rate limiting**.
* Version your APIs.

**Hindi:**

* **Resource naming** सही होना चाहिए (noun का use)।
* सही HTTP methods का use करें (GET, POST, PUT, DELETE)।
* **Status codes** meaningful होने चाहिए।
* Pagination, filtering, sorting support करें।
* API में **security और rate limiting** डालें।
* Versioning करें।

---

## Q16. What is your approach to deploying and scaling a MERN stack application?

**English:**

1. **Containerize** using Docker.
2. Use **CI/CD pipeline** (GitHub Actions, Jenkins).
3. Deploy on **AWS/GCP/Azure**.
4. Scale horizontally using **load balancer + auto scaling groups**.
5. Use **MongoDB Atlas with sharding and replication**.
6. Monitor with **Prometheus, Grafana, ELK**.

**Hindi:**

1. App को Docker से containerize करते हैं।
2. Deployment के लिए **CI/CD pipeline** लगाते हैं।
3. AWS/GCP/Azure पर deploy करते हैं।
4. **Load balancer + auto scaling** से scale करते हैं।
5. MongoDB Atlas में **replication + sharding** enable करते हैं।
6. Monitoring tools जैसे Prometheus/Grafana use करते हैं।

---

## Q17. How would you handle a situation where the application is experiencing a memory leak (imp)?

**English:**

* Use tools like **Node.js heap snapshots, Chrome DevTools, clinic.js**.
* Check for unclosed DB connections, event listeners, or global variables.
* Use **profiling tools** to find bottlenecks.
* Implement proper **garbage collection tuning**.

**Hindi:**

* Tools जैसे **heap snapshot, DevTools, clinic.js** से memory leak ढूँढते हैं।
* Unclosed DB connections, listeners, global vars check करते हैं।
* Profiling tools से bottleneck ढूँढते हैं।
* Garbage collector tuning करते हैं।

---

## Q18. A feature you implemented in React is causing performance issues. How would you debug it?

**English:**

* Use **React Profiler** to identify slow components.
* Check for unnecessary re-renders using **React.memo, useCallback, useMemo**.
* Optimize **large lists with virtualization** (react-window, react-virtualized).
* Split code using **lazy loading**.

**Hindi:**

* **React Profiler** से slow component ढूँढते हैं।
* Unnecessary re-render रोकने के लिए **React.memo/useCallback/useMemo** का use।
* बड़ी lists को virtualize करते हैं।
* **Lazy loading** से bundle छोटा करते हैं।

---

## Q19. What steps would you take if your database suddenly becomes a bottleneck in your application?

**English:**

* Identify slow queries (use **MongoDB profiler/Atlas Performance Advisor**).
* Add **indexes**.
* Implement **caching** (Redis).
* Use **replication/sharding**.
* Consider **read/write separation**.

**Hindi:**

* **MongoDB profiler** से slow queries ढूँढते हैं।
* Indexes add करते हैं।
* Redis caching use करते हैं।
* Sharding और replication enable करते हैं।
* Read/Write अलग-अलग nodes पर भेजते हैं।

---

## Q20. If your team is stuck on a critical bug, how would you guide them to a solution?

**English:**

1. Stay calm and set a positive tone.
2. Reproduce the bug with clear steps.
3. Assign **pair programming/debugging**.
4. Break problem into smaller parts.
5. If unresolved, **escalate or ask external help**.

**Hindi:**

1. शांत रहकर टीम को motivate करते हैं।
2. Bug reproduce करने के steps बनाते हैं।
3. Pair programming/debugging कराते हैं।
4. Problem को छोटे हिस्सों में बाँटते हैं।
5. अगर solve न हो तो escalate करते हैं या external help लेते हैं।

---
## **21. What is your approach to conducting code reviews (imp)?**

**English:**

* Code review is not just about finding bugs, it’s about improving **code quality, maintainability, performance, and readability**.
* My approach:

  1. **Understand the context** → Read the requirement/story first.
  2. **Check coding standards** → Naming conventions, modular code, folder structure.
  3. **Check logic correctness** → Edge cases, error handling, security.
  4. **Look for performance issues** → Inefficient loops, unnecessary DB calls.
  5. **Test coverage** → Ensure unit tests exist and pass.
  6. **Give constructive feedback** → Not just “wrong”, but suggest “better”.
  7. **Encourage learning** → Teach juniors why we follow certain practices.

**Hindi:**

* Code review ka matlab sirf bug dhundhna nahi hota, balki **quality, maintainability, performance aur readability** improve karna hota hai.
* Mera approach:

  1. Requirement samjhna.
  2. Coding standards check karna (naming, structure).
  3. Logic aur edge cases verify karna.
  4. Performance check karna (loops, queries).
  5. Test cases aur coverage dekhna.
  6. Positive aur constructive feedback dena.
  7. Junior ko samjhakar mentorship dena.

---

## **22. How do you optimize MongoDB queries for better performance?**

**English:**

* Use **indexes** wisely (single field, compound, text indexes).
* Avoid **unnecessary \$regex** and large `$in` queries.
* Use **projection** → Fetch only required fields (`find({}, { name: 1 })`).
* Avoid large aggregations without indexes.
* Monitor with **MongoDB profiler / explain()**.
* Use **sharding/replication** for scaling.
* Denormalize if read-heavy (store computed fields).

**Hindi:**

* Performance ke liye indexes ka sahi use karna zaroori hai.
* Regex aur bada `$in` query avoid karna chahiye.
* Projection use karke sirf zaroori fields hi lana.
* Aggregation pipelines ko optimize karna.
* Mongo profiler aur `explain()` ka use karke query slow hai ya nahi check karna.
* Scale ke liye sharding aur replication use karna.
* Read-heavy cases me denormalization karna.

---

## **23. How do you manage error handling in an Express.js application?**

**English:**

* Centralized error handling middleware:

  ```js
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
  });
  ```
* Use **try/catch with async/await**.
* Differentiate between **client errors (400s)** and **server errors (500s)**.
* Log errors with **winston/morgan**.
* Never expose internal stack trace in production.
* Send user-friendly error messages.

**Hindi:**

* Ek **centralized middleware** banana jo saare errors handle kare.
* Async/await ke saath try-catch use karna.
* Client aur server error alag karna (400 vs 500).
* Logging tools use karna (winston, morgan).
* Production me kabhi bhi internal stack trace expose na karna.
* User ko friendly aur simple message dena.

---

## **24. Explain how you would secure an Express.js API.**

**English:**

* Use **JWT or OAuth** for authentication.
* Implement **role-based authorization**.
* Sanitize input to prevent **SQL/NoSQL injection**.
* Use **helmet.js** for securing headers.
* Enable **HTTPS/TLS**.
* Limit request rate with **rate-limiter** to avoid DDoS.
* Validate payload with **Joi/Zod**.
* Keep dependencies updated.

**Hindi:**

* Authentication ke liye JWT ya OAuth use karna.
* Authorization ke liye roles/permissions implement karna.
* Input sanitize karna taaki SQL/NoSQL injection na ho.
* Helmet.js use karke headers secure karna.
* Always HTTPS enable karna.
* Rate limiting lagana taaki DDoS se bach sake.
* Request validation karna (Joi/Zod).
* Dependencies update rakhna.

---

## **25. How do you optimize React applications for performance?**

**English:**

* Use **React.memo** to prevent unnecessary re-renders.
* Implement **lazy loading / code splitting**.
* Use **React DevTools Profiler** to find bottlenecks.
* Avoid inline functions inside render.
* Use **virtualized lists** for large data.
* Optimize API calls (debounce, cache).
* Keep state minimal (lift state up carefully).

**Hindi:**

* React.memo use karke re-render avoid karna.
* Code splitting aur lazy loading lagana.
* Profiler se bottleneck identify karna.
* Render ke andar inline function avoid karna.
* Badi lists ke liye virtualization karna.
* API calls ko debounce aur cache karna.
* State ko minimal aur clean rakhna.

---

## **26. How do you secure a Node.js application?**

**English:**

* Use **dotenv** for secrets, never hardcode keys.
* Validate all user inputs.
* Use **bcrypt** for password hashing.
* Implement **rate limiting + captcha**.
* Keep dependencies updated and remove unused ones.
* Use **helmet** for secure headers.
* Implement **CORS properly**.
* Run Node.js in **non-root mode**.
* Enable proper logging and monitoring.

**Hindi:**

* Secrets env file me store karna, code me nahi.
* User inputs hamesha validate karna.
* Password hashing ke liye bcrypt use karna.
* Rate limiting aur captcha implement karna.
* Dependencies update karna.
* Helmet use karke headers secure karna.
* CORS ko correctly configure karna.
* Node process ko root mode me na chalana.
* Proper monitoring aur logging setup karna.

---

## **27. How would you handle database sharding and replication in MongoDB (imp)?**

**English:**

* **Replication**:

  * Keeps multiple copies of data across nodes.
  * Provides **high availability & failover**.
  * Achieved via **Replica Sets**.
* **Sharding**:

  * Splits large dataset across multiple servers.
  * Provides **horizontal scaling**.
  * Requires choosing a proper **shard key**.
* Together:

  * Replication ensures **availability**, sharding ensures **scalability**.
* Tools: Use **Mongo Atlas**, or self-manage via config servers + mongos routers.

**Hindi:**

* **Replication**: Data ki multiple copies rakhta hai, taaki agar ek server down ho to dusre se data mile.
* **Sharding**: Data ko alag-alag servers me tod kar distribute karta hai, taaki large scale handle ho sake.
* Dono ko saath use karke **availability + scalability** achieve hoti hai.
* Shard key sahi choose karna sabse important hota hai.
* Atlas ya khud ke config servers se implement kiya ja sakta hai.


