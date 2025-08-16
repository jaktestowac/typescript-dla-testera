// 📘 Lesson: The `any` Type in Objects & Interfaces
// In this lesson, you’ll see how the `any` type can sneak into objects and why you should be careful with it.

// -------------------------
// 🤔 What happens when you use `any` in an object?
// -------------------------

console.log("\n-------------------------")
console.log("🤔 Object with `any` values")
console.log("-------------------------\n")

// You can create an object with any property types
const user: { name: any; age: any } = {
    name: "Alice",
    age: 25
}

console.log("User:", user)
// 👀 on console you will see:
// User: { name: 'Alice', age: 25 }

// Now we accidentally overwrite values with the wrong types!
user.name = true // ❌ No error
user.age = "twenty-five" // ❌ No error

console.log("User after bad update:", user)
// 👀 on console you will see:
// User: { name: true, age: "twenty-five" }
// This is dangerous! TypeScript won't catch these mistakes.

// -------------------------
// ⚠️ Why this is risky?
// -------------------------
// - TypeScript won’t protect you from mistakes
// - You may accidentally assign the wrong type
// - Code becomes harder to understand and maintain

// -------------------------
// ✅ Using proper types is safer
// -------------------------

console.log("\n-------------------------")
console.log("✅ Object with specific types")
console.log("-------------------------\n")

const safeUser: { name: string; age: number } = {
    name: "Bob",
    age: 40
}

// Uncommenting below lines will show errors
// safeUser.name = false   // ❌ Error
// safeUser.age = "forty"  // ❌ Error

console.log("Safe user:", safeUser)

// -------------------------
// 🧩 `any` in interfaces
// -------------------------

interface UnsafeProduct {
    name: any
    price: any
}

let product1: UnsafeProduct = {
    name: "Notebook",
    price: 25
}

product1.price = "twenty-five" // ❌ No error

console.log("Product:", product1)

// -------------------------
// 🧠 Summary:
// -------------------------
// - Avoid using `any` inside objects or interfaces
// - Use specific types like `string`, `number`, `boolean`
// - This helps catch bugs early and makes your code easier to read

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • The any type: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any
// • Unknown vs Any: https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown
// • Object Types: https://www.typescriptlang.org/docs/handbook/2/objects.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
