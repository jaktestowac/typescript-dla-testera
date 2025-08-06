// 🧪 Exercise 3.1: Async-await
// This exercise will help you practice async-await syntax.

// -------------------------
// ✅ Exercise: Async-await ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `delay` that returns a new Promise
// 2. Use setTimeout() inside the Promise to resolve after 100ms
// 3. Create an async function called `processData`
// 4. Inside processData, print "Processing..."
// 5. Use await to wait for the delay function
// 6. After the delay, print "Done!"

// 💭 Questions to think about:
// - What happens if you remove the await keyword?
// - How would you handle errors in an async function?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Processing..."
// "Done!"
// -------------------------

// 👇 Your code here 👇 
function delay() { // Step 1: Create delay function
  return new Promise((resolve) => {
    setTimeout(resolve, 100) // Step 2: setTimeout for 100ms
  })
}
async function processData() { // Step 3: Create async function
  console.log("Processing...") // Step 4: Print before delay
  await delay() // Step 5: Await delay
  console.log("Done!") // Step 6: Print after delay
}
processData() 