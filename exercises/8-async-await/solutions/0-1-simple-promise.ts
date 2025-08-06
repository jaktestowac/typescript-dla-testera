// 🧪 Exercise 0.1: Simple Promise (Beginner Friendly)
// This exercise will help you understand what a Promise is in simple terms.

// -------------------------
// ✅ Exercise: Simple Promise ✅
// -------------------------

export {} // Ignore this line

// -------------------------
// 🎯 Your Task: Work with an existing Promise
// -------------------------

// We've created a promise for you that simulates fetching user data
const fetchUserData = new Promise((resolve, reject) => {
    // Simulate API call delay
    setTimeout(() => {
        const userData = {
            id: 1,
            name: "Alice Johnson",
            email: "alice@example.com",
            isActive: true
        };
        
        // Simulate success (90% chance)
        if (Math.random() > 0.1) {
            resolve(userData);
        } else {
            reject("Failed to fetch user data");
        }
    }, 1500);
});

// Steps:
// 1. Use .then() to handle the successful result from fetchUserData
// 2. Inside .then(), print: "User data received: " + the user's name
// 3. Use .catch() to handle any errors
// 4. Inside .catch(), print: "Error: " + the error message
// 5. Add .finally() to print "Promise completed!" regardless of success/failure

// 💭 Questions to think about:
// - What is a Promise? (A way to handle async operations that will complete later)
// - Why do we use .then(), .catch(), and .finally()?
// - What happens if you don't handle errors with .catch()? (Unhandled promise rejection)
// - What's the difference between .then() and .catch()?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "User data received: Alice Johnson"
// "Promise completed!"
// 
// OR (if error occurs):
// "Error: Failed to fetch user data"
// "Promise completed!"
// -------------------------

// 👇 Your code here 👇 

fetchUserData
  .then((user: any) => { // Step 1: Use .then() to handle success
    console.log("User data received: " + user.name) // Step 2: Print user's name
  })
  .catch((error) => { // Step 3: Use .catch() to handle errors
    console.log("Error: " + error) // Step 4: Print error message
  })
  .finally(() => { // Step 5: Use .finally() to print completion
    console.log("Promise completed!")
  }) 