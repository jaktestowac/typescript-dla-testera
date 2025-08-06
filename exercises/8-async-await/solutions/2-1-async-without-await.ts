// 🧪 Exercise 2.1: Async without await
// This exercise will help you practice async functions using .then() method.

// -------------------------
// ✅ Exercise: Async without await ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an async function called `fetchUserData` using the async keyword
// 2. Inside the function, return a new Promise that resolves with the user object
// 3. Call the function and use .then() method to handle the resolved data
// 4. Inside .then(), access the name property from the user object
// 5. Print the user's name using console.log()

// 💭 Questions to think about:
// - What happens if you don't use .then() to handle the Promise?
// - What's the difference between this approach and async/await?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "User name: John"
// -------------------------

// 👇 Your code here 👇
async function fetchUserData() {
    // Step 1: Create async function
    return new Promise((resolve) => {
        // Step 2: Return a new Promise
        resolve({ name: "John" }) // Resolve with user object
    })
}
fetchUserData().then((user: any) => {
    // Step 3: Call and use .then()
    console.log("User name: " + user.name) // Step 4-5: Print user's name
})
