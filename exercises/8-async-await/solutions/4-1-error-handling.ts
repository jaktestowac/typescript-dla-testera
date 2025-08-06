// 🧪 Exercise 4.1: Error handling in async functions
// This exercise will help you practice error handling with async/await.

// -------------------------
// ✅ Exercise: Error handling in async functions ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `riskyOperation` that returns a new Promise
// 2. Use Math.random() to randomly resolve or reject the Promise
// 3. Create an async function called `handleRiskyOperation`
// 4. Use try-catch block to await the riskyOperation
// 5. In the try block, print "Success!"
// 6. In the catch block, print "Error: " + error.message

// 💭 Questions to think about:
// - What happens if you don't use try-catch with async functions?
// - How can you handle different types of errors differently?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Success!" or "Error: Something went wrong!"
// -------------------------

// 👇 Your code here 👇
function riskyOperation() {
    // Step 1: Create riskyOperation
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Success!")
        } else {
            reject(new Error("Something went wrong!"))
        }
    })
}

async function handleRiskyOperation() {
    // Step 3: Create async function
    try {
        // Step 4: Use try-catch
        const result = await riskyOperation()
        console.log(result) // Step 5: Print success
    } catch (error: any) {
        console.log("Error: " + error.message) // Step 6: Print error
    }
}

handleRiskyOperation()
