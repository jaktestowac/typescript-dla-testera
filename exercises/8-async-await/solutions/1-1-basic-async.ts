// 🧪 Exercise 1.1: Basic async function
// This exercise will help you practice async functions.

// -------------------------
// ✅ Exercise: Basic async function ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an async function called `fetchData`
// 2. Inside the function, return a new Promise
// 3. The Promise should resolve with "Data fetched successfully!"
// 4. Call the function and use .then() to handle the result
// 5. Print the result using console.log()

// 💭 Questions to think about:
// - What happens if you don't use .then() to handle the Promise?
// - What's the difference between async/await and .then()?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Data fetched successfully!"
// -------------------------

// 👇 Your code here 👇 
async function fetchData() { // Step 1: Create async function
  return new Promise((resolve) => { // Step 2: Return a new Promise
    resolve("Data fetched successfully!") // Step 3: Resolve with message
  })
}
fetchData().then((result) => { // Step 4: Call and use .then()
  console.log(result) // Step 5: Print result
}) 