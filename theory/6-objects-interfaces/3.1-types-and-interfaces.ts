// 📘 Mini Lesson: `interface` vs `type` (Simple Beginner Version)
// In this short lesson, you'll learn what `interface` and `type` are, and how they are similar.

// -------------------------
// 👶 What are they?
// -------------------------
// Both `interface` and `type` are used to describe the shape of objects (like what properties it should have)

// Example with `interface`:
interface User {
    name: string
    age: number
}

const user1: User = {
    name: "Alice",
    age: 30
}

// Example with `type`:
type Product = {
    title: string
    price: number
}

const product1: Product = {
    title: "Book",
    price: 19.99
}

// -------------------------
// ✅ So what's the difference?
// -------------------------
// For now — you can treat them as **almost the same**
// Main differences are:
// - `interface` can be extended (like adding more properties later)
// - `type` can be used for more complex types (like unions or intersections)
// - `interface` is better for defining object shapes, while `type` can be used for other things too
// - `type` can be used for primitive types, unions, and intersections
// - `interface` is more readable for beginners when defining object shapes

// 🧠 In practice:
// - Use `interface` when working with objects (recommended for beginners)
// - Use `type` if you need to describe other things (like a union of types)

// Example of a type for multiple values:
type Status = "loading" | "success" | "error"

// -------------------------
// 🧠 Summary:
// -------------------------
// ✅ Use `interface` for object shapes
// ✅ Use `type` for objects, or for things like "one of many values"
// Don't worry too much — both are correct in most cases

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Interfaces: https://www.typescriptlang.org/docs/handbook/interfaces.html
// • Type Aliases: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
// • Differences between Type Aliases and Interfaces: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
