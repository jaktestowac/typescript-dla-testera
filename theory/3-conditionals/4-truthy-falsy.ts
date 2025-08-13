// 📘 Lesson: Truthy and Falsy Values in TypeScript
// In this lesson, you'll learn what values are considered "truthy" or "falsy" in JavaScript/TypeScript,
// and how they behave in conditions like `if` statements.

// -------------------------
// ❓ What are truthy and falsy values?
// -------------------------
// In TypeScript (and JavaScript), all values have an implicit boolean meaning.
// When used in conditions (like `if`), values are treated as either:
// - ✅ truthy → behaves like `true`
// - ❌ falsy → behaves like `false`

// -------------------------
// ❌ Falsy values
// -------------------------
// These are values that behave like `false` when evaluated in conditions:
console.log("\n-------------------------")
console.log("❌ Falsy values")
console.log("-------------------------\n")

console.log("Boolean(false) result:", Boolean(false)) // false
console.log("Boolean(0) result:", Boolean(0)) // false
console.log('Boolean("") result:', Boolean("")) // false
console.log("Boolean(null) result:", Boolean(null)) // false
console.log("Boolean(undefined) result:", Boolean(undefined)) // false
console.log("Boolean(NaN) result:", Boolean(NaN)) // false

const value = ""

if (value) {
    console.log("This won't run because value is falsy!")
}

// -------------------------
// ✅ Truthy values
// -------------------------
// Everything else is considered truthy:
console.log("\n-------------------------")
console.log("✅ Truthy values")
console.log("-------------------------\n")

console.log("Boolean(true) result:", Boolean(true)) // true
console.log("Boolean(1) result:", Boolean(1)) // true
console.log('Boolean("hello") result:', Boolean("hello")) // true
console.log("Boolean([]) result:", Boolean([])) // true (even empty array!)
console.log("Boolean({}) result:", Boolean({})) // true (even empty object!)
console.log('Boolean("0") result:', Boolean("0")) // true (non-empty string)

const otherValue = []

if (otherValue) {
    console.log("This will run because otherValue is truthy!")
    console.log("Even an empty array is truthy!")
}

// -------------------------
// 🤔 Example: where a number is 0 but not falsy 
// -------------------------

console.log("\n-------------------------")
console.log("🤔 Example: where a number is 0 but not falsy")
console.log("-------------------------\n")

const number = "0"

// In this case, number is a string containing "0", which is truthy
// Let's check if the number is truthy:
console.log(`Number: "${number}"`)
console.log("Checking if number is truthy...")
if (number) {
    console.log("✅ The number is truthy:", number)
}
else {
    console.log("❌ The number is falsy")
}

console.log("\n-------------------------")
console.log("Lets check if the number is exactly 0 (number type)...")
console.log("-------------------------\n")

// thats why we should use strict equality (===) to check for exact values
// If we used `if (number == 0)`, it would be false because "0" (string) is not equal to 0 (number).
// But `if (number === "0")` would be true because both are strings.
// Example:
console.log("Checking if number is exactly '0' (string)...")
if (number === "0") {
    console.log("✅ The number is exactly '0' (string)")
} else {
    console.log("❌ The number is not exactly '0' (string)")
}

// -------------------------
// ✅ Example: Login check
// -------------------------
console.log("\n-------------------------")
console.log("✅ Example: Login check")
console.log("-------------------------\n")

const username = ""

// In this case, username is an empty string, which is falsy
// Let's check if the user is logged in:
console.log(`Username: "${username}"`)
console.log("Checking if user is logged in...")

if (username) {
    console.log("✅ Welcome,", username)
} else {
    console.log("❌ Please enter your name")
}

// Since username is an empty string (""), it's falsy → goes to the `else` block

// -------------------------
// ✅ Example: Custom message
// -------------------------
console.log("\n-------------------------")
console.log("✅ Example: Custom message")
console.log("-------------------------\n")

const customMessage = null

const finalMessage = customMessage || "Default message"
console.log("Message:", finalMessage) // "Default message"

// The `||` operator returns the first truthy value

// -------------------------
// 🧠 Summary:
// -------------------------
// ❌ Falsy values: false, 0, "", null, undefined, NaN
// ✅ Everything else is truthy
//
// In conditions, TypeScript will treat these values as true/false automatically.
// Use this to write cleaner, shorter logic in if statements or expressions.

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Truthy and Falsy: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// • Logical Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// • TypeScript Narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
