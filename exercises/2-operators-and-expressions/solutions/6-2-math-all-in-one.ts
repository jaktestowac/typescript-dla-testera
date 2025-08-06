// 🧪 Exercise 6.2: Math All-in-One Challenge
// This exercise will help you practice all the main Math object methods in TypeScript.

// -------------------------
// ✅ Exercise: Math All-in-One ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable `value` and set it to -3.7
// 2. Calculate the absolute value and store in `absValue`
// 3. Round `value` up (ceil) and store in `ceilValue`
// 4. Round `value` down (floor) and store in `floorValue`
// 5. Raise 2 to the power of 5 and store in `powerValue`
// 6. Find the square root of 81 and store in `sqrtValue`
// 7. Find the minimum and maximum of: 10, -3.7, 25, 0 (store in `minValue` and `maxValue`)
// 8. Generate a random number between 1 and 10 (inclusive) and store in `randomValue`
// 9. Get the sign of `value` and store in `signValue`
// 10. Print all results in the following format (one per line):
//     Absolute: X
//     Ceil: X
//     Floor: X
//     Power: X
//     Sqrt: X
//     Min: X
//     Max: X
//     Random: X
//     Sign: X

// -------------------------
// 📤 Example Output (Random will vary):
// -------------------------
// Absolute: 3.7
// Ceil: -3
// Floor: -4
// Power: 32
// Sqrt: 9
// Min: -3.7
// Max: 25
// Random: 7
// Sign: -1
// -------------------------

// 👇 Your code here 👇

const value = -3.7 // Step 1
const absValue = Math.abs(value) // Step 2
const ceilValue = Math.ceil(value) // Step 3
const floorValue = Math.floor(value) // Step 4
const powerValue = Math.pow(2, 5) // Step 5
const sqrtValue = Math.sqrt(81) // Step 6
const minValue = Math.min(10, value, 25, 0) // Step 7
const maxValue = Math.max(10, value, 25, 0) // Step 7
const randomValue = Math.floor(Math.random() * 10) + 1 // Step 8
const signValue = Math.sign(value) // Step 9

//  // Step 10 Print all results
console.log("Absolute: " + absValue)
console.log("Ceil: " + ceilValue)
console.log("Floor: " + floorValue)
console.log("Power: " + powerValue)
console.log("Sqrt: " + sqrtValue)
console.log("Min: " + minValue)
console.log("Max: " + maxValue)
console.log("Random: " + randomValue)
console.log("Sign: " + signValue)
