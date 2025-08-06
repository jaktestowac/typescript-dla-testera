// 📘 Lesson: Error Handling in TypeScript
// In this lesson, you'll learn how to handle unexpected problems in your code using:
// - try / catch blocks
// - finally
// - understanding simple runtime errors

// -------------------------
// 🧠 What is an error?
// -------------------------
// An error happens when something goes wrong during code execution.
// Example: Trying to divide by zero, access something that doesn't exist.
// Or call something incorrectly.

// Errors can crash your program - unless you handle them.

// -------------------------
// ❓ Why do errors happen?
// -------------------------
// Sometimes we make mistakes in code - like using a variable that doesn't exist,
// or trying to convert something that isn't valid.
// These mistakes are called **runtime errors** because they happen *while* the program is running.

// -------------------------
// 🚨 Example: Crashing code (without handling)
// -------------------------

console.log("-------------------------")
console.log("🚨 Code that causes an error (not handled)")
console.log("-------------------------")

// 🔓 Uncomment this to see a crash in the console
// let result = "hello" / 2 // ❌ This will print NaN or behave unexpectedly
// console.log("Result:", result)

// 🔓 Uncomment this to see an error
// const value = JSON.parse("not a valid JSON") // ❌ This will throw an error

// -------------------------
// ✅ try / catch – basic error handling
// -------------------------
// TypeScript gives us `try` and `catch` to stop crashes and handle errors safely.

console.log("-------------------------")
console.log("✅ Using try / catch")
console.log("-------------------------")

try {
    console.log("Entring try block...")
    const value = JSON.parse("not a valid JSON")
    console.log("Parsed value:", value)
} catch (error) {
    console.log("Entring catch block...")
    console.log("Something went wrong!")
    console.log("Error message:", error)
}

// ✅ The app continues to work after the error!

// -------------------------
// 🧹 finally – always runs
// -------------------------
// `finally` runs no matter what – even if there's an error or not.

console.log("-------------------------")
console.log("🧹 finally block")
console.log("-------------------------")

try {
    console.log("About to do something risky...")
    // You can simulate an error here if you want:
    // throw new Error("Oops!") // 🔓 Uncomment this
} catch (err) {
    console.log("Caught an error!")
    throw err
} finally {
    console.log("✅ Finally block always runs")
}

// Code from the recording:
// 🔓 Uncomment to test behaviour of finally

// try {
//     console.log("About to do something risky...")
//     // You can simulate an error here if you want:
//     throw new Error("Oops!") // 🔓 Uncomment this
// } catch (err) {
//     console.log("Caught an error!")
//     throw err
// } finally {
//     console.log("✅ Finally block always runs")
// }
//
// console.log("🤔 will it run?? 🤔")

// -------------------------
// 🧠 Summary:
// -------------------------
// - ❗ Errors happen when something goes wrong while your code runs
// - ✅ Use `try { ... } catch { ... }` to stop the app from crashing
// - 🧹 Use `finally` for code that should always run
// - ⚠️ Don't panic - errors are normal and can be handled safely!

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Error Handling: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements
// • Try...catch statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// • TypeScript Error Types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
