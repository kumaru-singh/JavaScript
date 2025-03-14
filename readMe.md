### Q4. What is Sets?

**Sets are a new object type introduced in ES6 (ES2015) that allow the creation of collections of unique values. The values in a set can be either simple primitives like strings or integers, but more complex object types like object literals or arrays can also be part of a set.**

`let numbers = new Set([10, 20, 20, 30, 40, 50]);
console.log(numbers); // Set(5) {10, 20, 30, 40, 50}
console.log(typeof numbers); // Object`

Q.5 What are global variables?
Global variables are declared outside of a function or declared with a window object for accessibility throughout the program (unless shadowed by locals). If you declare a variable without using var, even if it's inside a function, it will still be seen as global.

The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

```javascript
var x = 10;

if (x === 10) {
  var x = 20;

  console.log(x);
  // expected output: 20
}

console.log(x);
// expected output: 20
```



Q.6 What are the arrow function?
An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target.

```
let add = (x,y,z) => {
    return x+y+z
}
let add = (x,y,z) => x + y + z;
console.log(add(1,2,3));
```