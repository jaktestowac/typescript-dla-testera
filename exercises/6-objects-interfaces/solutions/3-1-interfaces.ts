// 🧪 Exercise 3.1: Interfaces
// This exercise will help you practice using interfaces.

// -------------------------
// ✅ Exercise: Interfaces ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an interface called `User` using the interface keyword
// 2. Define properties: id (number), name (string), email (string)
// 3. Create a function called `displayUser` that takes a User parameter
// 4. Inside the function, access the properties using dot notation
// 5. Create a message using template literals
// 6. Create a user object that matches the User interface
// 7. Call the function with the user object

// 💭 Questions to think about:
// - What happens if you try to create a user object missing a required property?
// - Can you make some properties optional in the interface?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "User 1: Alice (alice@example.com)"
// -------------------------

// 👇 Your code here 👇
interface User {
    // Step 1: Create interface
    id: number
    name: string
    email: string
}

function displayUser(user: User) {
    // Step 3: Create function
    const message = `User ${user.id}: ${user.name} (${user.email})` // Step 5: Create message
    console.log(message) // Step 4 & 6: Print message
}

const user: User = { id: 1, name: "Alice", email: "alice@example.com" } // Step 7: Create user object

// Step 7: Call the function
displayUser(user)
