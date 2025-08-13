// 📘 Lesson: Ternary Operator in TypeScript

// What is ternary operator? (PL: Operator warunkowy trójargumentowy )
// The ternary operator is a shorthand way to write an if-else statement.
// It has three parts:
// 1. A condition to check
// 2. The value if the condition is true
// 3. The value if the condition is false

// -------------------------
// 🔍 Example: Checking an age - classic if else
// -------------------------
console.log("\n-------------------------")
console.log("🔍 Example: Checking an age")
console.log("-------------------------\n")

const age = 20

if (age < 18) {
    console.log("✅ You are a minor")
} else {
    console.log("✅ You are an adult")
}

// -------------------------
// 🔍 Example: Checking an age - ternary operator
// -------------------------
console.log("\n-------------------------")
console.log("🔍 Example: Checking an age - ternary operator")
console.log("-------------------------\n")

const age2 = 20
const message2 = age2 < 18 ? "✅ You are a minor" : "✅ You are an adult"
console.log(message2)

// or even shorter!

age2 < 18 ? console.log("✅ You are a minor") : console.log("✅ You are an adult")

// -------------------------
// ⚠️ Nesting Ternaries (Use Sparingly)
// -------------------------

console.log("\n-------------------------")
console.log("⚠️ Nesting Ternaries")
console.log("-------------------------\n")

const age3 = 20
const ageMessage = age3 < 18 ? "You are a minor" : age3 < 65 ? "You are an adult" : "You are a senior citizen"
console.log(ageMessage)

// Pros:
// - Can make code shorter
// - Useful for simple conditions

// Cons:
// - Can be hard to read
// - Avoid nesting too much!

// -------------------------
// ⚠️ When to Use If/Else Instead
// -------------------------
// Use if/else for more than two choices or complex logic.

// -------------------------
// 🧠 Summary:
// -------------------------
// - Ternary operator: condition ? ifTrue : ifFalse
// - Great for quick, two-way decisions
// - Keep logic simple to stay readable

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Conditional (Ternary) Operator: https://www.typescriptlang.org/docs/handbook/2/expressions.html#conditional-expressions
// • JavaScript MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
