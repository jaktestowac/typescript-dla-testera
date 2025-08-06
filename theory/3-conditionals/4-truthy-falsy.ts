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
console.log("-------------------------")
console.log("❌ Falsy values")
console.log("-------------------------")

console.log("Boolean(false) result:", Boolean(false)) // false
console.log("Boolean(0) result:", Boolean(0)) // false
console.log('Boolean("") result:', Boolean("")) // false
console.log("Boolean(null) result:", Boolean(null)) // false
console.log("Boolean(undefined) result:", Boolean(undefined)) // false
console.log("Boolean(NaN) result:", Boolean(NaN)) // false

// -------------------------
// ✅ Truthy values
// -------------------------
// Everything else is considered truthy:
console.log("-------------------------")
console.log("✅ Truthy values")
console.log("-------------------------")

console.log("Boolean(true) result:", Boolean(true)) // true
console.log("Boolean(1) result:", Boolean(1)) // true
console.log('Boolean("hello") result:', Boolean("hello")) // true
console.log("Boolean([]) result:", Boolean([])) // true (even empty array!)
console.log("Boolean({}) result:", Boolean({})) // true (even empty object!)
console.log('Boolean("0") result:', Boolean("0")) // true (non-empty string)

// -------------------------
// ✅ Example: Login check
// -------------------------
console.log("-------------------------")
console.log("✅ Example: Login check")
console.log("-------------------------")

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
console.log("-------------------------")
console.log("✅ Example: Custom message")
console.log("-------------------------")

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
