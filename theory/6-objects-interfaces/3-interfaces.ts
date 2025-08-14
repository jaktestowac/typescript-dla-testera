// 📘 Lesson: Interfaces in TypeScript
// In this lesson, you'll learn what interfaces are and how they help define the structure of objects.

// -------------------------
// 🧱 What is an Interface?
// -------------------------
// An interface defines a "contract" for object shape.
// It tells TypeScript: "This object must have these properties with these types."

console.log("\n-------------------------")
console.log("🧱 Basic Interface")
console.log("-------------------------\n")

interface User {
    name: string
    age: number
    isAdmin: boolean
}

const user: User = {
    name: "Alice",
    age: 28,
    isAdmin: true
}

console.log("User:", user)

// -------------------------
// 🧰 Why Use Interfaces?
// -------------------------
// - Clear structure
// - Type safety
// - IDE autocomplete and better documentation

// -------------------------
// ⚠️ Catching Errors Early
// -------------------------
// TypeScript will alert you if required properties are missing or have the wrong type

console.log("\n-------------------------")
console.log("⚠️ Invalid Object (will not compile)")
console.log("-------------------------\n");

// Uncommenting this will show an error:
// const brokenUser: User = {
//   name: "Bob"
//   // ❌ Missing age and isAdmin
// }

// -------------------------
// ✅ Optional Properties
// -------------------------
// Use `?` to mark a property as optional

console.log("\n-------------------------")
console.log("✅ Optional Properties")
console.log("-------------------------\n")

interface Product {
    name: string
    price: number
    description?: string // optional
}

const book: Product = {
    name: "TypeScript Handbook",
    price: 25
}

console.log("Book:", book)

// -------------------------
// 🧪 Interface for Parameters
// -------------------------
// Interfaces can also be used to type function parameters

console.log("\n-------------------------")
console.log("🧪 Interface as Function Parameter")
console.log("-------------------------\n")

function printUser(u: User) {
    console.log(`${u.name} is ${u.age} years old.`)
}

printUser(user) // Alice is 28 years old.

// -------------------------
// 🧠 Summary:
// -------------------------
// - Interfaces define object structure
// - Required and optional fields supported
// - Used for object variables, function parameters, etc.
// - Helps catch mistakes during development

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Interfaces: https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces
// • Interface Inheritance: https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-interfaces
// • Function Types: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
