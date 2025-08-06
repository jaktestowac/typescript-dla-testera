// 📘 Lesson: Promise Basics in TypeScript
// In this lesson, you'll learn what Promises are and how to work with them using .then(), .catch(), and .finally().

// -------------------------
// 🤔 What is a Promise?
// -------------------------
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
// Think of it as a "promise" to give you a result later.

console.log("-------------------------")
console.log("🤔 What is a Promise?")
console.log("-------------------------")

// Creating a simple Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate some async work
    setTimeout(() => {
        const success = Math.random() > 0.5
        if (success) {
            resolve("Operation completed successfully!")
        } else {
            reject("Operation failed!")
        }
    }, 1000)
})

console.log("Promise created:", myPromise) // Promise { <pending> }

// -------------------------
// ✅ Using .then() to handle success
// -------------------------
console.log("-------------------------")
console.log("✅ Using .then() for success")
console.log("-------------------------")

const successPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Data loaded successfully!")
    }, 500)
})

successPromise.then((result) => {
    console.log("Success:", result)
})

// -------------------------
// ❌ Using .catch() to handle errors
// -------------------------
console.log("-------------------------")
console.log("❌ Using .catch() for errors")
console.log("-------------------------")

const errorPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong!")
    }, 500)
})

errorPromise.catch((error) => {
    console.log("Error:", error)
})

// -------------------------
// 🔄 Chaining .then() and .catch()
// -------------------------
console.log("-------------------------")
console.log("🔄 Chaining .then() and .catch()")
console.log("-------------------------")

const chainedPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        const random = Math.random()
        if (random > 0.3) {
            resolve(random * 100)
        } else {
            reject("Random number too low!")
        }
    }, 300)
})

chainedPromise
    .then((result) => {
        console.log("Got result:", result)
        return result * 2 // Pass to next .then()
    })
    .then((doubled) => {
        console.log("Doubled result:", doubled)
    })
    .catch((error) => {
        console.log("Caught error:", error)
    })

// -------------------------
// 🧹 Using .finally() for cleanup
// -------------------------
console.log("-------------------------")
console.log("🧹 Using .finally() for cleanup")
console.log("-------------------------")

const cleanupPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Task completed!")
    }, 200)
})

cleanupPromise
    .then((result) => {
        console.log("Result:", result)
    })
    .catch((error) => {
        console.log("Error:", error)
    })
    .finally(() => {
        console.log("Cleanup: Always runs regardless of success/failure")
    })

// -------------------------
// 🔄 Promise.all() - Wait for multiple promises
// -------------------------
console.log("-------------------------")
console.log("🔄 Promise.all() - Multiple promises")
console.log("-------------------------")

const promise1 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("First"), 100)
})

const promise2 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Second"), 200)
})

const promise3 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Third"), 300)
})

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises completed:", results)
    })
    .catch((error) => {
        console.log("One of the promises failed:", error)
    })

// -------------------------
// ⚡ Promise.race() - First to complete wins
// -------------------------
console.log("-------------------------")
console.log("⚡ Promise.race() - First to complete")
console.log("-------------------------")

const fastPromise = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Fast"), 100)
})

const slowPromise = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Slow"), 500)
})

Promise.race([fastPromise, slowPromise])
    .then((result) => {
        console.log("Winner:", result) // "Fast" will win
    })

// -------------------------
// 🔄 Converting callbacks to Promises
// -------------------------
console.log("-------------------------")
console.log("🔄 Converting callbacks to Promises")
console.log("-------------------------")

// Old callback style
function oldCallbackFunction(callback: (error: string | null, result?: string) => void) {
    setTimeout(() => {
        const success = Math.random() > 0.5
        if (success) {
            callback(null, "Success!")
        } else {
            callback("Failed!")
        }
    }, 200)
}

// Convert to Promise
function newPromiseFunction(): Promise<string> {
    return new Promise((resolve, reject) => {
        oldCallbackFunction((error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result!)
            }
        })
    })
}

// Using the new Promise-based function
newPromiseFunction()
    .then((result) => console.log("Promise result:", result))
    .catch((error) => console.log("Promise error:", error))

// -------------------------
// 🧠 Promise states
// -------------------------
// A Promise can be in one of three states:
// 1. Pending: Initial state, neither fulfilled nor rejected
// 2. Fulfilled: Operation completed successfully
// 3. Rejected: Operation failed

// -------------------------
// 🧠 When to use Promises?
// -------------------------
// Use Promises when:
// ✅ You have asynchronous operations (API calls, file reading, etc.)
// ✅ You want to avoid callback hell
// ✅ You need to handle success and error cases separately
// ✅ You want to chain multiple async operations

// -------------------------
// 🧠 Summary:
// -------------------------
// - Promises represent async operations that will complete later
// - Use .then() to handle successful results
// - Use .catch() to handle errors
// - Use .finally() for cleanup code
// - Promise.all() waits for all promises to complete
// - Promise.race() returns the first completed promise
// - Promises help avoid callback hell and make async code more readable

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// • Using Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// • Promise.all(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// • Promise.race(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {} 