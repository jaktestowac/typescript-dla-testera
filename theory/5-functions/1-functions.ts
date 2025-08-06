// 📘 Lesson: Functions in TypeScript
// In this lesson, you'll learn:
// - what functions are,
// - how to declare and call them,
// - how to use parameters and return values.

// -------------------------
// ❓ What is a function?
// -------------------------
// A function is a reusable block of code that performs a task.
// You define it once, and call it whenever you need it.

console.log("-------------------------")
console.log("❓ What is a function?")
console.log("-------------------------")

// Example: sayHello function
function sayHello() {
    console.log("Hello, world!")
}

// Call the function
sayHello()

// -------------------------
// 🧮 Functions with parameters
// -------------------------
// Parameters let you pass data into a function

console.log("-------------------------")
console.log("🧮 Function with parameters")
console.log("-------------------------")

function greet(name: string) {
    console.log("Hello,", name)
}

greet("Anna") // "Hello, Anna"
greet("Krzysztof") // "Hello, Krzysztof"

// -------------------------
// 🔙 Functions that return values
// -------------------------
// A function can return a result using the `return` keyword

console.log("-------------------------")
console.log("🔙 Function with return value")
console.log("-------------------------")

function add(a: number, b: number): number {
    return a + b
}

const sum = add(5, 3)
console.log("Sum:", sum) // 8

// -------------------------
// ✅ Function with type annotations
// -------------------------
// You can (and should) add types to parameters and return values

console.log("-------------------------")
console.log("✅ Function with types")
console.log("-------------------------")

function isAdult(age: number): boolean {
    return age >= 18
}

console.log("Is 20 an adult?", isAdult(20)) // true
console.log("Is 15 an adult?", isAdult(15)) // false

// -------------------------
// 🧠 Summary:
// -------------------------
// - Functions let you group code into reusable tasks
// - Use `function` keyword to declare them
// - You can pass values using parameters
// - Use `return` to send back a result
// - Always use type annotations for clarity and safety

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Functions: https://www.typescriptlang.org/docs/handbook/2/functions.html
// • Function Types: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions
// • More on Functions: https://www.typescriptlang.org/docs/handbook/2/more-on-functions.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
