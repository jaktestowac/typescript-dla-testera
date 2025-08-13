// 📘 Lesson: Arrow Functions in TypeScript - part 1
// In this lesson, you'll learn:
// - what arrow functions are
// - how to use them with and without parameters
// - how they differ from regular functions

// -------------------------
// ➡️ What is an Arrow Function?
// -------------------------
// Arrow functions are a shorter way to write functions.
// They're often used for simple one-line logic or callbacks.

// -------------------------
// ✅ Basic Arrow Function (no params)
// -------------------------

console.log("-------------------------")
console.log("➡️ Normal Function")
console.log("-------------------------")

// This is a regular function declaration.
function sayHello() {
    console.log("Hello!")
}

// You can call it like this:
sayHello()

console.log("-------------------------")
console.log("➡️ Basic Arrow Function (no params)")
console.log("-------------------------")

const sayHelloToo = () => {
    console.log("Hello!")
}

sayHelloToo()

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Arrow Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// • Function Expressions: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-expressions
// • This in Arrow Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#no_separate_this

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
