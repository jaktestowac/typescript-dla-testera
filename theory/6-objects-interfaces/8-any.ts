// 📘 Lesson: The `any` Type in Objects & Interfaces
// In this lesson, you’ll see how the `any` type can sneak into objects and why you should be careful with it.

// -------------------------
// 🤔 What happens when you use `any` in an object?
// -------------------------

console.log("\n-------------------------")
console.log("🤔 Object with `any` values")
console.log("-------------------------\n")

interface User {
    name: any
    age: any
}

// You can create an object with any property types
const user: User = {
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

class SafeUser {
    name: string

    constructor(name: string) {
        this.name = name
    }

    // You can also add methods
    greet() {
        console.log(`Hello, my name is ${this.name}.`)
    } 
}

const safeUser = new SafeUser("Alice")
safeUser.greet() // Hello, my name is Alice.


// Now if you try to assign a wrong type, TypeScript will catch it
// safeUser.name = 123 // ❌ Error: Type 'number' is not assignable to type 'string'.

// what if You assign safeUser to `any` type?
console.log("\n-------------------------")
console.log("🤔 Assigning to `any` type")
console.log("-------------------------\n")

console.log("safeUser before bad update:", safeUser)

let anyUser: any = safeUser
anyUser.name = 123 // ❌ No error, but this is bad practice!
console.log("anyUser after bad update:", anyUser)
// 👀 on console you will see:
// anyUser after bad update: { name: 123, greet: [Function: greet] }

// Now anyUser is not type-safe anymore!
// You can assign any type to it, which defeats the purpose of TypeScript's type safety.

// try to invoke greet method
anyUser.greet() // Hello, my name is 123.
// This works, but it’s not what we wanted!

// try to invoke non-existing method
// anyUser.sayGoodbye() // ❌ Error: anyUser.sayGoodbye is not a function

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
