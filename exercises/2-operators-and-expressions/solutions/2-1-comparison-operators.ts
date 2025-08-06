// 🧪 Exercise 2.1: Comparison operators
// This exercise will help you practice comparison operators.

// -------------------------
// ✅ Exercise: Comparison operators ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable `x` and assign it the value 15
// 2. Create a variable `y` and assign it the value 10
// 3. Compare x > y and store result in a variable
// 4. Compare x < y and store result in a variable
// 5. Compare x >= y and store result in a variable
// 6. Compare x <= y and store result in a variable
// 7. Print each comparison result

// 💭 Questions to think about:
// - What's the difference between == and ===?
// - What happens when you compare a number with a string?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "x > y: true"
// "x < y: false"
// "x >= y: true"
// "x <= y: false"
// -------------------------

// 👇 Your code here 👇 
const x = 15 // Step 1: Create a variable `x` and assign it the value 15
const y = 10 // Step 2: Create a variable `y` and assign it the value 10

const greater = x > y // Step 3: Compare x > y
const less = x < y // Step 4: Compare x < y
const greaterOrEqual = x >= y // Step 5: Compare x >= y
const lessOrEqual = x <= y // Step 6: Compare x <= y

console.log("x > y: " + greater) // Step 7: Print each comparison result
console.log("x < y: " + less)
console.log("x >= y: " + greaterOrEqual)
console.log("x <= y: " + lessOrEqual)