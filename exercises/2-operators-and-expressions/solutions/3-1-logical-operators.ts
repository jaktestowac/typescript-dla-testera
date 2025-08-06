// 🧪 Exercise 3.1: Logical operators
// This exercise will help you practice logical operators.

// -------------------------
// ✅ Exercise: Logical operators ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable `isLoggedIn` and assign it the value true
// 2. Create a variable `hasPermission` and assign it the value false
// 3. Create a variable `canAccess` using && operator: isLoggedIn && hasPermission
// 4. Create a variable `canEdit` using && operator: isLoggedIn && hasPermission
// 5. Create a variable `isNotLoggedIn` using ! operator: !isLoggedIn
// 6. Print each result using console.log()

// 💭 Questions to think about:
// - What happens if you use || instead of && for canAccess?
// - Why does the order of conditions matter in logical expressions?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Can access: true"
// "Can edit: false"
// "Is not logged in: false"
// -------------------------

// 👇 Your code here 👇 
const isLoggedIn = true // Step 1: Create a variable `isLoggedIn` and assign it the value true
const hasPermission = false // Step 2: Create a variable `hasPermission` and assign it the value false

const canAccess = isLoggedIn && hasPermission // Step 3: Create a variable `canAccess` using && operator
const canEdit = isLoggedIn && hasPermission // Step 4: Create a variable `canEdit` using && operator
const isNotLoggedIn = !isLoggedIn // Step 5: Create a variable `isNotLoggedIn` using ! operator

console.log("Can access: " + canAccess) // Step 6: Print each result
console.log("Can edit: " + canEdit)
console.log("Is not logged in: " + isNotLoggedIn) 