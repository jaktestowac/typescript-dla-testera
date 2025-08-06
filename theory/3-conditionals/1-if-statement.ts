// 📘 Lesson: if Statements in TypeScript
// In this lesson, you'll learn how to run code *only when a condition is true* using `if` and `else`.

// -------------------------
// ❓ What is an "if" statement?
// -------------------------
// An `if` statement checks a condition. If it's true, it runs the code inside the block.
// Think of it like: "If it's raining, take an umbrella."

// -------------------------
// ✅ Real-life example (in words)
// -------------------------
// if (it is raining) {
//     take an umbrella
// } else {
//     go without it
// }

// -------------------------
// 💻 Let's see it in code
// -------------------------

console.log("-------------------------")
console.log("🌤 if statement - basic example")
console.log("-------------------------")

let isRaining: boolean = true

if (isRaining) {
    console.log("Take an umbrella ☔")
}

console.log("Walk outside 🚶")

// Output (if isRaining = true):
// Take an umbrella ☔
// Walk outside 🚶

// -------------------------
// ❗ What if the condition is false?
// -------------------------

console.log("-------------------------")
console.log("🌤 if statement - when condition is false")
console.log("-------------------------")

let isSunny: boolean = false

if (isSunny) {
    console.log("Wear sunglasses 😎")
}

console.log("Go to work 🏢")

// Output:
// Go to work 🏢 (the sunglasses line is skipped)

// -------------------------
// 🔁 Using `else` – do something if false
// -------------------------

console.log("-------------------------")
console.log("🔁 if...else")
console.log("-------------------------")

let isWeekend: boolean = false

if (isWeekend) {
    console.log("Sleep in 😴")
} else {
    console.log("Wake up early ⏰")
}

// -------------------------
// 🔄 Using `else if` – multiple options
// -------------------------

console.log("-------------------------")
console.log("🔄 if...else if...else")
console.log("-------------------------")

let temperature: number = 25

if (temperature > 30) {
    console.log("It's hot! 🥵")
} else if (temperature > 20) {
    console.log("It's nice weather! 😊")
} else {
    console.log("It's cold! 🧥")
}

// -------------------------
// 🧠 Summary:
// -------------------------
// - `if` checks if something is true
// - `else` runs if it's false
// - `else if` allows multiple conditions
// - Use comparison operators like `>`, `<`, `===`

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • If...else statements: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// • Comparison Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators
// • Boolean Type: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
