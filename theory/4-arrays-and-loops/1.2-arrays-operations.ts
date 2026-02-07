// 📘 Lesson: Arrays in TypeScript - basic operations

// -------------------------
// ➕ Modifying an Array
// -------------------------
console.log("\n-------------------------")
console.log("➕ Modifying an Array")
console.log("-------------------------\n")

const tasks: string[] = ["eat", "sleep"]
console.log("Initial tasks:", tasks)

tasks.push("code") // adds item at the end
console.log("After push:", tasks) // ['eat', 'sleep', 'code']
 
tasks[1] = "nap" // replaces second item
console.log("After replacement:", tasks) // ['eat', 'nap', 'code']

// -------------------------
// 🧹 Removing from an Array
// -------------------------
console.log("\n-------------------------")
console.log("🧹 Removing from an Array")
console.log("-------------------------\n")

console.log("")
console.log("🧹 Removing with pop")
console.log("")

const numbersToRemove: number[] = [1, 2, 3, 4]
console.log("Before pop:", numbersToRemove)
numbersToRemove.pop() // removes last item
console.log("After pop:", numbersToRemove) // [1, 2, 3]

console.log("")
console.log("🧹 Removing with shift")
console.log("")

const otherNumbersToRemove: number[] = [1, 2, 3, 4]
console.log("Before shift:", otherNumbersToRemove)
otherNumbersToRemove.shift() // removes first item
console.log("After shift:", otherNumbersToRemove) // [2, 3, 4]

console.log("")
console.log("🧹 Removing with splice")
console.log("")

const lastNumbersToRemove: number[] = [1, 2, 3, 4]
console.log("Before splice:", lastNumbersToRemove)
lastNumbersToRemove.splice(1, 2) // removes 2 items starting from index 1
// This will remove the items at index 1 and 2 (2 and 3)
console.log("After splice:", lastNumbersToRemove) // [1, 4]

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
