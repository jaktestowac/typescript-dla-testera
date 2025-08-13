// 📘 Lesson: Displaying Output in TypeScript
// In this lesson, you'll learn different ways to display values using console.log
// and how to combine text and variables in your messages.

// -------------------------
// ✏️ Method 1: String Concatenation (+)
// -------------------------
console.log("\n-------------------------")
console.log("✏️ String Concatenation (+)")
console.log("-------------------------\n")

let name: string = "Alice"
let age: number = 28

console.log("Hello, " + name + "!") // "Hello, Alice!"
console.log("You are " + age + " years old.") // "You are 28 years old."

// Benefits:
// - Simple and straightforward
// - Works with strings and numbers
// Minuses:
// - Can get messy with multiple variables
// - Requires careful handling of spaces and punctuation
// - Not as readable for complex messages

// -------------------------
// 💬 Method 2: Template Literals (` `)
// -------------------------
// Template literals use backticks (`) and ${} to embed variables

console.log("\n-------------------------")
console.log("💬 Template Literals")
console.log("-------------------------\n")

console.log(`Hello, ${name}!`) // "Hello, Alice!"
console.log(`You are ${age} years old.`) // "You are 28 years old."

// Benefits:
// - Clean and readable
// - Supports multi-line strings
// - Automatically handles variable types
// Minuses:
// - Requires backticks (`) instead of quotes
// - Not supported in very old browsers (but fine for TypeScript)

// -------------------------
// 🧱 Method 3: Comma-separated logging
// -------------------------
// console.log can accept multiple arguments separated by commas

console.log("\n-------------------------")
console.log("🧱 Comma-separated values")
console.log("-------------------------\n")

console.log("Hello,", name, "!") // "Hello, Alice !"
console.log("You are", age, "years old.") // "You are 28 years old."

// Benefits:
// - Automatically adds spaces between values
// - Good for quick debugging
// - No need for string concatenation or template literals
// Minuses:
// - Less control over formatting
// - Not suitable for complex messages
// - Can be confusing with many variables
// - Not as readable for long messages

// -------------------------
// 🧠 Summary:
// -------------------------
// ✅ Use `+` to combine strings and values – simple but can get messy (e.g. "Hello, " + name + "!")
// ✅ Template literals (``) are clean and readable – great for formatting (e.g. `Hello, ${name}!`)
// ✅ Comma-separated logging works for debugging and quick prints (e.g. console.log("Hello,", name, "!"))

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Template Literals: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
// • String Interpolation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/
// • Console API: https://developer.mozilla.org/en-US/docs/Web/API/Console/log

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
