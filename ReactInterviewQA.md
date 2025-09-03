# React Interview Questions & Answers (Hindi & English, Deep Explanation)

---

## 1. What is ReactJS and how is it different from other libraries/frameworks?

**English:**
ReactJS is an open-source JavaScript library developed by Facebook for building fast and interactive user interfaces, especially for single-page applications (SPAs). React focuses on the "view" part of the Model-View-Controller (MVC) architecture. It uses a component-based approach, where the UI is broken down into reusable, self-contained pieces called components. React's main features include the virtual DOM, declarative UI, and unidirectional data flow.

**How is it different?**

- **Component-Based:** Unlike traditional frameworks (like AngularJS, which uses MVC), React breaks the UI into independent, reusable components.
- **Virtual DOM:** React uses a virtual DOM to optimize UI updates, making rendering faster than direct DOM manipulation.
- **Declarative:** You describe what the UI should look like for any state, and React takes care of updating the UI when your data changes.
- **Unidirectional Data Flow:** Data flows in one direction, making debugging and understanding data changes easier.
- **Ecosystem:** React is just the view layer; for routing, state management, etc., you use additional libraries (like React Router, Redux).

**Example:**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

**Hindi:**
ReactJS ek open-source JavaScript library hai jo Facebook ne banayi hai, fast aur interactive user interfaces banane ke liye, khaaskar single-page applications (SPA) ke liye. React sirf "view" part par focus karta hai (MVC architecture ka). Isme component-based approach hoti hai, jisme UI ko chhote-chhote, reuse hone wale components me tod diya jata hai. React ke main features hain: virtual DOM, declarative UI, aur unidirectional data flow.

**React dusre frameworks se kaise alag hai?**

- **Component-Based:** Dusre frameworks (jaise AngularJS) MVC use karte hain, jabki React UI ko chhote, independent components me todta hai.
- **Virtual DOM:** React virtual DOM ka use karta hai, jisse UI updates bahut fast hote hain.
- **Declarative:** Aap bas batate hain ki UI kis state me kaisa dikhe, React khud UI ko update karta hai.
- **Unidirectional Data Flow:** Data ek hi direction me flow karta hai, jisse debugging aur data samajhna aasan hota hai.
- **Ecosystem:** React sirf view layer hai, routing ya state management ke liye alag libraries (jaise React Router, Redux) ka use hota hai.

**Udaharan:**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

---

## 2. What is JSX? What is the difference between JSX and TSX in ReactJS?

**English:**
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files. It makes writing React components more intuitive and readable. Under the hood, JSX is transpiled to `React.createElement()` calls.

**TSX** is similar to JSX but is used in TypeScript files. TSX allows you to use TypeScript's static typing features along with JSX syntax, providing better tooling, type safety, and error checking.

**Example:**

```jsx
// JSX Example
const element = <h1>Hello, world!</h1>;

// TSX Example (TypeScript)
interface Props {
  name: string;
}
const Greet: React.FC<Props> = ({ name }) => <h1>Hello, {name}!</h1>;
```

**Hindi:**
JSX (JavaScript XML) ek syntax extension hai jo JavaScript me HTML jaise code likhne deta hai. Isse React components likhna aasan aur readable ho jata hai. JSX ko transpile karke `React.createElement()` me badal diya jata hai.

**TSX** bhi JSX ki tarah hai, lekin TypeScript files me use hota hai. TSX me aap TypeScript ki type safety aur error checking ka fayda utha sakte hain, sath hi JSX syntax bhi use kar sakte hain.

**Udaharan:**

```jsx
// JSX Example
const element = <h1>Hello, world!</h1>;

// TSX Example (TypeScript)
interface Props {
  name: string;
}
const Greet: React.FC<Props> = ({ name }) => <h1>Hello, {name}!</h1>;
```

---

## 3. Explain the concept of virtual DOM, Shadow DOM in ReactJS

**English:**

- **Virtual DOM:** The virtual DOM is a lightweight, in-memory representation of the real DOM. When you update the UI, React creates a new virtual DOM, compares it with the previous one (using a diffing algorithm), and updates only the changed parts in the real DOM. This makes UI updates much faster and more efficient.
- **Shadow DOM:** Shadow DOM is a browser technology (not specific to React) that allows encapsulation of DOM and styles for web components. It keeps component styles and markup isolated from the rest of the page.

**Example:**

- When you change a value in a React form, React updates the virtual DOM first, then only updates the real DOM where necessary.

**Hindi:**

- **Virtual DOM:** Virtual DOM ek halka-phulka (lightweight) copy hai real DOM ka, jo memory me banti hai. Jab aap UI update karte hain, React naya virtual DOM banata hai, purane se compare karta hai (diffing algorithm se), aur sirf badle hue parts ko real DOM me update karta hai. Isse UI updates bahut fast ho jate hain.
- **Shadow DOM:** Shadow DOM ek browser ki technology hai (React specific nahi), jo web components ke liye DOM aur styles ko alag (encapsulate) karta hai. Isse component ke styles aur markup page ke baaki hisse se alag rehte hain.

**Udaharan:**

- Jab aap React form me value change karte hain, React pehle virtual DOM update karta hai, fir sirf zaruri jagah real DOM update hota hai.

---

## 4. How is virtual DOM different from real DOM?

**English:**

- **Real DOM:** Directly represents the UI in the browser. Any change causes the entire DOM (or large parts) to re-render, which is slow.
- **Virtual DOM:** An in-memory copy of the real DOM. React updates the virtual DOM first, then efficiently updates only the changed parts in the real DOM, improving performance.

**Analogy:**
Think of the virtual DOM as a draft paper where you make changes before updating the final document (real DOM).

**Hindi:**

- **Real DOM:** Browser me dikhne wala asli UI hai. Koi bhi change poore DOM (ya uske bade hisson) ko dobara render karta hai, jo slow hota hai.
- **Virtual DOM:** Real DOM ka ek memory me rakha gaya copy hai. React pehle virtual DOM update karta hai, fir sirf badle hue parts ko real DOM me update karta hai, isse performance fast hoti hai.

**Udaharan:**
Virtual DOM ek rough copy hai, jisme aap pehle changes karte hain, fir final document (real DOM) me sirf zaruri badlav kiye jate hain.

---

## 5. What are the different types of components in ReactJS?

**English:**
There are two main types of components in React:

1. **Class Components:** ES6 classes that extend React.Component. They can have state, lifecycle methods, and more complex logic.
2. **Functional Components:** Simple JavaScript functions. Earlier, they were stateless, but with React Hooks, they can now manage state and side effects.

**Example:**

```jsx
// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Hindi:**
React me do pramukh tarah ke components hote hain:

1. **Class Components:** ES6 class hoti hain jo React.Component ko extend karti hain. Inme state, lifecycle methods, aur complex logic ho sakta hai.
2. **Functional Components:** Simple JavaScript functions hote hain. Pehle ye stateless the, lekin React Hooks ke aane ke baad ab ye bhi state aur side effects handle kar sakte hain.

**Udaharan:**

```jsx
// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

## 6. Difference between class and functional component

**English:**
Class components are ES6 classes that extend React.Component. They can have their own state, lifecycle methods (like componentDidMount, componentDidUpdate), and more complex logic. Functional components are plain JavaScript functions. Earlier, they were used only for simple, stateless UI, but with the introduction of React Hooks (like useState, useEffect), functional components can now manage state, side effects, and more, making them as powerful as class components.

**Key Differences:**

- **Syntax:** Class components use class syntax; functional components use function syntax.
- **State & Lifecycle:** Class components use this.state and lifecycle methods; functional components use hooks.
- **Boilerplate:** Functional components are more concise and easier to read.
- **Performance:** Functional components are generally faster and preferred in modern React.

**Example:**

```jsx
// Class Component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>Count: {this.state.count}</button>;
  }
}

// Functional Component with Hooks
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

**Hindi:**
Class components ES6 class hoti hain jo React.Component ko extend karti hain. Inme apni state, lifecycle methods (jaise componentDidMount, componentDidUpdate) aur complex logic ho sakta hai. Functional components sirf JavaScript functions hote hain. Pehle ye sirf simple, stateless UI ke liye use hote the, lekin React Hooks (jaise useState, useEffect) ke aane ke baad ab ye bhi state, side effects, etc. handle kar sakte hain, isliye ab ye bhi utne hi powerful hain.

**Mukhya Antar:**

- **Syntax:** Class components class syntax use karte hain; functional components function syntax.
- **State & Lifecycle:** Class components this.state aur lifecycle methods use karte hain; functional components hooks ka use karte hain.
- **Boilerplate:** Functional components jyada concise aur readable hote hain.
- **Performance:** Functional components generally faster hote hain aur modern React me preferred hain.

**Udaharan:**

```jsx
// Class Component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>Count: {this.state.count}</button>;
  }
}

// Functional Component with Hooks
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

## 7. What is the state of ReactJS?

**English:**
State is a built-in object in React components that stores dynamic data and determines how the component behaves and renders. State is mutable (can change), and when it changes, React automatically re-renders the component to reflect the new state. State is local to the component unless lifted up to a parent.

**Example:**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

**Hindi:**
State React component ka ek built-in object hai jo dynamic data store karta hai aur component ka behavior aur rendering decide karta hai. State mutable hoti hai (badal sakti hai), aur jab bhi state change hoti hai, React component ko dobara render karta hai taki nayi state UI me dikh sake. State component ke andar local hoti hai, jab tak use parent me lift na kiya jaye.

**Udaharan:**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

## 8. What are props and the difference between props and states?

**English:**
Props (short for properties) are read-only data passed from parent to child components. They allow components to be dynamic and reusable. State is data managed within the component and can change over time. Props are immutable (cannot be changed by the child), while state is mutable (can be changed by the component itself).

**Analogy:**
Props are like function arguments; state is like variables declared inside a function.

**Example:**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

**Hindi:**
Props (properties ka short form) read-only data hai jo parent component se child component ko diya jata hai. Isse components dynamic aur reusable bante hain. State component ke andar manage hoti hai aur time ke sath change ho sakti hai. Props immutable hain (child change nahi kar sakta), jabki state mutable hoti hai (component khud change kar sakta hai).

**Udaharan:**
Props function ke arguments jaise hain; state function ke andar declare kiye gaye variables jaise.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

---

## 9. What is props drilling and alternative to it?

**English:**
Props drilling is the process of passing data from a parent component to deeply nested child components through intermediate components that do not need the data themselves. This can make code harder to maintain. The alternative is to use Context API or state management libraries (like Redux) to provide data globally, so any component can access it directly without passing through every level.

**Example:**

- **Props Drilling:**
  App → Parent → Child → Grandchild (data passed through each)
- **Context API:**
  App provides data, Grandchild consumes it directly.

**Hindi:**
Props drilling ka matlab hai data ko parent se deeply nested child components tak pass karna, beech ke components ke through jo khud data ka use nahi karte. Isse code maintain karna mushkil ho sakta hai. Iska alternative hai Context API ya Redux jaise state management tools ka use karna, jisse data globally provide ho jata hai aur koi bhi component directly access kar sakta hai.

**Udaharan:**

- **Props Drilling:**
  App → Parent → Child → Grandchild (data har level se pass hota hai)
- **Context API:**
  App data provide karta hai, Grandchild directly use karta hai.

---

## 10. Difference between controlled and uncontrolled components

**English:**
Controlled components are form elements (like input, textarea) whose value is controlled by React state. You read and update the value using state and event handlers. Uncontrolled components store their own data in the DOM, accessed via refs. Controlled components provide better control, validation, and are preferred in most cases.

**Example:**

```jsx
// Controlled
function MyForm() {
  const [value, setValue] = React.useState("");
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// Uncontrolled
function MyForm() {
  const inputRef = React.useRef();
  return <input ref={inputRef} />;
}
```

**Hindi:**
Controlled components wo hote hain jinke form elements (input, textarea) ki value React state se control hoti hai. Value ko state aur event handler ke through read/update kiya jata hai. Uncontrolled components apna data DOM me store karte hain, jo refs ke through access hota hai. Controlled components me validation aur control behtar hota hai, isliye jyadatar cases me ye prefer kiye jate hain.

**Udaharan:**

```jsx
// Controlled
function MyForm() {
  const [value, setValue] = React.useState("");
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// Uncontrolled
function MyForm() {
  const inputRef = React.useRef();
  return <input ref={inputRef} />;
}
```

---

## 11. How rerender happens when states change in ReactJS?

**English:**
When you update the state in a React component (using setState in class components or the state updater function in hooks), React marks that component as "dirty" and schedules a re-render. During the next render cycle, React compares the new virtual DOM with the previous one (using its diffing algorithm) and updates only the changed parts in the real DOM. This process is called reconciliation. Child components that depend on the changed state or props will also re-render.

**Example:**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
// When you click the button, setCount updates the state, triggering a re-render.
```

**Analogy:**
It's like editing a document: you only print the changed pages, not the whole book.

**Hindi:**
Jab aap React component me state update karte hain (class component me setState ya hooks me state updater function se), React us component ko "dirty" mark karta hai aur re-render schedule karta hai. Next render cycle me React naya virtual DOM purane se compare karta hai (diffing algorithm se) aur sirf badle hue parts ko real DOM me update karta hai. Is process ko reconciliation kehte hain. Child components jinhe badli hui state ya props chahiye, wo bhi re-render hote hain.

**Udaharan:**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
// Jab button click karte hain, setCount state update karta hai, aur re-render hota hai.
```

**Tulanatmak Udaharan:**
Jaise aap ek document me sirf badle hue page print karte hain, pura book nahi.

---

## 12. What happens if you try to update the state directly in ReactJS?

**English:**
If you update the state directly (e.g., this.state.value = 1), React will not know that the state has changed, so it will not re-render the component. This can lead to bugs and inconsistent UI. Always use setState (for class components) or the state updater function (for hooks) to update state, so React can manage the update and trigger a re-render.

**Example:**

```jsx
// Wrong:
this.state.value = 1; // No re-render
// Correct:
this.setState({ value: 1 }); // Triggers re-render
```

**Hindi:**
Agar aap state ko directly update karte hain (jaise this.state.value = 1), toh React ko pata nahi chalega ki state badli hai, isliye component re-render nahi hoga. Isse bugs aur UI me gadbad ho sakti hai. Hamesha setState (class components ke liye) ya state updater function (hooks ke liye) ka use karein taki React update ko manage kar sake aur re-render ho.

**Udaharan:**

```jsx
// Galat:
this.state.value = 1; // Koi re-render nahi
// Sahi:
this.setState({ value: 1 }); // Re-render hota hai
```

---

## 13. How to share data among sibling components?

**English:**
To share data among sibling components, you "lift the state up" to their common parent component. The parent manages the shared state and passes it down to the siblings as props. If the data needs to be shared across many components, you can use Context API or a state management library like Redux.

**Example:**

```jsx
function Parent() {
  const [sharedValue, setSharedValue] = React.useState("");
  return (
    <>
      <SiblingA value={sharedValue} setValue={setSharedValue} />
      <SiblingB value={sharedValue} />
    </>
  );
}
```

**Hindi:**
Sibling components ke beech data share karne ke liye, aap shared state ko unke common parent component me le jate hain. Parent component state manage karta hai aur props ke through dono siblings ko data bhejta hai. Agar data bahut saare components me share karna ho toh Context API ya Redux ka use kar sakte hain.

**Udaharan:**

```jsx
function Parent() {
  const [sharedValue, setSharedValue] = React.useState("");
  return (
    <>
      <SiblingA value={sharedValue} setValue={setSharedValue} />
      <SiblingB value={sharedValue} />
    </>
  );
}
```

---

## 14. What is a styled component? Have you implemented theming in ReactJS?

**English:**
Styled-components is a library for React and React Native that allows you to write CSS directly in your JavaScript files using tagged template literals. It helps in creating component-level styles, supports dynamic styling, and makes it easy to implement theming using the ThemeProvider. Theming allows you to define a set of colors, fonts, and other design tokens that can be accessed by all styled components.

**Example:**

```jsx
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.primary};
  color: white;
`;

const theme = {
  primary: "#4CAF50"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click Me</Button>
    </ThemeProvider>
  );
}
```

**Hindi:**
Styled-components ek library hai jo React (aur React Native) me JavaScript file ke andar hi CSS likhne deti hai (tagged template literals ka use karke). Isse component-level par styles banana, dynamic styling aur theming implement karna aasan ho jata hai. ThemeProvider ke through aap ek theme define kar sakte hain (colors, fonts, etc.) jo sabhi styled components me use ho sakti hai.

**Udaharan:**

```jsx
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.primary};
  color: white;
`;

const theme = {
  primary: "#4CAF50"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click Me</Button>
    </ThemeProvider>
  );
}
```

---

## 15. What is the React server component?

**English:**
React Server Components (RSC) are a new feature that allows some components to be rendered on the server instead of the client. This reduces the amount of JavaScript sent to the browser, improves performance, and enables better SEO. Server components can fetch data and render HTML on the server, while client components handle interactivity. RSC is still experimental but is being adopted in frameworks like Next.js.

**Analogy:**
It's like preparing part of a meal in the kitchen (server) and finishing it at the table (client).

**Hindi:**
React Server Components (RSC) ek nayi feature hai jisse kuch components server par render ho sakte hain, client par nahi. Isse browser me bheje jane wale JavaScript ka size kam ho jata hai, performance aur SEO dono improve hote hain. Server components data fetch kar sakte hain aur HTML server par render kar sakte hain, jabki client components interactivity handle karte hain. RSC abhi experimental hai, lekin Next.js jaise frameworks me use ho raha hai.

**Tulanatmak Udaharan:**
Jaise khana ka kuch hissa kitchen (server) me ban jata hai, aur baaki table (client) par finish hota hai.

---

## 16. Explain lifecycle methods of components

**English:**
Lifecycle methods are special functions in React class components that run at specific points in a component's life: creation (mounting), updating, and removal (unmounting). They allow you to run code at these stages, such as fetching data, setting up subscriptions, or cleaning up resources.

- **Mounting:** When the component is created and inserted into the DOM. Methods: constructor, componentDidMount.
- **Updating:** When props or state change. Methods: shouldComponentUpdate, componentDidUpdate.
- **Unmounting:** When the component is removed from the DOM. Method: componentWillUnmount.

**Example:**

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentDidUpdate() {
    console.log('Component did update');
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}
```

**Analogy:**
Like a human life: birth (mount), changes (update), and death (unmount).

**Hindi:**
Lifecycle methods React ke class components me special functions hote hain jo component ke jeevan ke alag-alag stages par chalte hain: banne par (mounting), update hone par (updating), aur hatne par (unmounting). Inka use aap data fetch, subscription setup, ya cleanup jaise kaam ke liye kar sakte hain.

- **Mounting:** Jab component banta hai aur DOM me aata hai. Methods: constructor, componentDidMount.
- **Updating:** Jab props ya state change hoti hai. Methods: shouldComponentUpdate, componentDidUpdate.
- **Unmounting:** Jab component DOM se hata diya jata hai. Method: componentWillUnmount.

**Udaharan:**

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentDidUpdate() {
    console.log('Component did update');
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}
```

**Tulanatmak Udaharan:**
Jaise insaan ki zindagi: janm (mount), badlav (update), aur mrityu (unmount).

---

## 17. How do functional components handle the lifecycle method of class components?

**English:**
Functional components use React Hooks, especially the `useEffect` hook, to handle lifecycle events. `useEffect` can mimic componentDidMount, componentDidUpdate, and componentWillUnmount by controlling its dependencies and returning a cleanup function.

- **componentDidMount:** useEffect with empty dependency array (`[]`).
- **componentDidUpdate:** useEffect with specific dependencies.
- **componentWillUnmount:** Return a cleanup function from useEffect.

**Example:**

```jsx
import React, { useEffect } from 'react';
function MyComponent() {
  useEffect(() => {
    // Runs on mount
    console.log('Mounted');
    return () => {
      // Runs on unmount
      console.log('Unmounted');
    };
  }, []); // Empty array = only on mount/unmount

  useEffect(() => {
    // Runs on every update of 'count'
    console.log('Count updated');
  }, [count]);

  return <div>Example</div>;
}
```

**Hindi:**
Functional components lifecycle events ko handle karne ke liye React Hooks ka use karte hain, khaaskar `useEffect` hook. `useEffect` se aap componentDidMount, componentDidUpdate, aur componentWillUnmount jaise behavior la sakte hain, dependencies aur cleanup function ke sath.

- **componentDidMount:** useEffect me empty dependency array (`[]`).
- **componentDidUpdate:** useEffect me specific dependencies.
- **componentWillUnmount:** useEffect se return hone wala cleanup function.

**Udaharan:**

```jsx
import React, { useEffect } from 'react';
function MyComponent() {
  useEffect(() => {
    // Mount par chalega
    console.log('Mounted');
    return () => {
      // Unmount par chalega
      console.log('Unmounted');
    };
  }, []); // Empty array = sirf mount/unmount par

  useEffect(() => {
    // Jab 'count' update ho
    console.log('Count updated');
  }, [count]);

  return <div>Example</div>;
}
```

---

## 18. How to handle side effects in class and functional components?

**English:**
Side effects are operations like data fetching, subscriptions, timers, or manually changing the DOM. In class components, side effects are handled in lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount). In functional components, the `useEffect` hook is used for all side effects. Cleanup (like unsubscribing or clearing timers) is done in the return function of useEffect.

**Example:**

```jsx
// Class Component
componentDidMount() {
  this.timer = setInterval(() => console.log('Tick'), 1000);
}
componentWillUnmount() {
  clearInterval(this.timer);
}

// Functional Component
useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);
  return () => clearInterval(timer);
}, []);
```

**Hindi:**
Side effects jaise data fetch, subscription, timer set karna, ya DOM ko manually change karna. Class components me side effects lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount) me handle hote hain. Functional components me `useEffect` hook ka use hota hai. Cleanup (jaise unsubscribe ya timer clear karna) useEffect ke return function me hota hai.

**Udaharan:**

```jsx
// Class Component
componentDidMount() {
  this.timer = setInterval(() => console.log('Tick'), 1000);
}
componentWillUnmount() {
  clearInterval(this.timer);
}

// Functional Component
useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);
  return () => clearInterval(timer);
}, []);
```

---

## 19. What are React hooks? List out hooks you have used till date?

**English:**
Hooks are special functions introduced in React 16.8 that let you use state, lifecycle, and other React features in functional components. They make functional components as powerful as class components.

**Common Hooks:**

- `useState`: For state management.
- `useEffect`: For side effects (data fetching, subscriptions).
- `useContext`: For accessing context values.
- `useRef`: For referencing DOM elements or storing mutable values.
- `useReducer`: For complex state logic.
- `useMemo`: For memoizing expensive calculations.
- `useCallback`: For memoizing functions.
- `useLayoutEffect`, `useImperativeHandle`, etc.

**Example:**

```jsx
const [count, setCount] = useState(0);
useEffect(() => { /* side effect */ }, []);
```

**Hindi:**
Hooks React 16.8 me aaye special functions hain jo functional components me state, lifecycle, aur dusre React features use karne dete hain. Inse functional components bhi class components ki tarah powerful ho gaye hain.

**Common Hooks:**

- `useState`: State manage karne ke liye.
- `useEffect`: Side effects (data fetch, subscription) ke liye.
- `useContext`: Context value access karne ke liye.
- `useRef`: DOM element ya mutable value store karne ke liye.
- `useReducer`: Complex state logic ke liye.
- `useMemo`: Expensive calculation ko memoize karne ke liye.
- `useCallback`: Functions ko memoize karne ke liye.
- `useLayoutEffect`, `useImperativeHandle`, etc.

**Udaharan:**

```jsx
const [count, setCount] = useState(0);
useEffect(() => { /* side effect */ }, []);
```

---

## 20. Difference between useState and useRef hooks in form handling

**English:**

- `useState` is used to store and update state values. When the value changes, the component re-renders.
- `useRef` stores a mutable value that does not cause a re-render when changed. It is often used to access DOM elements directly (like focusing an input) or to keep a value across renders without triggering a re-render.

**Example:**

```jsx
// useState for input value
const [value, setValue] = useState("");
<input value={value} onChange={e => setValue(e.target.value)} />

// useRef for direct DOM access
const inputRef = useRef();
<input ref={inputRef} />
```

**Hindi:**

- `useState` state value ko store aur update karta hai. Value change hone par component re-render hota hai.
- `useRef` ek mutable value store karta hai, lekin value change hone par re-render nahi hota. Aksar DOM element ko directly access karne ya kisi value ko render ke beech store rakhne ke liye use hota hai.

**Udaharan:**

```jsx
// useState input value ke liye
const [value, setValue] = useState("");
<input value={value} onChange={e => setValue(e.target.value)} />

// useRef direct DOM access ke liye
const inputRef = useRef();
<input ref={inputRef} />
```

---

## 21. What are the differences between useState, useContext and useReducer?

**English:**

- **useState:** Used for managing local state in a component. Simple and best for small, isolated pieces of state.
- **useContext:** Used to access global data provided by a Context Provider. Useful for sharing data (like theme, user info) across many components without prop drilling.
- **useReducer:** Used for complex state logic, similar to Redux reducers. Good for managing state transitions, especially when state depends on previous values or has multiple sub-values.

**When to use what?**

- useState: For simple, local state.
- useContext: For global/shared state.
- useReducer: For complex state logic or when actions are needed.

**Example:**

```jsx
// useState
const [count, setCount] = useState(0);

// useContext
const theme = useContext(ThemeContext);

// useReducer
const [state, dispatch] = useReducer(reducer, initialState);
```

**Hindi:**

- **useState:** Component ke andar local state manage karne ke liye. Simple aur chhote state ke liye best.
- **useContext:** Context Provider se global data access karne ke liye. Jab data ko kai components me bina prop drilling ke share karna ho.
- **useReducer:** Complex state logic ke liye, Redux reducer ki tarah. Jab state transitions ya multiple sub-values manage karni ho.

**Kab kya use karein?**

- useState: Simple, local state ke liye.
- useContext: Global/shared state ke liye.
- useReducer: Complex state logic ya actions ke liye.

**Udaharan:**

```jsx
// useState
const [count, setCount] = useState(0);

// useContext
const theme = useContext(ThemeContext);

// useReducer
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## 22. What are the rules of hooks in React?

**English:**

1. **Only call hooks at the top level:** Don't call hooks inside loops, conditions, or nested functions. Always use them at the top level of your React function.
2. **Only call hooks from React functions:** Hooks can only be called from React function components or custom hooks, not from regular JavaScript functions or class components.

**Why?**
These rules ensure that React can keep track of the order and state of hooks between renders.

**Example (Correct):**

```jsx
function MyComponent() {
  const [count, setCount] = useState(0); // Top level
  // ...
}
```

**Example (Incorrect):**

```jsx
if (someCondition) {
  useState(0); // ❌ Not allowed
}
```

**Hindi:**

1. **Hooks sirf top level par call karein:** Hooks ko kabhi bhi loop, condition, ya nested function ke andar call na karein. Hamesha React function ke top level par use karein.
2. **Hooks sirf React functions se call karein:** Hooks sirf React function components ya custom hooks se hi call hone chahiye, normal JavaScript function ya class component se nahi.

**Kyon?**
In rules se React ko har render me hooks ki order aur state track karne me asani hoti hai.

**Sahi Udaharan:**

```jsx
function MyComponent() {
  const [count, setCount] = useState(0); // Top level
  // ...
}
```

**Galat Udaharan:**

```jsx
if (someCondition) {
  useState(0); // ❌ Allowed nahi hai
}
```

---

## 23. What are custom hooks? Have you used it in a project, provide an example?

**English:**
Custom hooks are user-defined functions that use React hooks to share reusable logic between components. They help avoid code duplication and make code more modular. Custom hooks always start with "use" (e.g., useFetch, useForm).

**Example:**

```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

// Usage
function Counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
```

**Hindi:**
Custom hooks user-defined functions hain jo React hooks ka use karke logic ko components ke beech share karte hain. Inse code duplication kam hota hai aur code modular banta hai. Custom hooks ka naam hamesha "use" se shuru hota hai (jaise useFetch, useForm).

**Udaharan:**

```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

// Use karna
function Counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
```

---

## 24. What is a Higher Order Component? Explain with examples

**English:**
A Higher Order Component (HOC) is a function that takes a component and returns a new component with enhanced or additional functionality. HOCs are used for code reuse, logic abstraction, and manipulating props. Common use cases include authentication, theming, and logging.

**Example:**

```jsx
function withLogger(WrappedComponent) {
  return function(props) {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
}

const EnhancedComponent = withLogger(MyComponent);
```

**Hindi:**
Higher Order Component (HOC) ek function hai jo ek component leta hai aur usme extra functionality add karke naya component return karta hai. HOC ka use code reuse, logic abstraction, aur props manipulate karne ke liye hota hai. Common use cases: authentication, theming, logging.

**Udaharan:**

```jsx
function withLogger(WrappedComponent) {
  return function(props) {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
}

const EnhancedComponent = withLogger(MyComponent);
```

---

## 25. What is the React reconciliation process?

**English:**
Reconciliation is the process by which React updates the DOM. When state or props change, React creates a new virtual DOM, compares it with the previous one (diffing), and updates only the changed parts in the real DOM. This makes updates efficient and fast.

**Analogy:**
Like a teacher checking only the changed answers in a test, not the whole paper.

**Hindi:**
Reconciliation ek process hai jisme React state ya props change hone par naya virtual DOM banata hai, purane se compare karta hai (diffing), aur sirf badle hue parts ko real DOM me update karta hai. Isse updates efficient aur fast hote hain.

**Tulanatmak Udaharan:**
Jaise ek teacher sirf badle hue answers check karta hai, pura paper nahi.

---

## 26. How does React compare virtual DOM with real DOM?

**English:**
When a component's state or props change, React creates a new virtual DOM tree. It then compares this new virtual DOM with the previous one using a process called "diffing." React identifies what has changed (added, removed, or updated nodes) and generates a minimal set of changes (patches) to update the real DOM. This selective update process is called reconciliation and makes React very efficient, as it avoids unnecessary DOM manipulations.

**Example:**
If you update a single item in a list, React only updates that item in the real DOM, not the whole list.

**Analogy:**
Like a spellchecker that only marks the changed words in a document, not the whole text.

**Hindi:**
Jab component ki state ya props change hoti hai, React naya virtual DOM tree banata hai. Fir React naye aur purane virtual DOM ko compare karta hai (diffing process). React sirf wahi changes (add, remove, update) identify karta hai jo real DOM me apply karne hain. Is process ko reconciliation kehte hain. Isse React bahut efficient ho jata hai, kyunki zarurat se zyada DOM manipulation nahi hoti.

**Udaharan:**
Agar aap list me sirf ek item update karte hain, toh React sirf usi item ko real DOM me update karta hai, poori list ko nahi.

**Tulanatmak Udaharan:**
Jaise ek spellchecker sirf badle hue shabdon ko mark karta hai, pura text nahi.

---

## 27. What are context API hooks? Explain with an example

**English:**
The Context API in React allows you to share data (like theme, user info, language) globally across the component tree without passing props at every level. The main hooks are `useContext` (to consume context) and `createContext` (to create context). You wrap your components with a Provider to supply the value, and any child can access it using useContext.

**Example:**

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? '#333' : '#fff' }}>Theme: {theme}</button>;
}
```

**Hindi:**
Context API React me data (jaise theme, user info, language) ko poore component tree me bina har level par props pass kiye share karne ka tarika hai. Main hooks hain `useContext` (consume karne ke liye) aur `createContext` (context banane ke liye). Aap Provider se value supply karte hain, aur koi bhi child useContext se value le sakta hai.

**Udaharan:**

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? '#333' : '#fff' }}>Theme: {theme}</button>;
}
```

---

## 28. What is the difference between useCallback and useMemo hooks?

**English:**

- **useCallback:** Returns a memoized version of a callback function. It is used to prevent unnecessary re-creation of functions on every render, especially when passing callbacks to child components.
- **useMemo:** Returns a memoized value. It is used to avoid expensive calculations on every render by caching the result until dependencies change.

**When to use?**

- useCallback: When you want to memoize a function.
- useMemo: When you want to memoize a computed value.

**Example:**

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**Hindi:**

- **useCallback:** Ek memoized function return karta hai. Jab aapko function ko har render par dobara create hone se bachana ho, khaaskar jab callback child component ko pass karna ho.
- **useMemo:** Ek memoized value return karta hai. Jab aapko koi mehenga calculation har render par dobara nahi karna ho, tab useMemo ka use hota hai.

**Kab use karein?**

- useCallback: Jab function ko memoize karna ho.
- useMemo: Jab computed value ko memoize karna ho.

**Udaharan:**

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

---

## 29. Difference between context API and redux

**English:**

- **Context API:** Built-in React feature for sharing global data (like theme, user info) across components. Simple, minimal setup, best for small to medium apps or simple global state.
- **Redux:** External state management library. Centralizes all app state in a single store, uses actions and reducers for predictable state changes. More powerful, scalable, and suited for large, complex apps with lots of state logic.

**When to use?**

- Context API: For simple, less-frequently changing global data.
- Redux: For complex, frequently changing, or large-scale state management.

**Analogy:**
Context API is like a notice board in a classroom; Redux is like a school office managing all records.

**Hindi:**

- **Context API:** React ka built-in feature hai jo global data (jaise theme, user info) ko components me share karta hai. Simple hai, kam setup chahiye, chhote ya medium apps ke liye best hai.
- **Redux:** Ek external state management library hai. Saara app state ek store me centralize karta hai, actions aur reducers se state changes ko predictable banata hai. Powerful, scalable, aur bade, complex apps ke liye suitable hai.

**Kab use karein?**

- Context API: Simple, kam change hone wale global data ke liye.
- Redux: Complex, frequently changing, ya large-scale state management ke liye.

**Tulanatmak Udaharan:**
Context API ek classroom ki notice board jaise hai; Redux ek school office jaise hai jo sabhi records manage karta hai.

---

## 30. What is the redux toolkit? How does it simplify redux?

**English:**
Redux Toolkit is the official, recommended way to write Redux logic. It provides utilities to simplify Redux setup, reduce boilerplate, and encourage best practices. Features include createSlice (for reducers and actions), configureStore (for store setup), and built-in support for middleware and dev tools. It makes Redux code shorter, easier to read, and less error-prone.

**Example:**

```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});
```

**Hindi:**
Redux Toolkit Redux logic likhne ka official, recommended tarika hai. Yeh Redux setup ko simple banata hai, boilerplate kam karta hai, aur best practices ko follow karne me madad karta hai. Isme createSlice (reducers aur actions ke liye), configureStore (store setup ke liye), aur middleware/dev tools ka support built-in hai. Isse Redux ka code chhota, readable, aur kam galtiyon wala ho jata hai.

**Udaharan:**

```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});
```

---

## 31. What are middleware in redux?

**English:**
Middleware in Redux are functions that sit between dispatching an action and the moment it reaches the reducer. They allow you to intercept, modify, or perform side effects (like async API calls, logging, analytics) before actions reach the reducer. Common middleware include redux-thunk (for async logic), redux-saga, and logger.

**Example:**

```js
const logger = store => next => action => {
  console.log('Dispatching:', action);
  let result = next(action);
  console.log('Next state:', store.getState());
  return result;
};
```

**Hindi:**
Redux me middleware wo functions hote hain jo action dispatch hone aur reducer tak pahunchne ke beech me aate hain. Ye actions ko intercept, modify, ya side effects (jaise async API call, logging, analytics) perform karne ke liye use hote hain. Common middleware hain redux-thunk (async logic ke liye), redux-saga, aur logger.

**Udaharan:**

```js
const logger = store => next => action => {
  console.log('Dispatching:', action);
  let result = next(action);
  console.log('Next state:', store.getState());
  return result;
};
```

---

## 32. How would you implement a global state without redux?

**English:**
You can implement global state in React without Redux using the Context API and useReducer hook. Context provides a way to share state across the component tree, and useReducer manages complex state logic. This approach is suitable for small to medium apps.

**Example:**

```jsx
const GlobalStateContext = React.createContext();
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    default: return state;
  }
}
function GlobalStateProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}
```

**Hindi:**
Redux ke bina React me global state implement karne ke liye Context API aur useReducer hook ka use kar sakte hain. Context se state poore component tree me share hoti hai, aur useReducer se complex state logic manage hota hai. Yeh approach chhote ya medium apps ke liye suitable hai.

**Udaharan:**

```jsx
const GlobalStateContext = React.createContext();
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    default: return state;
  }
}
function GlobalStateProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}
```

---

## 33. What is a synthetic event in react?

**English:**
A synthetic event is React's cross-browser wrapper around the browser's native event. It normalizes events so that they have consistent properties across different browsers. Synthetic events work identically across all browsers, making event handling in React more reliable and predictable.

**Example:**

```jsx
function handleClick(event) {
  // event is a SyntheticEvent
  console.log(event.type); // 'click'
}
<button onClick={handleClick}>Click me</button>
```

**Hindi:**
Synthetic event React ka ek wrapper hai jo browser ke native event ko cross-browser compatible banata hai. Isse har browser me event properties same rehti hain, jisse event handling reliable aur predictable ho jati hai.

**Udaharan:**

```jsx
function handleClick(event) {
  // event ek SyntheticEvent hai
  console.log(event.type); // 'click'
}
<button onClick={handleClick}>Click me</button>
```

---

## 34. What is the difference between a synthetic event and a real DOM event?

**English:**

- **Synthetic Event:** Provided by React, normalizes event properties and behavior across browsers. Has the same interface as native events but works identically in all browsers. Synthetic events are pooled for performance, so their properties may be nullified after the event handler runs.
- **Real DOM Event:** Native browser event, may have different properties or behavior in different browsers.

**Example:**
In React, the event object in an onClick handler is a SyntheticEvent, not the browser's native event.

**Hindi:**

- **Synthetic Event:** React dwara diya gaya event hai, jo har browser me event properties aur behavior ko same banata hai. Native event jaise hi interface hota hai, lekin sabhi browsers me ek jaise kaam karta hai. Performance ke liye synthetic events pool kiye jate hain, isliye handler ke baad properties null ho sakti hain.
- **Real DOM Event:** Browser ka asli event, jo alag browsers me alag properties ya behavior rakh sakta hai.

**Udaharan:**
React me onClick handler me milne wala event object ek SyntheticEvent hota hai, browser ka native event nahi.

---

## 35. How to pass arguments to the event handler in react?

**English:**
You can pass arguments to an event handler by using an inline arrow function or by binding the function. The event object is automatically passed as the last argument.

**Example:**

```jsx
function handleClick(id, event) {
  console.log('ID:', id);
  console.log('Event:', event.type);
}
<button onClick={e => handleClick(42, e)}>Click me</button>
```

**Hindi:**
Aap event handler ko arguments pass karne ke liye inline arrow function ya function binding ka use kar sakte hain. Event object hamesha last argument ke roop me pass hota hai.

**Udaharan:**

```jsx
function handleClick(id, event) {
  console.log('ID:', id);
  console.log('Event:', event.type);
}
<button onClick={e => handleClick(42, e)}>Click me</button>
```

---

## 36. How do you handle dynamic routing in React?

**English:**
Dynamic routing in React is typically handled using libraries like React Router. Dynamic routing means the routes can change based on user input, data, or application state. React Router allows you to define routes with parameters (e.g., /user/:id), nested routes, and programmatic navigation.

**Example:**

```jsx
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:id" component={User} />
      </Switch>
    </Router>
  );
}
```

**Hindi:**
React me dynamic routing usually React Router jaise library se handle hoti hai. Dynamic routing ka matlab hai ki routes user input, data, ya app state ke hisab se change ho sakte hain. React Router me aap parameterized routes (jaise /user/:id), nested routes, aur programmatic navigation define kar sakte hain.

**Udaharan:**

```jsx
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:id" component={User} />
      </Switch>
    </Router>
  );
}
```

---

## 37. How do you manage form validation in React? Explain with examples

**English:**
Form validation in React can be managed using controlled components, custom validation logic, or libraries like Formik and React Hook Form. You can validate fields on change, blur, or submit, and show error messages accordingly.

**Example (Custom validation):**

```jsx
function MyForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const validate = value => /\S+@\S+\.\S+/.test(value);
  const handleSubmit = e => {
    e.preventDefault();
    if (!validate(email)) setError("Invalid email");
    else setError("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      {error && <span>{error}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Hindi:**
React me form validation controlled components, custom validation logic, ya Formik/React Hook Form jaise libraries se ki ja sakti hai. Aap fields ko change, blur, ya submit par validate kar sakte hain aur error messages dikha sakte hain.

**Udaharan (Custom validation):**

```jsx
function MyForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const validate = value => /\S+@\S+\.\S+/.test(value);
  const handleSubmit = e => {
    e.preventDefault();
    if (!validate(email)) setError("Invalid email");
    else setError("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      {error && <span>{error}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 38. How would you implement lazy loading with routes?

**English:**
Lazy loading means loading components only when they are needed, which improves performance. In React, you can use `React.lazy` and `Suspense` to load route components lazily. This is especially useful for large apps with many routes.

**Example:**

```jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}
```

**Hindi:**
Lazy loading ka matlab hai components ko tabhi load karna jab zarurat ho, jisse performance improve hoti hai. React me aap `React.lazy` aur `Suspense` ka use karke route components ko lazy load kar sakte hain. Yeh large apps me bahut useful hai.

**Udaharan:**

```jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}
```

---

## 39. How do you optimize forms with hundreds of input fields in React?

**English:**
Optimizing large forms involves minimizing unnecessary re-renders and managing state efficiently. Techniques include:

- Splitting the form into smaller components.
- Using `React.memo` to prevent unnecessary renders.
- Managing state locally for each field or using libraries like Formik/React Hook Form, which use uncontrolled components and refs for better performance.
- Virtualizing long lists of fields.

**Example:**

```jsx
const Field = React.memo(function Field({ value, onChange }) {
  return <input value={value} onChange={onChange} />;
});
```

**Hindi:**
Bade forms ko optimize karne ke liye unnecessary re-renders ko kam karna aur state ko efficiently manage karna zaruri hai. Tarike:

- Form ko chhote components me todna.
- `React.memo` ka use karna.
- Har field ke liye local state ya Formik/React Hook Form jaise libraries ka use karna (ye uncontrolled components aur refs ka use karte hain).
- Fields ki lambi list ko virtualize karna.

**Udaharan:**

```jsx
const Field = React.memo(function Field({ value, onChange }) {
  return <input value={value} onChange={onChange} />;
});
```

---

## 40. How would I implement a multistep form with conditional rendering between steps?

**English:**
A multistep form can be implemented by maintaining a step state and rendering different form sections based on the current step. Conditional rendering is used to show/hide steps. You can also validate each step before moving to the next.

**Example:**

```jsx
function MultiStepForm() {
  const [step, setStep] = useState(1);
  return (
    <form>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <button type="button" onClick={() => setStep(step + 1)}>Next</button>
    </form>
  );
}
```

**Hindi:**
Multistep form banane ke liye ek step state maintain karte hain aur current step ke hisab se alag form sections render karte hain. Conditional rendering se steps ko show/hide kiya jata hai. Har step par validation bhi kar sakte hain.

**Udaharan:**

```jsx
function MultiStepForm() {
  const [step, setStep] = useState(1);
  return (
    <form>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <button type="button" onClick={() => setStep(step + 1)}>Next</button>
    </form>
  );
}
```

---

## 41. What are the keys to React? Why are they important in lists?

**English:**
Keys are special string attributes you must include when creating lists of elements in React. They help React identify which items have changed, been added, or removed. Keys make list rendering efficient by allowing React to update only the changed items instead of re-rendering the whole list. Keys should be unique among siblings, commonly using IDs or unique values.

**Example:**

```jsx
const items = [1, 2, 3];
<ul>
  {items.map(item => <li key={item}>{item}</li>)}
</ul>
```

**Analogy:**
Like roll numbers in a classroom—each student (element) has a unique number (key) for identification.

**Hindi:**
Keys React me ek special string attribute hai jo list banate waqt har element ko dena zaruri hai. Keys se React ko pata chalta hai ki kaunse items change, add, ya remove hue hain. Isse list rendering efficient ho jati hai, kyunki React sirf badle hue items ko update karta hai, poori list ko nahi. Keys siblings me unique honi chahiye, aam taur par ID ya unique value use hoti hai.

**Udaharan:**

```jsx
const items = [1, 2, 3];
<ul>
  {items.map(item => <li key={item}>{item}</li>)}
</ul>
```

**Tulanatmak Udaharan:**
Jaise classroom me har student ka roll number unique hota hai, waise hi har element ka key unique hota hai.

---

## 42. What is react.memo and how does it work?

**English:**
`React.memo` is a higher-order component that memoizes a functional component. It prevents unnecessary re-renders by reusing the last rendered output if the props have not changed. This optimization is useful for performance, especially in large lists or complex UIs.

**Example:**

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  // ...
});
```

**How it works:**
If the props are the same as the previous render, React skips rendering and reuses the previous result.

**Hindi:**
`React.memo` ek higher-order component hai jo functional component ko memoize karta hai. Agar props nahi badle hain toh yeh dobara render nahi karta, balki pichla output hi reuse karta hai. Yeh performance ke liye useful hai, khaaskar badi lists ya complex UI me.

**Udaharan:**

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  // ...
});
```

**Kaise kaam karta hai:**
Agar props pichle render jaise hi hain, toh React render skip kar deta hai aur pichla result use karta hai.

---

## 43. What is the react pure component? Explain with roles and use cases

**English:**
A PureComponent in React is a class component that implements `shouldComponentUpdate` with a shallow prop and state comparison. It prevents unnecessary re-renders if the props and state have not changed. PureComponent is useful for optimizing performance in components that render the same output for the same props and state.

**Example:**

```jsx
class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}
```

**Use cases:**

- Large lists
- Components with expensive rendering
- When you want to avoid unnecessary updates

**Hindi:**
React me PureComponent ek class component hai jo `shouldComponentUpdate` ko shallow comparison ke sath implement karta hai. Agar props ya state nahi badle hain toh yeh dobara render nahi hota. PureComponent ka use performance optimize karne ke liye hota hai, jab component same props/state par same output deta hai.

**Udaharan:**

```jsx
class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}
```

**Use cases:**

- Badi lists
- Expensive rendering wale components
- Jab unnecessary updates avoid karne ho

---

## 44. What is the concept called virtualization in react?

**English:**
Virtualization is a technique to efficiently render large lists by only rendering the visible items in the viewport, not the entire list. Libraries like `react-window` and `react-virtualized` implement this. This improves performance and reduces memory usage.

**Example:**

```jsx
import { FixedSizeList as List } from 'react-window';
<List height={150} itemCount={1000} itemSize={35} width={300}>
  {({ index, style }) => <div style={style}>Row {index}</div>}
</List>
```

**Analogy:**
Like a news feed that only loads posts as you scroll, not all at once.

**Hindi:**
Virtualization ek technique hai jisme badi list me sirf wahi items render hote hain jo viewport me dikh rahe hain, poori list nahi. `react-window` aur `react-virtualized` jaise libraries iska use karti hain. Isse performance improve hoti hai aur memory kam lagti hai.

**Udaharan:**

```jsx
import { FixedSizeList as List } from 'react-window';
<List height={150} itemCount={1000} itemSize={35} width={300}>
  {({ index, style }) => <div style={style}>Row {index}</div>}
</List>
```

**Tulanatmak Udaharan:**
Jaise news feed me aap scroll karte hain toh sirf dikhne wale posts load hote hain, sab ek sath nahi.

---

## 45. How do you optimize rendering of large lists in react?

**English:**
To optimize large lists:

- Use virtualization (`react-window`, `react-virtualized`) to render only visible items.
- Use `React.memo` or `PureComponent` to prevent unnecessary re-renders.
- Use keys for list items.
- Split lists into smaller components if possible.
- Avoid inline functions/objects as props.

**Example:**

```jsx
import { FixedSizeList as List } from 'react-window';
<List height={400} itemCount={10000} itemSize={35} width={300}>
  {({ index, style }) => <Row index={index} style={style} />}
</List>
```

**Hindi:**
Badi lists ko optimize karne ke liye:

- Virtualization (`react-window`, `react-virtualized`) ka use karein.
- `React.memo` ya `PureComponent` ka use karein.
- List items ke liye keys ka use karein.
- List ko chhote components me baant dein.
- Inline functions/objects ko props me na bhejein.

**Udaharan:**

```jsx
import { FixedSizeList as List } from 'react-window';
<List height={400} itemCount={10000} itemSize={35} width={300}>
  {({ index, style }) => <Row index={index} style={style} />}
</List>
```

---

## 46. How to avoid unnecessary rerendering in react?

**English:**
To avoid unnecessary rerendering in React:

- Use `React.memo` for functional components to memoize and prevent re-render if props haven't changed.
- Use `PureComponent` for class components for shallow prop/state comparison.
- Use keys correctly in lists.
- Avoid creating new functions/objects inline as props.
- Use `useCallback` and `useMemo` hooks to memoize functions and values.
- Split large components into smaller ones so only affected parts re-render.
- Use shouldComponentUpdate (class) or React.memo (function) for custom control.

**Example:**

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  // ...
});

const memoizedCallback = useCallback(() => doSomething(), [dependency]);
```

**Hindi:**
React me unnecessary rerendering avoid karne ke liye:

- Functional components me `React.memo` ka use karein.
- Class components me `PureComponent` ka use karein.
- Lists me keys sahi tarike se use karein.
- Inline functions/objects ko props me na bhejein.
- Functions/values ko memoize karne ke liye `useCallback` aur `useMemo` ka use karein.
- Bade components ko chhote components me baant dein taki sirf affected part hi re-render ho.
- shouldComponentUpdate (class) ya React.memo (function) se custom control karein.

**Udaharan:**

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  // ...
});

const memoizedCallback = useCallback(() => doSomething(), [dependency]);
```

---

## 47. What is the purpose of error boundaries in react?

**English:**
Error boundaries are special React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app. They help prevent the entire UI from breaking due to a single component error. Error boundaries catch errors in rendering, lifecycle methods, and constructors of the whole tree below them.

**Example:**

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Log error
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

**Hindi:**
Error boundaries React ke special components hain jo apne child component tree me aane wale JavaScript errors ko catch karte hain, error log karte hain, aur fallback UI dikhate hain taki poora app crash na ho. Yeh rendering, lifecycle methods, aur constructors me aane wale errors ko catch karte hain.

**Udaharan:**

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Error log karen
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

---

## 48. How do you handle errors in asynchronous operations in react?

**English:**
To handle errors in async operations (like API calls) in React:

- Use try/catch blocks in async functions.
- Set error state and show error messages in the UI.
- Use error boundaries for errors in rendering, but not for async errors inside event handlers or effects.
- Optionally, use libraries like React Query or SWR for advanced error handling.

**Example:**

```jsx
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  } catch (error) {
    setError(error.message);
  }
}
```

**Hindi:**
Async operations (jaise API call) me error handle karne ke liye:

- Async functions me try/catch ka use karein.
- Error state set karein aur UI me error message dikhayein.
- Rendering errors ke liye error boundaries use karein, lekin async event handlers/effects ke errors ke liye nahi.
- Advanced error handling ke liye React Query ya SWR jaise libraries ka use karein.

**Udaharan:**

```jsx
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  } catch (error) {
    setError(error.message);
  }
}
```

---

## 49. How do you fetch data in react? explain with examples

**English:**
Data fetching in React is usually done using the `fetch` API, `axios`, or libraries like React Query. You typically fetch data inside `useEffect` (for functional components) or lifecycle methods (for class components), and store the result in state.

**Example (Functional Component):**

```jsx
import { useState, useEffect } from 'react';
function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message));
  }, []);
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;
  return <div>Data: {JSON.stringify(data)}</div>;
}
```

**Hindi:**
React me data fetch karne ke liye aam taur par `fetch` API, `axios`, ya React Query jaise libraries ka use hota hai. Data fetching aksar `useEffect` (functional component) ya lifecycle methods (class component) me hoti hai, aur result state me store hota hai.

**Udaharan (Functional Component):**

```jsx
import { useState, useEffect } from 'react';
function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message));
  }, []);
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;
  return <div>Data: {JSON.stringify(data)}</div>;
}
```

---

## 50. What is Axios and how is it different from fetch API?

**English:**
Axios is a popular third-party HTTP client for making API requests. It provides a simpler API, automatic JSON transformation, request/response interceptors, and better error handling compared to the native fetch API. Axios also supports older browsers and can cancel requests.

**Differences:**

- Axios automatically transforms response data to JSON; fetch requires manual parsing.
- Axios has built-in request/response interceptors.
- Axios throws errors for HTTP error status codes; fetch only rejects on network errors.
- Axios supports request cancellation.

**Example:**

```js
import axios from 'axios';
axios.get('/api/data')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

**Hindi:**
Axios ek popular third-party HTTP client hai jo API requests bhejne ke liye use hota hai. Iska API simple hai, yeh response ko automatic JSON me badal deta hai, interceptors aur better error handling provide karta hai, aur purane browsers ko bhi support karta hai.

**Antar:**

- Axios response ko automatic JSON me badal deta hai; fetch me aapko manually parse karna padta hai.
- Axios me request/response interceptors built-in hote hain.
- Axios HTTP error status par error throw karta hai; fetch sirf network error par reject hota hai.
- Axios request cancel kar sakta hai.

**Udaharan:**

```js
import axios from 'axios';
axios.get('/api/data')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

---

## 51. How do you securely store API keys in react?

**English:**
API keys should never be exposed in the frontend code, as anyone can view them in the browser. For public APIs, you can use environment variables (e.g., .env files) and access them via process.env, but this only hides them from your source code, not from the final bundle. For sensitive keys, always store them on a backend server and create an API endpoint that your React app can call. Never commit API keys to version control.

**Example:**

- Store keys in a `.env` file (for build-time variables):

  ```env
  REACT_APP_API_KEY=your_key_here
  ```

- Access in code:

  ```js
  const apiKey = process.env.REACT_APP_API_KEY;
  ```

- For sensitive keys, use a backend proxy.

**Hindi:**
API keys ko kabhi bhi frontend code me expose nahi karna chahiye, kyunki browser me koi bhi unhe dekh sakta hai. Public APIs ke liye aap environment variables (.env file) ka use kar sakte hain aur process.env se access kar sakte hain, lekin yeh sirf source code se chhupata hai, final bundle se nahi. Sensitive keys hamesha backend server par store karein aur ek API endpoint banayein jise React app call kare. API keys ko kabhi bhi version control me commit na karein.

**Udaharan:**

- `.env` file me key store karein (build time ke liye):

  ```env
  REACT_APP_API_KEY=your_key_here
  ```

- Code me access karein:

  ```js
  const apiKey = process.env.REACT_APP_API_KEY;
  ```

- Sensitive keys ke liye backend proxy ka use karein.

---

## 52. How would you implement retries logic for failed API requests in react?

**English:**
To implement retry logic, you can write a function that attempts the API call, and if it fails, retries after a delay, up to a maximum number of attempts. Libraries like axios-retry or React Query have built-in retry support.

**Example (manual retry):**

```js
async function fetchWithRetry(url, options, retries = 3, delay = 1000) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Request failed');
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      await new Promise(res => setTimeout(res, delay));
      return fetchWithRetry(url, options, retries - 1, delay);
    } else {
      throw error;
    }
  }
}
```

**Hindi:**
Retry logic implement karne ke liye aap ek function likh sakte hain jo API call kare, aur agar fail ho jaye toh kuch delay ke baad dobara try kare, maximum attempts tak. Axios-retry ya React Query jaise libraries me built-in retry support hota hai.

**Udaharan (manual retry):**

```js
async function fetchWithRetry(url, options, retries = 3, delay = 1000) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Request failed');
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      await new Promise(res => setTimeout(res, delay));
      return fetchWithRetry(url, options, retries - 1, delay);
    } else {
      throw error;
    }
  }
}
```

---

## 53. What are fragments in react? Why are they used?

**English:**
Fragments let you group multiple elements without adding extra nodes to the DOM. This is useful when a component needs to return multiple elements but you don't want to wrap them in a div or another element, keeping the DOM clean.

**Example:**

```jsx
import React from 'react';
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}
```

**Hindi:**
Fragments aapko multiple elements ko group karne dete hain bina extra node (jaise div) DOM me add kiye. Jab component ko ek se jyada elements return karne ho aur aap DOM ko clean rakhna chahte hain, tab fragments ka use hota hai.

**Udaharan:**

```jsx
import React from 'react';
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}
```

---

## 54. What is the significance of React.StrictMode?

**English:**
`React.StrictMode` is a wrapper component that helps you find potential problems in your React app. It activates additional checks and warnings for its descendants, such as identifying unsafe lifecycle methods, legacy API usage, and side effects. It does not render any visible UI and only runs in development mode.

**Example:**

```jsx
import React from 'react';
<React.StrictMode>
  <App />
</React.StrictMode>
```

**Hindi:**
`React.StrictMode` ek wrapper component hai jo aapke React app me potential problems dhoondhne me madad karta hai. Yeh apne andar ke components ke liye extra checks aur warnings activate karta hai, jaise unsafe lifecycle methods, purane API ka use, ya side effects. Yeh koi visible UI render nahi karta aur sirf development mode me chalta hai.

**Udaharan:**

```jsx
import React from 'react';
<React.StrictMode>
  <App />
</React.StrictMode>
```

---

## 55. How do you identify and fix the memory leaks in react?

**English:**
Memory leaks in React often happen when subscriptions, timers, or async operations are not cleaned up when a component unmounts. To identify leaks, use browser dev tools (Performance/Memory tabs) and look for increasing memory usage. To fix, always clean up side effects in `useEffect` (return a cleanup function) or in `componentWillUnmount` for class components.

**Example:**

```jsx
useEffect(() => {
  const timer = setInterval(() => {/* ... */}, 1000);
  return () => clearInterval(timer); // Cleanup
}, []);
```

**Hindi:**
React me memory leaks tab hoti hain jab subscriptions, timers, ya async operations ko component unmount hone par clean nahi kiya jata. Leaks identify karne ke liye browser dev tools (Performance/Memory tabs) ka use karein aur memory usage dekhein. Fix karne ke liye hamesha side effects ko `useEffect` ke cleanup function me ya class component ke `componentWillUnmount` me clean karein.

**Udaharan:**

```jsx
useEffect(() => {
  const timer = setInterval(() => {/* ... */}, 1000);
  return () => clearInterval(timer); // Cleanup
}, []);
```

---

## 56. How do you build react applications for production?

**English:**
To build React apps for production:

- Use `npm run build` or `yarn build` to create an optimized build.
- The build process minifies code, optimizes assets, and creates static files for deployment.
- Use environment variables for configuration.
- Enable code splitting and lazy loading for better performance.
- Serve the build folder with a static server or deploy to platforms like Vercel, Netlify, or your own server.
- Monitor performance and errors in production.

**Example:**

```sh
npm run build
# or
yarn build
```

**Hindi:**
React app ko production ke liye build karne ke liye:

- `npm run build` ya `yarn build` ka use karein, jo optimized build banata hai.
- Build process code ko minify karta hai, assets optimize karta hai, aur static files banata hai.
- Configuration ke liye environment variables ka use karein.
- Performance ke liye code splitting aur lazy loading enable karein.
- Build folder ko static server se serve karein ya Vercel, Netlify, ya apne server par deploy karein.
- Production me performance aur errors ko monitor karein.

**Udaharan:**

```sh
npm run build
# ya
yarn build
```

---

## 57. What is the major difference between webpack and babel?

**English:**

- **Webpack** is a module bundler. It takes your JavaScript, CSS, images, and other assets, and bundles them into optimized files for the browser. Webpack can handle code splitting, asset management, and hot module replacement.
- **Babel** is a JavaScript compiler (transpiler). It converts modern JavaScript (ES6+) and JSX into backward-compatible JavaScript that browsers can understand. Babel is often used with Webpack to process code before bundling.

**Analogy:**
Webpack is like a factory that assembles and packages products; Babel is like a translator that converts one language to another before packaging.

**Hindi:**

- **Webpack** ek module bundler hai. Yeh aapke JavaScript, CSS, images, aur dusre assets ko bundle karke optimized files bana deta hai jo browser me use hoti hain. Webpack code splitting, asset management, aur hot module replacement bhi karta hai.
- **Babel** ek JavaScript compiler (transpiler) hai. Yeh modern JavaScript (ES6+) aur JSX ko purane JavaScript me badal deta hai jo sabhi browsers samajh sakein. Babel ko aksar Webpack ke sath use kiya jata hai taki code bundle hone se pehle process ho jaye.

**Tulanatmak Udaharan:**
Webpack ek factory hai jo saman assemble aur package karti hai; Babel ek translator hai jo saman ko package hone se pehle translate karta hai.

---

## 58. How do you configure webpack for react projects?

**English:**
To configure Webpack for React:

- Install webpack, webpack-cli, webpack-dev-server, babel-loader, @babel/core, @babel/preset-env, @babel/preset-react, html-webpack-plugin, and css-loader/style-loader.
- Create a `webpack.config.js` file specifying entry, output, module rules (for JS/JSX, CSS), plugins, and dev server settings.
- Use Babel loader to transpile JSX and ES6+ code.

**Example:**

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
```

**Hindi:**
React project ke liye Webpack configure karne ke steps:

- webpack, webpack-cli, webpack-dev-server, babel-loader, @babel/core, @babel/preset-env, @babel/preset-react, html-webpack-plugin, css-loader, style-loader install karein.
- `webpack.config.js` file banayein jisme entry, output, module rules (JS/JSX, CSS ke liye), plugins, aur dev server settings specify karein.
- Babel loader ka use karke JSX aur ES6+ code transpile karein.

**Udaharan:**

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
```

---

## 59. How do you optimize a react application for performance?

**English:**
To optimize React app performance:

- Use code splitting and lazy loading for routes/components.
- Use virtualization for large lists (`react-window`, `react-virtualized`).
- Use `React.memo`, `PureComponent`, `useMemo`, and `useCallback` to avoid unnecessary renders.
- Minimize state and keep it as local as possible.
- Avoid inline functions/objects as props.
- Optimize images and assets.
- Use production build (`npm run build`).
- Monitor and profile performance using React DevTools and browser tools.

**Hindi:**
React app ki performance optimize karne ke liye:

- Code splitting aur lazy loading ka use karein.
- Badi lists ke liye virtualization (`react-window`, `react-virtualized`) ka use karein.
- Unnecessary renders avoid karne ke liye `React.memo`, `PureComponent`, `useMemo`, `useCallback` ka use karein.
- State ko minimize karein aur jitna ho sake local rakhein.
- Inline functions/objects ko props me na bhejein.
- Images aur assets ko optimize karein.
- Production build (`npm run build`) ka use karein.
- React DevTools aur browser tools se performance monitor/profile karein.

---

## 60. Explain the purpose of .env file in react?

**English:**
The `.env` file is used to define environment variables for your React app. These variables can store API endpoints, keys, or configuration values that change between development, staging, and production. In Create React App, variables must start with `REACT_APP_` to be accessible in code via `process.env.REACT_APP_*`.

**Example:**

```
REACT_APP_API_URL=https://api.example.com
```

**Hindi:**
`.env` file React app ke liye environment variables define karne ke liye use hoti hai. Isme API endpoints, keys, ya configuration values store ki ja sakti hain jo development, staging, aur production me alag ho sakti hain. Create React App me variables `REACT_APP_` se start hone chahiye taki code me `process.env.REACT_APP_*` se access ho sake.

**Udaharan:**

```
REACT_APP_API_URL=https://api.example.com
```

---

## 61. React useEffect find difference in code

**English:**
`useEffect` is a hook for handling side effects in functional components. The difference in code depends on the dependency array:

- `useEffect(() => { ... })`: Runs after every render.
- `useEffect(() => { ... }, [])`: Runs only once after the first render (componentDidMount).
- `useEffect(() => { ... }, [dep])`: Runs after the first render and whenever `dep` changes.

**Example:**

```jsx
// Runs after every render
useEffect(() => {
  // ...
});

// Runs only once
useEffect(() => {
  // ...
}, []);

// Runs when 'count' changes
useEffect(() => {
  // ...
}, [count]);
```

**Hindi:**
`useEffect` functional components me side effects handle karne ke liye hook hai. Dependency array ke hisab se code ka behavior alag hota hai:

- `useEffect(() => { ... })`: Har render ke baad chalega.
- `useEffect(() => { ... }, [])`: Sirf pehli render ke baad chalega (componentDidMount).
- `useEffect(() => { ... }, [dep])`: Pehli render ke baad aur jab `dep` change ho tab chalega.

**Udaharan:**

```jsx
// Har render ke baad
useEffect(() => {
  // ...
});

// Sirf ek baar
useEffect(() => {
  // ...
}, []);

// Jab 'count' change ho
useEffect(() => {
  // ...
}, [count]);
```

---

## 62. What is Reconciliation in React?**

**English:**

Reconciliation is the process React uses to figure out what changes need to be applied to the DOM when the state or props of a component change. Since directly manipulating the DOM is slow, React maintains a **virtual DOM** (an in-memory representation of the UI). Whenever your component re-renders, React builds a new virtual DOM tree and compares it with the previous one. This comparison process is called **Diffing**, and applying the minimum set of changes to the real DOM is **Reconciliation**.

---

### **How React Does Reconciliation Under the Hood**

1. **Fiber Architecture**
   Since React 16, reconciliation is managed by the **Fiber architecture**. A "fiber" is a unit of work representing each React element. Fiber allows React to:

   - Break rendering work into chunks.
   - Pause, prioritize, and resume rendering (cooperative scheduling).
   - Avoid blocking the main thread for long periods.

2. **Diffing Algorithm**
   React’s diffing algorithm is based on two key assumptions:

   - **Element Type**: If two elements are of different types (`<div>` vs `<span>` or `ComponentA` vs `ComponentB`), React will destroy the old tree and build the new one from scratch.
   - **Keys for Lists**: When comparing children in a list, React uses `key` to decide whether an element is the same or not. This avoids unnecessary re-renders.

3. **Phases of Reconciliation**

   - **Render Phase (Diffing)**: React creates a new fiber tree and compares it with the current fiber tree. This phase is **pure** (no side effects yet).
   - **Commit Phase (Mutation)**: Once the minimal set of changes is calculated, React commits them to the DOM in one go. Here, lifecycle methods like `componentDidMount`/`useEffect` run.

4. **Prioritization**
   Fiber supports **priority levels**. Updates like user input (high priority) are handled before less urgent work like network data rendering. This makes React feel smooth and responsive.

5. **Result**
   Instead of re-rendering the entire UI, React updates only the parts that changed, reducing DOM operations and improving performance.

---
## 62. React me Reconciliation kya hota hai?**

**Hindi:**
Reconciliation React ka process hai jisme React decide karta hai ki jab component ka state ya props change ho to actual DOM me kaunse changes karne hain. DOM ko directly update karna costly hota hai, isliye React ek **virtual DOM** rakhta hai (jo UI ka memory me representation hota hai). Har baar render hone par React naya virtual DOM tree banata hai aur purane tree se compare karta hai. Ye comparison **Diffing** kehlaata hai, aur jo minimum changes DOM me apply kiye jaate hain, use **Reconciliation** kehte hain.

---

### **React ka Reconciliation Andar se kaise kaam karta hai?**

1. **Fiber Architecture**
   React 16 ke baad se reconciliation ka process **Fiber architecture** ke through hota hai. Har React element ke liye ek **fiber** banta hai jo ek "unit of work" hota hai. Fiber React ko allow karta hai:

   - Work ko chhote parts me todna.
   - Rendering ko pause/resume/prioritize karna.
   - Main thread ko block na karna.

2. **Diffing Algorithm**
   React diff karte waqt do assumptions leta hai:

   - **Element Type**: Agar do elements alag type ke hain (`<div>` vs `<span>`), React pura naya tree bana dega aur purana destroy kar dega.
   - **Keys in Lists**: List ke children compare karte waqt `key` ka use hota hai. Agar `key` same hai to React purane element ko reuse karega, warna naya create karega.

3. **Reconciliation ke Phases**

   - **Render Phase (Diffing)**: React naya fiber tree banata hai aur purane se compare karta hai. Ye phase sirf calculation hoti hai, DOM change nahi hota.
   - **Commit Phase (Mutation)**: React calculated changes ko ek saath DOM me apply karta hai. Isi phase me lifecycle methods (`componentDidMount`, `useEffect`) run hote hain.

4. **Prioritization**
   Fiber me har update ke liye **priority level** hota hai. Jaise user input high priority hota hai, aur background data rendering low priority. Is wajah se React smooth lagta hai.

5. **Natija (Result)**
   React puri UI ko dobara render nahi karta, sirf wahi part update karta hai jo badla hai. Isse DOM operations kam hote hain aur performance fast rehti hai.

---

👉 In short:

- **English**: Reconciliation = Comparing old and new virtual DOM, diffing with Fiber, then committing minimal changes.
- **Hindi**: Reconciliation = Purane aur naye virtual DOM ko compare karna, Fiber ke through diffing karna aur sirf necessary changes commit karna.

---

# 63. What is Debounce?

**English** → Debounce means delaying the execution of a function until a certain amount of time has passed since the last time it was called.
**Hindi** → Debounce ka matlab hai ki agar ek function बार-बार call हो रहा है (जैसे search box typing), तो वो बार-बार execute ना होकर, केवल **last call के बाद कुछ समय इंतजार करके** run हो।

---

# 🔹 Step 2: Debounce Function in JavaScript

```js
function debounce(fn, delay) {
  let timer; // store timer reference
  return function (...args) {
    clearTimeout(timer); // clear previous timer
    timer = setTimeout(() => {
      fn.apply(this, args); // execute after delay
    }, delay);
  };
}

// Example
const log = (msg) => console.log("Debounced:", msg);

const debouncedLog = debounce(log, 1000);

debouncedLog("Hello");  
debouncedLog("World");  // Only "World" will be logged after 1s
```

✅ **English**: Here, every time the function is called, the old timer is cleared and a new one is set. Only the last call executes after the delay.
✅ **Hindi**: Yaha har call pe purana timer clear ho jata hai, aur naya timer set hota hai. Sirf **last wali call** delay ke baad run hoti hai.

---

# 🔹 Step 3: React Custom Hook → `useDebounce`

```jsx
import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // cleanup if value changes before delay
    };
  }, [value, delay]);

  return debouncedValue;
}
```

✅ **English**: `useDebounce` hook delays updating the `debouncedValue` until the user stops typing for given `delay` ms.
✅ **Hindi**: `useDebounce` hook value ko tab tak update nahi karta jab tak user kuch देर (delay) तक type करना बंद ना कर दे।

---

# 🔹 Step 4: Usage Example in React

```jsx
import React, { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("Fetching API for:", debouncedQuery);
      // API call here
    }
  }, [debouncedQuery]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
```

✅ **English**: API will only be called after user stops typing for 500ms.
✅ **Hindi**: Jab user 500ms tak typing रोक देता है, tabhi API call होगी।

---

# 🔑 Final Summary

- **JavaScript Debounce Function** → Useful for any JS task (search box, resize, scroll).
- **React `useDebounce` Hook** → Specifically useful in React for API calls while typing, preventing unnecessary re-renders.

---

# 🔹64. What is Throttle?

**English** → Throttle ensures that a function is executed at most **once** in a given time interval, no matter how many times it is triggered.
**Hindi** → Throttle ka matlab hai ki ek function ko ek निश्चित समय (e.g. 1 second) me **sirf ek hi बार** run karna, chahe usse 100 बार call किया जाए।

👉 Use case: Scroll event, window resize, button spam clicking.

---

# 🔹 Step 2: Throttle Function in JavaScript

```js
function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}

// Example
const log = (msg) => console.log("Throttled:", msg);

const throttledLog = throttle(log, 1000);

setInterval(() => {
  throttledLog("Hello"); // Will print once every 1s (not every call)
}, 100);
```

✅ **English**: Even if `throttledLog` is called every 100ms, it will only run once every 1000ms.
✅ **Hindi**: Chahe `throttledLog` har 100ms pe call ho, lekin function sirf 1000ms me ek बार run karega।

---

# 🔹 Step 3: React Custom Hook → `useThrottle`

```jsx
import { useState, useEffect } from "react";

function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
}

export default useThrottle;
```

---

# 🔹 Step 4: Usage Example in React

```jsx
import React, { useState, useEffect } from "react";
import useThrottle from "./useThrottle";

export default function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 500);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Throttled Scroll Position:", throttledScrollY);
  }, [throttledScrollY]);

  return <div style={{ height: "200vh" }}>Scroll me and check console</div>;
}
```

✅ **English**: Even if the scroll event fires many times per second, `throttledScrollY` updates only once every 500ms.
✅ **Hindi**: Scroll event बार-बार fire होगा, लेकिन `throttledScrollY` value हर 500ms me सिर्फ एक बार update होगी।

---

# 🔑 Final Summary

- **Debounce** → Runs only after a pause. (Best for search box, input fields)
- **Throttle** → Runs at most once per interval. (Best for scroll, resize, drag events)

---
