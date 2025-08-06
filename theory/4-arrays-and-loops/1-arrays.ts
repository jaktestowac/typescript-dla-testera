// 📘 Lesson: Arrays in TypeScript
// In this lesson, you'll learn what arrays are and how to use them to store multiple values in one place.

// -------------------------
// 📦 What is an Array?
// -------------------------
// An array is a special type of variable that can hold multiple values at once.
// Think of it like a list or a container for storing a sequence of items.

// Example in real life:
// A shopping list with multiple items: ["bread", "milk", "eggs"]

// -------------------------
// 🧠 Declaring an Array
// -------------------------
console.log("-------------------------")
console.log("🧠 Declaring an Array")
console.log("-------------------------")

const fruits: string[] = ["apple", "banana", "orange"]
console.log("Fruits:", fruits) // ['apple', 'banana', 'orange']

const numbers: number[] = [10, 20, 30]
console.log("Numbers:", numbers) // [10, 20, 30]

const mixed: (string | number)[] = ["hello", 42, "world"]
console.log("Mixed:", mixed) // ['hello', 42, 'world']

// -------------------------
// 📌 Accessing Items in an Array
// -------------------------
// Arrays are zero-indexed — the first element is at position 0.

console.log("-------------------------")
console.log("📌 Accessing Items")
console.log("-------------------------")

const colors: string[] = ["red", "green", "blue"]

console.log("First color:", colors[0]) // red
console.log("Second color:", colors[1]) // green

// -------------------------
// ➕ Modifying an Array
// -------------------------
console.log("-------------------------")
console.log("➕ Modifying an Array")
console.log("-------------------------")

const tasks: string[] = ["eat", "sleep"]
console.log("Initial tasks:", tasks)

tasks.push("code") // adds item at the end
console.log("After push:", tasks) // ['eat', 'sleep', 'code']

tasks[1] = "nap" // replaces second item
console.log("After replacement:", tasks) // ['eat', 'nap', 'code']

// -------------------------
// 🧹 Removing from an Array
// -------------------------
console.log("-------------------------")
console.log("🧹 Removing from an Array")
console.log("-------------------------")

const numbersToRemove: number[] = [1, 2, 3, 4]
console.log("Before pop:", numbersToRemove)

numbersToRemove.pop() // removes last item
console.log("After pop:", numbersToRemove) // [1, 2, 3]

// -------------------------
// 🧠 Summary:
// -------------------------
// - An array stores multiple values of the same (or mixed) type.
// - Use square brackets: `[]`
// - Access items using index: `array[0]`
// - Common methods: `.push()` to add, `.pop()` to remove
// - Arrays are used everywhere in test automation (e.g., list of users, products, results, etc.)

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Arrays: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
// • Array Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// • Tuple Types: https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
