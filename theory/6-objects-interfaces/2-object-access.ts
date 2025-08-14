// 📘 Lesson: Accessing Object Properties in TypeScript
// In this lesson, you'll learn how to read values from objects using dot notation and bracket notation.

// -------------------------
// 🧱 Objects Recap
// -------------------------
// An object is a collection of key–value pairs.
// You can store multiple related values under one variable.

console.log("\n-------------------------")
console.log("🧱 Object Recap")
console.log("-------------------------\n")

const user = {
    name: "Alice",
    age: 28,
    isAdmin: true
}

console.log("User object:", user)

// -------------------------
// 🔹 Dot Notation
// -------------------------
// The most common way to access a property.

console.log("\n-------------------------")
console.log("🔹 Dot Notation")
console.log("-------------------------\n")

console.log("User name:", user.name) // "Alice"
console.log("User age:", user.age) // 28
console.log("Is admin:", user.isAdmin) // true

// -------------------------
// 🔸 Bracket Notation
// -------------------------
// Useful when the property name is dynamic or not a valid identifier.

console.log("\n-------------------------")
console.log("🔸 Bracket Notation")
console.log("-------------------------\n")

console.log("User name:", user["name"])
console.log("User age:", user["age"])

// You can use variables as keys:
const key = "isAdmin"
console.log("Admin flag (via variable):", user[key]) // true

// -------------------------
// ⚠️ Accessing Non-Existing Properties
// -------------------------
// TypeScript allows it but returns `undefined` at runtime unless types are defined.

console.log("\n-------------------------")
console.log("⚠️ Accessing Non-Existing Properties")
console.log("-------------------------\n")

console.log("User.lastname:", user["lastname"]) // undefined
// This won't throw an error, but will return `undefined`

// What if we use .dot notation?
// console.log(user.lastname); // ❌ This will show an error if `lastname` is not defined in the object
// Property 'lastname' does not exist on type '{ name: string; age: number; isAdmin: boolean; }'.ts(2339)

// -------------------------
// 🧠 Summary
// -------------------------
// - Use dot notation when you know the exact property name.
// - Use bracket notation for dynamic or invalid identifiers.
// - Accessing unknown properties returns `undefined`.
// - Types will help catch such mistakes.

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Object Property Access: https://www.typescriptlang.org/docs/handbook/2/objects.html#property-access-expressions
// • Optional Chaining: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining
// • Nullish Coalescing: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
