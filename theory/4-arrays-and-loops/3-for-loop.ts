// 📘 Lesson: For Loop in TypeScript
// In this lesson, you'll learn how to repeat actions using a `for` loop.

// -------------------------
// ❓ What is a loop?
// -------------------------
// A loop repeats a block of code multiple times.
// Use it when you want to do something for each item in a list or count through a range of numbers.

// Example: Say "Hello" 3 times

console.log("Hello")
console.log("Hello")
console.log("Hello")

// That works, but it's not efficient! Let's use a loop.

// -------------------------
// 🔁 Basic `for` loop
// -------------------------
console.log("-------------------------")
console.log("🔁 Basic for loop")
console.log("-------------------------")

for (let i = 1; i <= 3; i++) {
    console.log("Hello number", i)
}

// Output:
// Hello number 1
// Hello number 2
// Hello number 3

// -------------------------
// 🔢 Loop from 1 to 5
// -------------------------
console.log("-------------------------")
console.log("🔢 Loop from 1 to 5")
console.log("-------------------------")

for (let counter = 1; counter <= 5; counter++) {
    console.log("Counter is:", counter)
}

// -------------------------
// 🔁 Loop through an array
// -------------------------
console.log("-------------------------")
console.log("🔁 Loop through an array")
console.log("-------------------------")

const colors = ["red", "green", "blue"]

// Using a `for` loop to go through each color

console.log("Colors in the array:")

for (let i = 0; i < colors.length; i++) {
    console.log("Color:", colors[i])
}

// Explanation:
// - `i` is the index (starting from 0)
// - `colors[i]` gives you the item at that index

// -------------------------
// 🧠 Loop structure reminder:
// -------------------------
// for (let i = START; i <= END; i++) {
//   // code to repeat
// }

// -------------------------
// 🧠 Summary:
// -------------------------
// - Use `for` loops to repeat code
// - Useful for counting or going through arrays
// - `i++` means "increase i by 1 after each round"

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • For Loops: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
// • For...of loops: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// • Arrays and Iteration: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
