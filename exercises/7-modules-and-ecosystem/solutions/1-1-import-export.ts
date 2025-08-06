// 🧪 Exercise 1.1: Import-export
// This exercise will help you practice import and export.

// -------------------------
// ✅ Exercise: Import-export ✅
// -------------------------

export {} // Ignore this line

// -------------------------
// 🎯 Your Task: Work with existing modules
// -------------------------

// We've created a math module for you in 'math-utils.ts'
// It contains functions: add, subtract, multiply, divide, power, squareRoot
// And constants: PI, E

// Steps:
// 1. Import the `add` function from './math-utils'
// 2. Import the `multiply` function from './math-utils'
// 3. Import the `power` function from './math-utils'
// 4. Import the `PI` constant from './math-utils'
// 5. Use these functions to calculate: (5 + 3) * 2^3
// 6. Print the result: "Result: [calculated value]"
// 7. Also print: "PI value: [PI value]"

// 💭 Questions to think about:
// - What's the difference between named imports and default imports?
// - Why do we use relative paths (./) in imports?
// - What happens if you try to import something that isn't exported?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Result: 64"
// "PI value: 3.14159"
// (Because: (5 + 3) * 2^3 = 8 * 8 = 64)
// -------------------------

// 👇 Your code here 👇 
import { add, multiply, power, PI } from "../math-utils" // Step 1-4: Import functions and constant

const result = multiply(add(5, 3), power(2, 3)) // Step 5: Calculate (5 + 3) * 2^3
console.log("Result: " + result) // Step 6: Print result
console.log("PI value: " + PI) // Step 7: Print PI value 