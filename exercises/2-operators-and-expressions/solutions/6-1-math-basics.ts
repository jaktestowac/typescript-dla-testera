// 🧪 Exercise 6.1: Math Basics (Beginner Friendly)
// This exercise will help you practice using the built-in Math object in TypeScript.

// -------------------------
// ✅ Exercise: Math Basics ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable called `number` and set it to -7.8
// 2. Use Math.abs() to get the absolute value and store it in `absoluteValue`
// 3. Use Math.round() to round the original number and store it in `roundedValue`
// 4. Print both values in the following format:
//    "Absolute value: X"
//    "Rounded value: Y"

// -------------------------
// 📤 Expected Output:
// -------------------------
// Absolute value: 7.8
// Rounded value: -8
// -------------------------

// 👇 Your code here 👇

// Step 1
const number = -7.8

// Step 2
const absoluteValue = Math.abs(number)

// Step 3
const roundedValue = Math.round(number)

// Step 4
console.log("Absolute value: " + absoluteValue)
console.log("Rounded value: " + roundedValue)
