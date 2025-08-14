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

console.log("\n-------------------------")
console.log("❓ What is a function?")
console.log("-------------------------\n")

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

console.log("\n-------------------------")
console.log("🧮 Function with parameters")
console.log("-------------------------\n")

function greet(name: string) {
    console.log("Hello,", name)
}

greet("Anna") // "Hello, Anna"
greet("Krzysztof") // "Hello, Krzysztof"

// -------------------------
// 🔙 Functions that return values
// -------------------------
// A function can return a result using the `return` keyword

console.log("\n-------------------------")
console.log("🔙 Function with return value")
console.log("-------------------------\n")

function add(a: number, b: number): number {
    return a + b
}

// we can also write it like this
// function add(a: number, b: number): number {
//     const sum = a + b
//     return sum
// }

const sum = add(5, 1)
console.log("Sum:", sum) // 8

// -------------------------
// ✅ Function with type annotations
// -------------------------
// You can (and should) add types to parameters and return values

console.log("\n-------------------------")
console.log("✅ Function with types")
console.log("-------------------------\n")

function isAdult(age: number): boolean {
    return age >= 18
}

console.log("Is 20 an adult?", isAdult(20)) // true
console.log("Is 15 an adult?", isAdult(15)) // false

// -------------------------
// 🤔 Functions with no return value 
// -------------------------
console.log("\n-------------------------")
console.log("🤔 Function with no return value")
console.log("-------------------------\n")

// If a function doesn't return anything, you should use `void` type
function logMessage(message: string): void {
    console.log("Log:", message)
}

// This function does not return anything, it just logs a message
logMessage("This is a message") // Logs: "Log: This is a message"

// What does `void` mean?
// It means the function does not return a value. You can still call it, but you
// won't get anything back. It's useful for functions that perform actions like logging,
// updating UI, etc.

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
