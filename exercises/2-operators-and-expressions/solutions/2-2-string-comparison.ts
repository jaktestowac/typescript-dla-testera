// 🧪 Exercise 2.2: String comparison
// This exercise will help you practice string comparison operators.

// -------------------------
// ✅ Exercise: String comparison ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable `name1` and assign it the value "Alice"
// 2. Create a variable `name2` and assign it the value "Bob"
// 3. Compare name1 === name2 and store the result
// 4. Compare name1 !== name2 and store the result
// 5. Print both comparison results using console.log()

// 💭 Questions to think about:
// - What happens if both names are "Alice"?
// - What's the difference between === and == for strings?
// - When should you use === vs ==? (Best practice: always use === for type safety)

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Names are equal: false"
// "Names are different: true"
//
// Note: === checks both value and type, while == only checks value
// Best practice: Use === to avoid unexpected type coercion
// -------------------------

// 👇 Your code here 👇
const name1 = "Alice" // Step 1: Create a variable `name1` and assign it the value "Alice"
const name2 = "Bob" // Step 2: Create a variable `name2` and assign it the value "Bob"

const areEqual = name1 === name2 // Step 3: Compare name1 === name2
const areDifferent = name1 !== name2 // Step 4: Compare name1 !== name2

console.log("Names are equal: " + areEqual) // Step 5: Print both comparison results
console.log("Names are different: " + areDifferent)
