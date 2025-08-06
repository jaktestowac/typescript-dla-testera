// 📘 Lesson: For-of Loops in TypeScript
// In this lesson, you'll learn how to use for-of loops to iterate through arrays and other iterable objects.

// -------------------------
// 🔄 What is a for-of loop?
// -------------------------
// A for-of loop is a modern way to iterate through arrays and other iterable objects.
// It gives you direct access to the values (not the indices).

console.log("-------------------------")
console.log("🔄 Basic for-of loop")
console.log("-------------------------")

const colors = ["red", "green", "blue"]

// Using for-of to get each color directly
for (const color of colors) {
    console.log("I like", color)
}

// -------------------------
// 🔄 For-of vs traditional for loop
// -------------------------
console.log("-------------------------")
console.log("🔄 For-of vs traditional for")
console.log("-------------------------")

const fruits = ["apple", "banana", "orange"]

// Traditional for loop (using index)
console.log("Traditional for loop:")
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index", i, "is", fruits[i])
}

// For-of loop (direct value access)
console.log("For-of loop:")
for (const fruit of fruits) {
    console.log("Fruit:", fruit)
}

// -------------------------
// 🔄 For-of with strings
// -------------------------
console.log("-------------------------")
console.log("🔄 For-of with strings")
console.log("-------------------------")

const message = "Hello"

for (const letter of message) {
    console.log("Letter:", letter)
}

// -------------------------
// 🔄 For-of with numbers array
// -------------------------
console.log("-------------------------")
console.log("🔄 For-of with numbers")
console.log("-------------------------")

const numbers = [1, 2, 3, 4, 5]
let sum = 0

for (const num of numbers) {
    sum += num
    console.log("Adding", num, "- Total so far:", sum)
}

console.log("Final sum:", sum)

// -------------------------
// ⚠️ Important: const vs let in for-of
// -------------------------
console.log("-------------------------")
console.log("⚠️ Const vs let in for-of")
console.log("-------------------------")

const scores = [85, 92, 78, 96]

// Using const (recommended) - you can't reassign the variable
for (const score of scores) {
    console.log("Score:", score)
    // score = 100 // ❌ This would cause an error
}

// Using let - you can reassign (but usually don't need to)
for (let score of scores) {
    console.log("Score:", score)
    // score = 100 // ✅ This works, but doesn't change the original array
}

// -------------------------
// 🔄 For-of vs for-in
// -------------------------
console.log("-------------------------")
console.log("🔄 For-of vs for-in")
console.log("-------------------------")

const items = ["a", "b", "c"]

// For-of: gets the values
console.log("For-of (values):")
for (const item of items) {
    console.log("Value:", item)
}

// For-in: gets the indices (as strings)
console.log("For-in (indices):")
for (const index in items) {
    console.log("Index:", index, "Value:", items[index])
}

// -------------------------
// 🔄 For-of with objects (Object.values, Object.keys, Object.entries)
// -------------------------
console.log("-------------------------")
console.log("🔄 For-of with objects")
console.log("-------------------------")

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
}

// Iterate through object values
console.log("Object values:")
for (const value of Object.values(person)) {
    console.log("Value:", value)
}

// Iterate through object keys
console.log("Object keys:")
for (const key of Object.keys(person)) {
    console.log("Key:", key)
}

// Iterate through object entries (key-value pairs)
console.log("Object entries:")
for (const [key, value] of Object.entries(person)) {
    console.log(key + ":", value)
}

// -------------------------
// 🧠 When to use for-of?
// -------------------------
// Use for-of when:
// ✅ You need the values from an array (not the indices)
// ✅ You want simpler, more readable code
// ✅ You're working with modern JavaScript/TypeScript

// Use traditional for when:
// ✅ You need the index
// ✅ You need to iterate backwards
// ✅ You need to skip elements or break early

// -------------------------
// 🧠 Summary:
// -------------------------
// - For-of loops give you direct access to array values
// - Use `const` for the loop variable (recommended)
// - Works with arrays, strings, and other iterables
// - Simpler and more readable than traditional for loops
// - Use Object.values/keys/entries to iterate through objects

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • For...of loops: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// • Iteration protocols: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
// • Object methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {} 