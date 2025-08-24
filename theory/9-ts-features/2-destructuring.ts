// 📘 Lesson: Destructuring Basics in TypeScript
// In this lesson, you'll learn a simple trick called "destructuring".
// It helps you take values out of arrays or objects and store them in variables easily.

// Why is destructuring useful?
// 👉 It helps you write shorter, cleaner code
// 👉 It makes your code easier to read and understand

// -------------------------
// 📦 Destructuring Arrays
// -------------------------
// Arrays store values in a list. Destructuring lets you "unpack" them into variables.

console.log("\n-------------------------")
console.log("📦 Destructuring Arrays")
console.log("-------------------------\n")

const fruits = ["apple", "banana", "cherry"]

// ✅ Without destructuring (manual way):
const firstFruit = fruits[0]
const secondFruit = fruits[1]
console.log("Manual access:", firstFruit, secondFruit)

// ✅ With destructuring:
const [first, second] = fruits
console.log("Destructured:", first, second) // apple banana

// 🧠 How it works:
// The first value in the array goes to `first`, the second goes to `second`
// What happens to the rest?
// They are ignored unless you specify them!

// ✅ You can skip items by leaving a blank space
const [, , third] = fruits
console.log("Only the third fruit:", third) // cherry

// What if there are more variables than items?
// The extra variables will be `undefined`
const [a, b, c, d] = fruits
console.log("Destructured:", a, b, c, d) // apple banana cherry undefined

// ✅ With destructuring:
const [firstOne, ...theRest] = fruits
console.log("Destructured:", firstOne, theRest) // apple [ 'banana', 'cherry' ]

// -------------------------
// 🧱 Destructuring Objects
// -------------------------
// Objects store data using keys (like "name", "age").
// Destructuring lets you pull values out of an object into variables.

console.log("\n-------------------------")
console.log("🧱 Destructuring Objects")
console.log("-------------------------\n")

const user = {
    name: "Alice",
    age: 28,
    country: "Poland"
}

// ✅ Without destructuring (manual way):
const userName = user.name
const userAge = user.age
console.log("Manual access:", userName, userAge)

// ✅ With destructuring:
const { name, age } = user
console.log("Destructured access:", name, age)

// 🧠 How it works:
// TypeScript matches the keys `name` and `age` in the object
// and stores the values in variables with the same name

// ✅ You can also rename while destructuring:
const { country: nation } = user
console.log("Renamed variable:", nation)

// 🧠 The value of `user.country` is stored in a new variable called `nation`

// -------------------------
// 🧠 Summary
// -------------------------
// ✅ Destructuring helps you extract data quickly from arrays or objects
// ✅ With arrays, it’s about position: [first, second]
// ✅ With objects, it’s about names: { name, age }
// ✅ You can even rename variables: { country: nation }

// Use destructuring when:
// - You want cleaner, shorter code
// - You're working with APIs or functions that return objects/arrays
// - You're accessing multiple properties from an object

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Destructuring Assignment: https://www.typescriptlang.org/docs/handbook/variable-declarations.html#destructuring
// • Array Destructuring: https://www.typescriptlang.org/docs/handbook/variable-declarations.html#array-destructuring
// • Object Destructuring: https://www.typescriptlang.org/docs/handbook/variable-declarations.html#object-destructuring
// • Default Values: https://www.typescriptlang.org/docs/handbook/variable-declarations.html#default-values

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
