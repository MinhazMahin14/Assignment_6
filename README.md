# 🚨 Emergency Services Web App – Assignment README

This is a small frontend project I made using HTML, CSS, and Vanilla JavaScript. The goal was to build a basic emergency services web app and also answer some ES6-related questions to show my understanding.

---

## 📘 My Understanding (In My Own Words)

In this assignment, I tried to build a simple web app using only frontend tools—no frameworks. Along with that, I had to answer 5 questions based on ES6 topics. I’ve written the answers in a way that makes sense to me, and I’ve used examples where possible to make it clearer.

I didn’t just copy from Google. I read, tried out the code, and then wrote what I understood. Hopefully, this shows that I’ve learned the concepts properly.

---

## ❓ Answers to the Questions

### 1. Difference between `var`, `let`, and `const`?

- `var` is function-scoped and can be re-declared. It’s the old way and can cause bugs because of hoisting.
- `let` is block-scoped and can be updated but not re-declared in the same block.
- `const` is also block-scoped but cannot be updated or re-declared. It’s used for fixed values.

I mostly use `let` and `const` now because they are safer and more predictable.

---

### 2. Difference between `map()`, `forEach()`, and `filter()`?

| Method     | Returns New Array | What It Does                     |
|------------|-------------------|----------------------------------|
| `map()`    | Yes               | Changes each item and returns    |
| `forEach()`| No                | Just loops, doesn’t return       |
| `filter()` | Yes               | Keeps items that match a rule    |

Example:  
- Use `map()` to transform values  
- Use `filter()` to remove unwanted ones  
- Use `forEach()` when you just want to run something for each item

---

### 3. What are arrow functions?

Arrow functions are a shorter way to write functions. Example:

```js
const add = (a, b) => a + b;
```

They don’t have their own `this`, which is helpful in callbacks and inside array methods. Arrow functions also make the code cleaner and easier to read.

---

### 4. How does destructuring work?

Destructuring lets you pull out values from arrays or objects and assign them to variables directly. It makes your code shorter and easier to read.

```js
// Array example
const [x, y] = [1, 2]; // x = 1, y = 2

// Object example
const person = { name: "Minhaz", age: 22 };
const { name, age } = person; // name = "Minhaz", age = 22
```

Instead of writing `person.name`, you can just use `name`. It saves time and looks cleaner.

---

### 5. What are template literals?

Template literals are a better way to write strings in JavaScript. They use backticks (`` ` ``) and `${}` to insert variables inside the string.

```js
const name = "Minhaz";
console.log(`Hello, ${name}!`);
```

This is easier than using `+` to join strings:

```js
console.log("Hello, " + name + "!");
```

Template literals also support multi-line strings and make dynamic text simpler to write.

---

## 🧰 Tech Used

- HTML
- CSS (Vanilla / Tailwind / DaisyUI)
- JavaScript (Vanilla only)

---

## ✅ Status

- [x] Project done  
- [x] Questions answered  
- [x] Uploaded to GitHub  
