// 📘 Lesson: Async Code Without Await
// This shows how we used to handle asynchronous code before `await`

// -------------------------
// ⏳ Simulate loading data using a Promise
// -------------------------

function loadData(): Promise<string> {
    // Simulate loading data with a delay
    // This function returns a Promise that resolves after 1 second
    console.log("Loading data...")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Data loaded (no await)")
        }, 1000)
    })
}

console.log("Starting request...")

loadData().then((result) => {
    console.log("Loaded:", result)
})

console.log("Request sent!")

// -------------------------
// 🧠 Summary:
// -------------------------
// - Promises use `.then()` to handle results later.
// - Code can get messy and hard to read if you have many `.then()`.
// - Next: use `await` for cleaner syntax!

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// • Using Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// • Async Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
