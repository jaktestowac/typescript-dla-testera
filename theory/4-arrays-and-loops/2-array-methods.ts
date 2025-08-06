// 📘 Lesson: Array Methods in TypeScript
// In this lesson, you'll learn how to work with data inside arrays using built-in array methods.

// -------------------------
// ❓ What are array methods?
// -------------------------
// Arrays store lists of values (like numbers, names, etc).
// Array methods help you:
// - read data,
// - update it,
// - transform it,
// - or check values.

// Example array:
const fruits = ["apple", "banana", "cherry"]

// -------------------------
// 📏 .length – how many items?
// -------------------------
console.log("-------------------------")
console.log("📏 .length")
console.log("-------------------------")

console.log("Total fruits:", fruits.length) // 3

// -------------------------
// 🔍 .includes() – check if something is inside
// -------------------------
console.log("-------------------------")
console.log("🔍 .includes()")
console.log("-------------------------")

console.log("Includes 'banana'?", fruits.includes("banana")) // true
console.log("Includes 'grape'?", fruits.includes("grape")) // false

// -------------------------
// 🆕 .push() – add to the end
// -------------------------
console.log("-------------------------")
console.log("🆕 .push()")
console.log("-------------------------")

fruits.push("grape")
console.log("After push:", fruits) // ["apple", "banana", "cherry", "grape"]

// -------------------------
// 🗑️ .pop() – remove from the end
// -------------------------
console.log("-------------------------")
console.log("🗑️ .pop()")
console.log("-------------------------")

const lastFruit = fruits.pop()
console.log("Popped item:", lastFruit)
console.log("After pop:", fruits)

// -------------------------
// 🎯 .indexOf() – find the position of an item
// -------------------------
console.log("-------------------------")
console.log("🎯 .indexOf()")
console.log("-------------------------")

const cherryIndex = fruits.indexOf("cherry")
console.log("Index of cherry:", cherryIndex)

// -------------------------
// 🔁 .join() – convert to a string
// -------------------------
console.log("-------------------------")
console.log("🔁 .join()")
console.log("-------------------------")

const fruitList = fruits.join(", ")
console.log("Fruit list:", fruitList) // "apple, banana, cherry"

// -------------------------
// 🔍 .filter() – create a new array with filtered items
// -------------------------
console.log("-------------------------")
console.log("🔍 .filter()")
console.log("-------------------------")

const filteredFruits = fruits.filter((fruit) => fruit.length > 5)
console.log("Filtered fruits:", filteredFruits) // ["banana", "cherry"]

// -------------------------
// 🔍 .map() – create a new array with transformed items
// -------------------------
console.log("-------------------------")
console.log("🔍 .map()")
console.log("-------------------------")

const mappedFruits = fruits.map((fruit) => fruit.toUpperCase())
console.log("Mapped fruits:", mappedFruits) // ["APPLE", "BANANA", "CHERRY"]

// -------------------------
// 🧠 Summary:
// -------------------------
// - `.length`: how many items
// - `.includes()`: check if item exists
// - `.push()`: add item to the end
// - `.pop()`: remove last item
// - `.indexOf()`: find position
// - `.join()`: turn array into string
// - `.filter()`: create a new array with filtered items
// - `.map()`: create a new array with transformed items

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Array Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// • Arrays in TypeScript: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
// • Iterating Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
