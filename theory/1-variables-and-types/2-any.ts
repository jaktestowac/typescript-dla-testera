// 📘 Lesson: The `any` Type
// In this lesson, you'll learn:
// - what the `any` type is in TypeScript,
// - when it's used, and
// - why you should avoid it when possible!

// -------------------------
// ❓ What is `any`?
// -------------------------
// `any` is a special type that disables type checking.
// It tells TypeScript: "Trust me, I know what I'm doing."

console.log("\n-------------------------")
console.log("❓ The any type – disables type safety")
console.log("-------------------------\n")

let randomValue: any = "Hello"
console.log("Random value:", randomValue)

randomValue = 42
console.log("Now a number:", randomValue)

randomValue = true
console.log("Now a boolean:", randomValue)

// ✅ With `any`, the variable can hold any type
// ❌ But TypeScript won't help you catch errors

// -------------------------
// ⚠️ Why avoid `any`?
// -------------------------
// - You lose type safety
// - Mistakes won't be caught during development
// - It can hide real bugs

// Example:
let input: any = "42"
console.log("Input length:", input.length) // OK: it's a string

// But what if you accidentally assign a number?

input = 42

console.log("Input (that is a number) length:", input.length)
// On console, you'll see:
// Input (that is a number) length: undefined

// This will not throw an error, but it will lead to unexpected behavior later.

// When this will cause problems?
// - If you try to call string methods on a number

// Example:
// 🔓 Uncomment and run script to see the error:
// console.log("Input (that is a number) toUpperCase:", input.toUpperCase()) // ❌ TypeError: input.toUpperCase is not a function

// -------------------------
// 🧠 So when is `any` useful?
// -------------------------
// - When migrating from JavaScript
// - When dealing with dynamic data (e.g. from `JSON.parse()`)
// - As a temporary workaround (but not best practice)

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • The any type: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any
// • Object Types: https://www.typescriptlang.org/docs/handbook/2/objects.html
// • Type Safety and Migration: https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
