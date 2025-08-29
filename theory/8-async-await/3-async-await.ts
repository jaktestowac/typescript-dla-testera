// 📘 Lesson: Async & Await
// This shows how to write clean asynchronous code using `await`

// -------------------------
// ✅ Clean syntax with async/await
// -------------------------

console.log("\n-------------------------")
console.log("✅ Clean syntax with async/await")
console.log("-------------------------\n")

async function loadData(): Promise<string> {
    // Simulate loading data with a delay
    // This function returns a Promise that resolves after 1 second
    console.log("🚚 Loading data...")
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🎯 Data loaded")
            resolve("✅ Data loaded (no await)")
        }, 100)
    })
}

console.log("1. Starting request...")

const result = await loadData()

console.log("2. Request sent!")

console.log("3. Result:", result)

// -------------------------
// 🧠 Summary:
// -------------------------
// - `await` pauses the function until the result is ready
// - Looks like normal code – much easier to read!
// - Works only inside `async` functions

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// • Async/Await: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// • TypeScript Async Functions: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#promises

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
