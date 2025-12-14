### 1. Difference between `var`, `let`, and `const`
- **var**
  - Can be changed ✅
  - Function scope (old system)
  - Not recommended to use anymore
- **let**
  - Can be changed ✅
  - Block scope (`{}`)
  - Use when the value needs to be updated later
- **const**
  - Cannot be changed ❌
  - Block scope (`{}`)
  - Use most of the time when the value should stay fixed


### 2. Difference between `map()`, `forEach()`, and `filter()`
All three work with Arrays, but their **return values** are different:

- **forEach()**
  - Task: Performs an action on each item (e.g., printing to console)
  - Return: Nothing (`undefined`)
- **map()**
  - Task: Transforms each item
  - Return: A new Array with the transformed items
- **filter()**
  - Task: Tests each item against a condition
  - Return: A new Array with only the items that pass the condition


### 3. ES6 Arrow Function
- A shorter, simpler way to write functions in JavaScript.
- Definition: Uses `=>` (arrow) instead of the `function` keyword.
- Example:  
  ```js
  const add = (a, b) => a + b;
  ```
- Main advantage: Arrow functions do **not** create their own `this`; they inherit `this` from the surrounding scope.


### 4. ES6 Destructuring Assignment
- Destructuring means extracting values from Arrays or Objects into separate variables easily.

- **For Objects:** Use `{}` with property names.  
  ```js
  const { name, age } = user;
  ```

- **For Arrays:** Use `[]` with positions.  
  ```js
  const [first, second] = list;
  ```


### 5. ES6 Template Literals vs String Concatenation
- **Template Literal:** Strings written with backticks (`` ` ``).
- Features:
  - Supports **interpolation**:  
    ```js
    `Hello ${name}!`
    ```
  - Supports **multi-line strings** easily.
- **Difference from Concatenation:**
  - Concatenation: `"Hello " + name + "!"` → messy, hard for line breaks.
  - Template Literal: `` `Hello ${name}!` `` → cleaner, no `+` needed.