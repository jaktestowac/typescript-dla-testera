// 📘 Lesson: Union Types in TypeScript
// In this lesson, you'll learn how to allow a variable to hold more than one type using union types.

// -------------------------
// ❓ What is a Union Type?
// -------------------------
// Sometimes, a value can be more than just one type.
// For example: a user ID might be a string or a number.
// Union types let you combine types using the `|` symbol.

// Syntax: let variable: string | number

// -------------------------
// 🔀 Example: String or Number
// -------------------------
console.log("-------------------------")
console.log("🔀 Union: string or number")
console.log("-------------------------")

let userId: string | number

userId = 123
console.log("User ID (number):", userId) // 123

userId = "abc"
console.log("User ID (string):", userId) // abc

// -------------------------
// 🛑 Invalid assignment
// -------------------------
// Only string or number is allowed – not boolean or other types

// 🔓 Uncomment to test:
// userId = true // ❌ Error

// -------------------------
// 🔄 Example: Boolean or String
// -------------------------
console.log("-------------------------")
console.log("🔄 Union: boolean or string")
console.log("-------------------------")

let status: boolean | string

status = true
console.log("Status (boolean):", status) // true

status = "pending"
console.log("Status (string):", status) // pending

// -------------------------
// 💡 Why use union types?
// -------------------------
// - Useful when values can legitimately be more than one type
// - Common in form data, config files, JSON data, or APIs
// - Helps add flexibility while keeping type safety

// -------------------------
// 🧠 Summary:
// -------------------------
// - Union types use `|` to allow multiple possible types
// - `let value: string | number` means the variable can be either type
// - TypeScript will still check that the value matches one of them
// - Don't overuse – prefer specific types when possible

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Union Types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
// • Narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// • Type Guards: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
