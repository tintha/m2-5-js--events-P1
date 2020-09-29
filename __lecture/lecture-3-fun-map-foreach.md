# Fundamentals: `map()` and `.forEach()`

---

## 🤔

1. What are `.map()` and `.forEach()`?
2. What is the difference between the two?

---

## `.forEach()`

- The [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method executes a provided function once for each array element.

---

## `.map()`

- The [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) creates a new array with the results of calling a provided function on every element in the calling array.

---

3. But what does that _mean_?
4. What does each function return?

---

- `forEach()` returns **nothing** (as in "not a single thing", as in `undefined`)
- `map()` returns a **NEW** array.

---

5. What is the length of any new array returned from a `.map()`?

---

## Exercises

---

### Exercise 1: Console them all!

```js
// Exercise 1
// Write some code that will output a numbered list of Pokemon names to the console.
const pokemonNames = [
  "mudkip",
  "bulbasaur",
  "pikachu",
  "squirtle",
  "pidgey",
  "charizard",
];
```

```
1. mukdip
2. bulbasaur
...etc.
```

---

### Exercise 2: Capitalize them all!

```js
// Exercise 2
// Write some code that will "correct" the
// `pokemonNames` array so that the names are properly capitalized.
// Console the result.
const pokemonNames = [
  "mudkip",
  "bulbasaur",
  "pikachu",
  "squirtle",
  "pidgey",
  "charizard",
];

// Exercise 2a: Do this with .forEach()

// Exercise 2b: Do this with .map()
```

_Is one way better than the other? What is the difference?_
