// 🧪 Exercise 5.1: Nested objects
// This exercise will help you practice working with nested objects.

// -------------------------
// ✅ Exercise: Nested objects ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an object called `user` with nested structure:
//    - name: string
//    - address: { street: string, city: string, country: string }
//    - preferences: { theme: string, notifications: boolean }
// 2. Access nested properties using dot notation (e.g., user.address.street)
// 3. Print the user's name, street, and theme preference
// 
// Tip: You can access nested properties by chaining dot notation:
// user.address.street gets the street from the address object

// 💭 Questions to think about:
// - What happens if you try to access a nested property that doesn't exist?
// - How can you safely access nested properties? (Hint: optional chaining ?. or null checks)
// - What's the difference between user.address.street and user?.address?.street?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "User: John"
// "Street: 123 Main St"
// "Theme: dark"
// -------------------------

// 👇 Your code here 👇 