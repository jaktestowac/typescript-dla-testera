// 📘 Lesson: typeof
// In this lesson, you'll learn:
// - how to check the type of a variable using `typeof` in TypeScript

// -------------------------
// 🔍 What is typeof?
// -------------------------
// `typeof` is a built-in operator that returns the type of a value as a string.

console.log("\n-------------------------")
console.log("🔍 typeof – check the type of a value")
console.log("-------------------------\n")

const name = "Alice"
console.log("Type of name:", typeof name)

const age = 30
console.log("Type of age:", typeof age)

const isLoggedIn = true
console.log("Type of isLoggedIn:", typeof isLoggedIn)

let anything: any = "test"
console.log("Type of anything:", typeof anything) // "string"

anything = 123
console.log("Now the type of anything:", typeof anything) // "number"

// -------------------------
// 🧠 When to use typeof?
// -------------------------
// - To check the type of a variable at runtime
// - Helpful when working with unknown or dynamic values (e.g. from user input, APIs, etc.)

// -------------------------
// ⚠️ Remember:
// -------------------------
// `typeof` always returns a string, like:
// - "string"
// - "number"
// - "boolean"
// - "undefined"

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • typeof Type Operator: https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// • Narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// • Type Guards: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
