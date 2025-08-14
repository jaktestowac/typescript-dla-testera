// 📘 Lesson: Objects in TypeScript
// In this lesson, you'll learn:
// - What objects are
// - How to create and use them
// - Why they are useful in test automation

// -------------------------
// 📦 What is an object?
// -------------------------
// An object is a group of related data stored together in key–value pairs.
// Think of it like a "box" that holds multiple labeled values.

// Example: a person
// name → "Alice"
// age → 28
// isAdmin → false

// -------------------------
// 👤 Defining an object
// -------------------------

console.log("\n-------------------------")
console.log("👤 Defining an object")
console.log("-------------------------\n")

const user = {
    name: "Alice",
    age: 28,
    isAdmin: false
}

console.log("User object:", user)

// -------------------------
// 🎯 Accessing properties
// -------------------------

console.log("\n-------------------------")
console.log("🎯 Accessing properties")
console.log("-------------------------\n")

console.log("Name:", user.name) // "Alice"
console.log("Age:", user.age) // 28
console.log("Is admin?", user.isAdmin) // false

// -------------------------
// ✏️ Changing values
// -------------------------

console.log("\n-------------------------")
console.log("✏️ Changing values")
console.log("-------------------------\n")

user.age = 29
user.isAdmin = true

console.log("Updated user:", user)

// -------------------------
// 🚨 Common mistake: using a wrong key
// -------------------------

// console.log(user.lastname) // ❌ This will be `undefined`, not an error
// TypeScript will help you avoid such mistakes when types are defined (we'll cover this soon)

// -------------------------
// 🧠 Summary:
// -------------------------
// - Objects store related values together
// - Use dot (`.`) to access or change values
// - Objects are used everywhere in automation: users, requests, responses, settings

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Object Types: https://www.typescriptlang.org/docs/handbook/2/objects.html
// • Interfaces: https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces
// • Type Aliases: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
