// 📘 Lesson: Nested Types in TypeScript
// In this lesson, you'll learn how to create and use nested objects with types or interfaces in TypeScript.

// -------------------------
// 🏠 What are Nested Types?
// -------------------------
// A nested type is when one object contains another object.
// We can describe this using types or interfaces.

console.log("\n-------------------------")
console.log("🧱 Using Interfaces")
console.log("-------------------------\n")

interface Product {
    name: string
    price: number
    details: {
        weight: number
        inStock: boolean
    }
}

const product: Product = {
    name: "Laptop",
    price: 3500,
    details: {
        weight: 1.5,
        inStock: true
    }
}

console.log("Product:", product)
console.log("Details:", product.details)
console.log("In stock:", product.details.inStock)

// or with bracket notation
console.log("Product weight:", product["details"]["inStock"])

// -------------------------
// 💡 Good Pracices!
// -------------------------

console.log("\n-------------------------")
console.log("💡 Good Pracices")
console.log("-------------------------\n")

// Instead of using simple types, prefer using interfaces for complex objects
// This allows you to define clear structures and reuse them across your codebase
interface MyEmployee {
    name: string
    contact: {
        email: string
        phone: string
    }
}

// better to implement interfaces for each nested object
interface Contact {
    email: string
    phone: string
}

interface MyEmployee {
    name: string
    contact: Contact
}

// -------------------------
// 📦 Optional Nested Properties
// -------------------------
// You can also mark nested fields as optional using `?`

console.log("\n-------------------------")
console.log("📦 Optional Nested Fields")
console.log("-------------------------\n")

interface Employee {
    name: string
    contact?: {
        email?: string
        phone?: string
    }
}

const e1: Employee = { name: "Tom" }
const e2: Employee = { name: "Sara", contact: { email: "sara@example.com" } }

console.log("Employee 1:", e1)
console.log("Employee 2:", e2)

// And with good practices, you can define interfaces for optional nested properties too:

interface Contact2 {
    email?: string
    phone?: string
}

interface Employee2 {
    name: string
    contact?: Contact2
}

// -------------------------
// 🧠 Summary:
// -------------------------
// - You can nest types and interfaces inside each other
// - Use nested objects to model complex data
// - Optional nested fields are useful for flexible data structures
// - Helps structure and validate deeply nested data

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Object Types: https://www.typescriptlang.org/docs/handbook/2/objects.html
// • Recursive Types: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types
// • Advanced Types: https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
