// 📘 Lesson: Basic Async Function
// In this lesson, you'll learn what a Promise is
// and what happens when you call an `async` function.

// -------------------------
// 🤔 What is a Promise?
// -------------------------
// A Promise is like a box that will eventually have a value inside.
// That value might not be ready right now — it may take some time.
// For example, when loading data from the internet, we don't get it instantly.

// Think of it like ordering pizza:
// 🍕 You order it → wait a bit → then it arrives!
// The Promise is the "order" — you'll get the result later.

// -------------------------
// ✅ Async function always returns a Promise
// -------------------------

console.log("\n-------------------------")
console.log("🧠 Basic async example")
console.log("-------------------------\n")

async function getGreeting(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello!")
        }, 1000)
    })
}

console.log("Calling async function...")

const result = getGreeting()

console.log("Result:", result) // ❗ This shows: Promise { <pending> }
// The result is a Promise, not the actual greeting yet!
// This means the function is still working in the background.
// You can think of it like a "promise" to give you the result later.

// You don't get the "Hello!" immediately — you get a Promise box first

// To get the actual value, you have to wait for the Promise to finish:
result.then((text) => {
    console.log("Greeting:", text) // ✅ This will print: "Greeting: Hello!"
})

// -------------------------
// 🧠 Summary:
// -------------------------
// - `Promise` = something that will be ready in the future
// - `async` functions always return a Promise
// - To get the result, use `.then()` or `await`
// - In the next lesson, you'll learn why `await` is easier to read

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// • Async Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// • TypeScript Async Functions: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#promises

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
